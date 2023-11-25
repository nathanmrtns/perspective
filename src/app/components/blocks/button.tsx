import { ButtonT } from "./types"

export default function Button({id, text, color, bgColor}: ButtonT) {
    return <button id={id} className="w-full p-2 rounded" style={{
        backgroundColor: bgColor,
        color: color
    }}>{text}</button>
}