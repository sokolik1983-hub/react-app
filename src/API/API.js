import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY' : 'b78bd55f-107c-4a94-ba2e-94a1aac79ca7',
    },
})

export const userAPI = {
    getUsers(currentPage = 1, pageSize = 10)  {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data);
    }
}

