import styles from './Button.module.css'
import {ButtonType} from "@/types/types.ts";
export default function Button(props:ButtonType) {
    return <button className={styles.button} type={"submit"} >
        {props.text}
    </button>
}