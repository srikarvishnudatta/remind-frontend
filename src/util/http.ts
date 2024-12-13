import {NewUser, User} from "@/types/types.ts";

export async function createAccount(newUser: NewUser){
    const res = await fetch('http://localhost:8080/create', {
        method:"POST",
        body: JSON.stringify(newUser)
    })
    console.log(res)
}
async function login(user: User){
    const res = await fetch('http://localhost:8080/login', {
        method:"POST",
        body: JSON.stringify(user)
    })
    console.log(res)
}