import {InputType} from "@/types/types.ts";
import styles from './Input.module.css'
import {ChangeEvent} from "react";
export function Input({setChange, placeholder, type = "string"}: InputType) {
    function handleChange(ev: ChangeEvent<HTMLInputElement>){
        setChange(ev.target.value);
    }
    return <div >
        <input type={type} placeholder={placeholder} className={styles.input}
        onChange={handleChange}
        />
    </div>
}