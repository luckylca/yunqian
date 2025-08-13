import { instance } from "@/utils/http";
import imgApi from '@/apis/api';
import axios from "axios";
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

export const getLogin = async (account: string, password: string) => {
    return await instance.get('/login', {
        params: {
            account,
            password
        }
    });
}
export const getReg = async (account: string, password: string) => {
    return await instance.get('/register', {
        params: {
            account,
            password
        }
    });
}
export const uploadImage = async (file: File) => {
    const formData = new FormData();
    formData.append('source', file);
    formData.append('action', 'upload');
    formData.append('key', imgApi.imgApiKey);

    return await axios.post('https://freeimage.host/api/1/upload', formData)
    // return await imgInstance.post('', formData);
}
export const uploadList = async (account: string, password: string, joinList: SignUpData[]) => {
    return await instance.post('/uploadList', {
        account,
        password,
        joinList
    });
}