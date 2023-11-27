import {TextT} from "@/app/types/types";

export default function Text({id, text, color, align}: TextT) {
    /* 
    * Given that we need the alignment dynamic, we need all classes available before purge.
    * Sinc colors are more dynamic with infinite options, then the color goes to style object.
    * Tailwind recommends this approach https://tailwindcss.com/docs/content-configuration#dynamic-class-names
    */ 
    const textAlignment = {
        'center': "text-center",
        "left": "text-left",
        "right": 'text-right'
    }
    return <p id={id} className={`${textAlignment[align]} w-full colored-text`} style={{"color": color}}>{text}</p>
}