import { faHashtag } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react";

export interface Props {
    text: string
    id?: string
    small?: boolean
}

export default function(props: Props) {
    let id = props.id || props.text
    const [anim, setAnim] = useState("none");
    async function copy() {
        setAnim("none")
        try {
            await navigator.clipboard.writeText(location.href.replace(/#.*$/g, "") + "#" + id)
            setAnim("success")
        } catch(err) {
            setAnim("fail")
            console.error(err)
        }
    }

    return <span className={props.small ? "title-inner small" : "title-inner"} id={id}>
                <span className="copy" onClick={copy} data-anim={anim}><FontAwesomeIcon icon={faHashtag} /></span>
                {props.text}
        </span>
}