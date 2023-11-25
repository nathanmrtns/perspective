import BlockRenderer from "./blocks/blockRenderer";
import {data} from  '@/app/data/data';

export default function Preview() {
    return <div className="flex w-full justify-center items-center">
        <div className="flex flex-col w-[375px] h-[600px] items-center py-5 px-5 gap-y-5 overflow-auto rounded border">
            <BlockRenderer blocks={data.pages[0].blocks}/>
        </div>
    </div>
}