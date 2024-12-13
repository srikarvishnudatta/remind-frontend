import {Dispatch, SetStateAction} from "react";

export interface User{
    username:string;
    password:string;
}
export interface NewUser extends User{
    firstName:string;
    lastName:string;
}

export interface InputType{
    type:string;
    placeholder:string;
    required:boolean;
    setChange:Dispatch<SetStateAction<string>>
}

export interface ButtonType{
    text:string;
    type?:string;
    onClick?: () => void;
    disabled?:boolean;
}