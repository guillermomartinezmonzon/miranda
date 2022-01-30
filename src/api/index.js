import axios from "axios"
import 'dotenv/config'

let token = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser")).token
  : "";

const apiUrl = process.env.URL_API || 'http://localhost:3000/api/';

let headers = {
    headers: {
        authorization: token, 
        'Content-Type': 'application/json'  
    }
}

export async function loginAPI(email, password){
    console.log('fetchLogin');
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
                console.log(res.data);
                if (res.data.token) headers.headers.authorization = res.data.token;
                return res.data

            })
            .catch((error) => {
                console.log(error)
                return error
            })
}

export async function postAPI(url, body){
    console.log('postAPI');
    return await axios
        .post(`${apiUrl}${url}`,body, headers) 
            .then(res => {
                console.log(res.data);
                return res.data

            })
            .catch((error) => {
                console.log(error)
                return error
            })
}

// export async function getIdAPI(url, id2){
//     return await axios
//         .get(`${apiUrl}${url}/${id2}`, headers)
//             .then(res => {
//                 return res.data

//             })
//             .catch((error) => {
//                 return error
//             })
// }

export async function getAPI(url){
    console.log('getAPI');
    return await axios
        .get(`${apiUrl}${url}`, headers) 
            .then(res => {
                console.log(res.data);
                return res.data

            })
            .catch((error) => {
                console.log(error)
                return error
            })
}

export async function deleteAPI(url, id2){
    console.log('deleteAPI');
    return await axios
        .delete(`${apiUrl}${url}/${id2}`, headers)
            .then(res => {
                console.log(res.data);
                return res.data

            })
            .catch((error) => {
                console.log(error)
                return error
            })
}

export async function putAPI(url, id2, body){
    console.log('putAPI');
    return await axios
        .put(`${apiUrl}${url}/${id2}`, body, headers)
            .then(res => {
                console.log(res.data);
                return res.data

            })
            .catch((error) => {
                console.log(error)
                return error
            })
}
