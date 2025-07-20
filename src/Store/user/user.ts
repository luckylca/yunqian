import { ref } from 'vue'
import { defineStore } from 'pinia'

export const userStore = defineStore('user', () => {
    const userdata = ref({
        account: '',
        password: '',
        token: '',
    })
    const ifLogin = ref(false)
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
    }
    return { login, register, userdata, logout, ifLogin }

}, { persist: true })
