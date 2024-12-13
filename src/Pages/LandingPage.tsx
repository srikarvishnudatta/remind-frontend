import { Button } from "@/components/ui/button"
import {Input} from "@/components/ui/input.tsx";
import IllustrationSvg from "@/components/Illustration.svg.tsx";
import { HandCoins, Info } from "lucide-react";
import logo from "../assets/google-logo.png"
import umbrella from "../assets/umbrella.png"
import {NavLink} from "react-router-dom";
import {useMutation} from "@tanstack/react-query";
import {createAccount} from "@/util/http.ts";
import {FormEvent} from "react";


export function LandingPage(){

    const {mutate, isError} = useMutation({mutationFn: createAccount})


    function submitHandler(event: FormEvent<HTMLFormElement>){
        event.preventDefault()
        const formData = new FormData(event.target)
        const formElements = Object.fromEntries(formData)
        mutate(formElements)
    }
    const errStyles = isError ? 'border-red-600' : undefined
    return (
        <section className={'h-screen flex'}>
        {/*   left*/}
            <div className={'w-1/2 p-2'}>
                <div className={"p-2 flex gap-2 items-center"}>
                    <img src={umbrella} alt="" height={36} width={36}/>
                    <h1 className={"font-semibold text-3xl "}>
                        Remind
                    </h1>
                </div>
                <div className={'flex flex-col justify-center items-center mt-[100px]'}>
                    <IllustrationSvg/>
                </div>
            </div>
            {/*    right*/}
            <div className={'w-1/2'}>
                <div className={' h-screen grid grid-cols-4'}>
                    <form action="" className={"flex flex-col justify-center items-center col-start-2 col-end-4 gap-4"}
                          onSubmit={submitHandler}>
                        <h1 className={"flex gap-2 text-3xl font-semibold"}>Welcome back<HandCoins/></h1>
                        {isError && <p className={'p-2 bg-red-200 flex gap-1 w-1/2 justify-center'}><Info /> Wrong credentials</p>}
                        <Input name={"username"} placeholder={"Email"} className={`${errStyles}`}/>
                        <Input name={"password"} placeholder={"Password"}/>

                        <Button variant={"outline"} className={"bg-[#6153BD] text-slate-50 p-5"}>Login</Button>
                        <p className={"text-left"}>Forgot your password? <span
                            className={"text-[#6153BD] underline underline-offset-2"}>Click here</span></p>
                        <p className={"text-left text-[#6153BD] underline underline-offset-2"}><NavLink to={"/create"}>Join us today</NavLink></p>
                        <div className={"border-2 border-solid flex items-center gap-2 p-2 border-black"}>
                            <img src={logo} alt="" height={36} width={36}/>
                            <p>Sign in with Google</p>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}