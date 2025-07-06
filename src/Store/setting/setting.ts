import { defineStore } from 'pinia'
import { ref } from 'vue'

export const userSettingStore = defineStore('userSetting', ()=>{
    const language = ref('zh-CN');
    const changeLanguage = () => {
        language.value == "zh-CN" ? language.value = "en-US" : language.value = "zh-CN";
    }
    const isLogin = ref(true);

    return {
        language,
        changeLanguage,
        isLogin
    }
});
