import Button from "@/components/Button.tsx";
import {NavLink, useNavigate} from "react-router-dom";
import {Input} from "@/components/Input.tsx";
import styles from './LoginPage.module.css'
import {FormEvent, useState} from "react";
import {useMutation} from "@tanstack/react-query";
import {login} from "@/util/http.ts";

export function LoginPage() {
    const [email, setEmail] = useState<string>(" ")
    const [password, setPassword] = useState<string>(" ")

    const { isPending, mutate} = useMutation({
        mutationFn: login,
        onSuccess: () => navigation('/create')
    })
    const navigation = useNavigate()

    function submitHandler(ev: FormEvent<HTMLFormElement>){
        ev.preventDefault();
        mutate({email, password})
    }
    return <section className={'background card-container'}>
        <div className={'card '}>
            <h1>Welcome back!</h1>
            <form className={styles.login} onSubmit={submitHandler}>
                <Input type={"email"} placeholder={"Email"} required={true} setChange={setEmail}/>
                <Input type={"password"} placeholder={"Password"} required={true} setChange={setPassword}/>
                <p>Dont have an account yet? <NavLink to={"/create"}>Click here!</NavLink></p>
                <Button text={isPending ? 'Please wait': 'Login'} type={"submit"} disabled={isPending}/>
            </form>
        </div>
    </section>
}