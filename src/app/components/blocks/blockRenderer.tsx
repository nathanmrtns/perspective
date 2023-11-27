import { ButtonT, ListT, TextT, ImageT } from "@/app/types/types";
import Button from "./button";
import Text from "./text";
import Image from "./image";
import List from "./list";


export default function BlockRenderer({blocks}: any) {
    return blocks.map((block: any) => {
        switch (block.type){ 
            case 'button':
                return <Button key={block.id} {...(block as ButtonT)}/>
            case 'text':
                return <Text key={block.id} {...(block as TextT)}/>
            case 'image':
                // eslint-disable-next-line jsx-a11y/alt-text
                return <Image key={block.id} {...(block as ImageT)}/>
            case 'list':
                return <List key={block.id} {...((block as unknown) as ListT)}/>
            }
            return null;
    });
}