import {ReactNode} from "react";

export interface User{
    username:string;
    password:string;
}
export interface NewUser extends User{
    firstName:string;
    lastName:string;
}
export interface LayoutProps{
    children:ReactNode;
}