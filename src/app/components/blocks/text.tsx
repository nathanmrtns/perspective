import {TextT} from "@/app/types/types";

export default function Text({id, text, color, align}: TextT) {
    const textAlignment = {
        'center': "text-center",
        "left": "text-left",
        "right": 'text-right'
    }
    return <p id={id} className={`${textAlignment[align]} w-full colored-text`} style={{"color": color}}>{text}</p>
}