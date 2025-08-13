import { ref } from 'vue'
import { defineStore } from 'pinia'

interface SignUpData {
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
    state: string
}

export const userStore = defineStore('user', () => {
    const userdata = ref({
        account: '',
        password: '',
        token: '',
    })
    const ifLogin = ref(true)
    const signUpList = ref<SignUpData[]>([])
    async function updateSignUpList(signUpData: SignUpData) {
        signUpList.value.push(signUpData)
    }
    async function login(account: string, password: string, token: string) {
        userdata.value.account = account
        userdata.value.password = password
        userdata.value.token = token
    }
    async function register(account: string, password: string, token: string) {
        userdata.value.account = account
        userdata.value.password = password
        userdata.value.token = token
    }
    function logout() {
        userdata.value = {
            account: '',
            password: '',
            token: ''
        }
        ifLogin.value = false
    }
    return { login, register, userdata, logout, ifLogin, signUpList, updateSignUpList }

}, { persist: true })
