import {NewUser, User} from "@/types/types.ts";
const url = 'http://localhpst:8080/'

export async function createAccount(newUser: NewUser){
    const res = await fetch(url + 'auth/create', {
        method:"POST",
        body: JSON.stringify(newUser)
    })
    console.log(res)
}
export async function login(user: User){
    const res = await fetch(url + 'auth/login', {
        method:"POST",
        body: JSON.stringify(user)
    })
    console.log(res)
}