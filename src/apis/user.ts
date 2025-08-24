import { instance } from "@/utils/http";
import imgApi from '@/apis/api';
import axios from "axios";
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
interface GroupOptions {
    value: string;
    label: string;
    email: string;
}
interface WebSettingsType {
    groupOptions: GroupOptions[];
    joinList: SignUpDataType[];
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
    return await axios.post('http://www.luckyy.top/api/uploadImage', formData)
    // return await imgInstance.post('', formData);
}
export const uploadList = async (token: string, joinList: SignUpDataType[]) => {
    return await instance.post('/uploadList', {
        token,
        joinList
    });
}
export const getLists = async (token: string) => {
    return await instance.get('/getList', {
        params: {
            token
        }
    });
}

export const getAdminWebData = async () => {
    return await instance.get('/getAdminWebData');
}

export const updateAdminWebSetting = async (data: GroupOptions[]) => {
    return await instance.post('/updateAdminWebSetting', data);
}