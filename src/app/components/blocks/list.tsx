import Image from 'next/image';
import {ListT} from "@/app/types/types";

export default function List({id, items}: ListT) {
    return <ul className="w-full" id={id}>
        {items.map((item, idx) => {
            return <li className="flex w-full p-3" key={idx}>
                <Image className="w-auto h-auto" src={item.src} alt={item.title} width="50" height="30"/>
                <div className="flex flex-col pl-3">
                    <h2 className="font-bold">{item.title}</h2>
                    <span>{item.description}</span>
                </div>
            </li>
        })}
    </ul>
} 