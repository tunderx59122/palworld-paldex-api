import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';
import { useAppStore } from '../store/app';

const appStore = useAppStore();

let { success_snack, error_snack, snack_text } = storeToRefs(appStore);

function handleError(error) {
    if (!error.status) { return; }

    const router = useRouter();

    switch(error.status) {
        case 400:
            error_snack.value = true;
            snack_text.value = error.data;
            break;
        case 401:
            localStorage.clear();
            router.push({ name : 'login' });
            break;
        default:
            break;
    }
}

function handleSuccess(success) {
    if (!success) { return; }
    switch(success.status) {
        case 200:
            success_snack.value = true;
            if (success.data) {
                if (typeof(success.data) == 'string') snack_text.value = success.data;
                if (typeof(success.data) == 'object') snack_text.value = success.data.message;
            } else {
                snack_text.value = 'Action effectuée avec succès';
            }
            break;
        case 201:
            success_snack.value = true;
            if (success.data) {
                snack_text.value = success.data;
            } else {
                snack_text.value = 'Action effectuée avec succès';
            }
            break;
        default:
            break;
    }

}

export default { handleError, handleSuccess };