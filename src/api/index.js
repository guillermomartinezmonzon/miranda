import axios from "axios"
import 'dotenv/config'

let token = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser")).token
  : "";

const apiUrl = 'https://mirandafront.gmonzon.com/api/';
// const apiUrl = "http://localhost:3000/api/"

let headers = {
    headers: {
        authorization: token, 
        'Content-Type': 'application/json'  
    }
}

export async function loginAPI(email, password){
    return await axios
        .post(`${apiUrl}login`, 
            {
               email: email,
               password: password
            },
            {
                headers: {
                    'Content-Type': 'application/json'  
                }
            }
            )
            .then(res => {
                if (res.data.token) headers.headers.authorization = res.data.token;
                return res.data
            })
            .catch((error) => {
                return error
            })
}

export async function postAPI(url, body){
    return await axios
        .post(`${apiUrl}${url}`,body, headers) 
            .then(res => {
                return res.data
            })
            .catch((error) => {
                return error
            })
}

export async function getAPI(url){
    return await axios
        .get(`${apiUrl}${url}`, headers) 
            .then(res => {
                return res.data

            })
            .catch((error) => {
                return error
            })
}

export async function deleteAPI(url, id2){
    return await axios
        .delete(`${apiUrl}${url}/${id2}`, headers)
            .then(res => {
                return res.data

            })
            .catch((error) => {
                return error
            })
}

export async function putAPI(url, id2, body){
    return await axios
        .put(`${apiUrl}${url}/${id2}`, body, headers)
            .then(res => {
                return res.data

            })
            .catch((error) => {
                return error
            })
}
