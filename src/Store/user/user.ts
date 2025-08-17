import { ref } from 'vue'
import { defineStore } from 'pinia'

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

export const userStore = defineStore('user', () => {
    const userdata = ref({
        account: '',
        name: '',
        password: '',
        token: '',
    })
    const ifLogin = ref(false)
    const signUpList = ref<SignUpDataType[]>([])
    async function updateSignUpList(signUpData: SignUpDataType) {
        signUpList.value.push(signUpData)
    }
    async function login(account: string, password: string, token: string, name: string) {
        userdata.value.account = account
        userdata.value.password = password
        userdata.value.token = token
        userdata.value.name = name
    }
    async function register(account: string, password: string, token: string, name: string) {
        userdata.value.account = account
        userdata.value.password = password
        userdata.value.token = token
        userdata.value.name = name
    }
    function logout() {
        userdata.value = {
            account: '',
            password: '',
            token: '',
            name: ''
        }
        ifLogin.value = false
    }
    return { login, register, userdata, logout, ifLogin, signUpList, updateSignUpList }

}, { persist: true })
