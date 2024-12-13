import umbrella from "@/assets/umbrella.png";
import IllustrationSvg from "@/components/Illustration.svg.tsx";
import {HandCoins} from "lucide-react";
import {Input} from "@/components/ui/input.tsx";
import {Button} from "@/components/ui/button.tsx";
import logo from "@/assets/google-logo.png";
import {NavLink} from "react-router-dom";
import {FormEvent} from "react";
import {createAccount} from "@/util/http.ts";
import {useMutation} from "@tanstack/react-query";

export default function CreateAccountPage() {
    const {mutate} = useMutation({mutationFn: createAccount})


    function submitHandler(event: FormEvent<HTMLFormElement>){
        event.preventDefault()
        const formData = new FormData(event.target)
        const formElements = Object.fromEntries(formData)
        mutate(formElements)
    }
    return <section className={'h-screen flex'}>
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
                <form action="" className={"flex flex-col justify-center items-center col-start-2 col-end-4 gap-4"} onSubmit={submitHandler}>
                    <h1 className={"flex gap-2 text-3xl font-semibold"}>Join us today!<HandCoins/></h1>
                    <Input name={"username"} type={"email"} placeholder={"Email"} required/>
                    <Input name={"password"} type={"password"} placeholder={"Password"} required/>
                    <div className={"flex justify-between w-full gap-1"}>
                        <Input name={"firstName"} placeholder={"First Name"}/>
                        <Input name={"lastName"} placeholder={"Last Name"}/>
                    </div>
                    <Button variant={"outline"} className={"bg-[#6153BD] text-slate-50 p-5"}>Submit</Button>
                    <p className={"text-left"}>Already with us? <span
                        className={"text-[#6153BD] underline underline-offset-2"}><NavLink to={"/"}>Click here</NavLink></span></p>
                    <div className={"border-2 border-solid flex items-center gap-2 p-2 border-black"}>
                        <img src={logo} alt="" height={36} width={36}/>
                        <p>Create with Google</p>
                    </div>
                </form>
            </div>
        </div>
    </section>
}