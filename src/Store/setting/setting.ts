import { defineStore } from 'pinia'
import { ref } from 'vue'
interface SignUpDataType {
    name: string,
    gender: string,
    college: string,
    class: string,
    group: string,
    telephone: string,
    qq: string,
    interest: string,
    know: string,
    want: string,
    experience: string,
    date: string,
    imgUrls: string[],
    state: string
}
interface WebSettingsType {
    groupOptions: {
        value: string;
        label: string;
        email: string;
    }[];
    joinList: SignUpDataType[];
}
interface GroupOptions {
    value: string;
    label: string;
    email: string;
}
export const userSettingStore = defineStore('userSetting', ()=>{
    const language = ref('zh-CN');
    const changeLanguage = () => {
        language.value == "zh-CN" ? language.value = "en-US" : language.value = "zh-CN";
    }
    const WebSettings = ref<WebSettingsType>({
        groupOptions: [
            { value: '0', label: '电控组', email: '3462014130@qq.com' },
            { value: '1', label: '视觉组', email: '3080832239@qq.com' },
            { value: '2', label: '机械组', email: '3462014130@qq.com' },
            { value: '3', label: '硬件组', email: '3080832239@qq.com' },
            { value: '4', label: '宣传组', email: '3462014130@qq.com' }
        ],
        joinList: []
    });
    
    const updateWebSetting = (data : GroupOptions[]) => {
        WebSettings.value.groupOptions = data;
    }

    return {
        language,
        changeLanguage,
        WebSettings,
        updateWebSetting
    }
});
