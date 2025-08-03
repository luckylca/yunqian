import { instance } from "@/utils/http";
import {imgInstance} from "@/utils/http";
import imgApi from '@/apis/api';
import axios from "axios";
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