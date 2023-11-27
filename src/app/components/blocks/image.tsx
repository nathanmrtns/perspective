import Image from 'next/image';
import {ImageT} from "@/app/types/types";

export default function ImageBlock({id, src}: ImageT){
    return <Image className="w-auto h-wauto" id={id} src={src} alt={''} width="375" height="220"/>
}