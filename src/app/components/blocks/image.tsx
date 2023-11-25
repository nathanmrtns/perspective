import Image from 'next/image';
import {ImageT} from './types';

export default function ImageBlock({id, src}: ImageT){
    return <Image id={id} src={src} alt={''} width="375" height="220"/>
}