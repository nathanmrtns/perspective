import Image from 'next/image';
import {ListT} from './types';

export default function List({id, items}: ListT) {
    return <ul className="w-full" id={id}>
        {items.map((item, idx) => {
            return <li className="flex w-full bg-white p-3" key={idx}>
                <Image className="" src={item.src} alt={item.title} width="50" height="30"/>
                <div className="flex flex-col pl-3">
                    <h2 className="font-bold">{item.title}</h2>
                    <span>{item.description}</span>
                </div>
            </li>
        })}
    </ul>
} 