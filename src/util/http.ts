import {User} from "@/types/types.ts";

export async function login(data: User){
    const response = await fetch("http://localhost:8081", {
        method: 'POST',
        headers: {"Content-type":"application/json"},
        body: JSON.stringify(data)
    });
    return await response.json();
}