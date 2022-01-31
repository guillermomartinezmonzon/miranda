import axios from "axios"
import 'dotenv/config'

let token = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser")).token
  : "";

// const apiUrl = process.env.URL_API || 'https://mirandafront.gmonzon.com/api/';
const apiUrl = "http://localhost:3000/api/"

let headers = {
    headers: {
        authorization: token, 
        'Content-Type': 'application/json'  
    }
}

export async function checkAPI(){
    console.log("checkAPI")
    let i = await axios
        .post(`${apiUrl}login`, 
            {
                headers: {
                    'Content-Type': 'application/json'  
                }
            }
            )
            .then(res => {
                console.log(res.data);
                if (res.data) return true;
                return res.data

            })
            .catch((error) => {
                console.log(error)
                return false
            })
    console.log(i)
}

export async function loginAPI(email, password){
    console.log('fetchLogin');
    console.log(apiUrl+"/login");
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
    console.log(apiUrl+url)
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
    console.log(apiUrl+url)
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
    console.log(apiUrl+url+"/"+id2)
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
    console.log(apiUrl+url+"/"+id2)
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
