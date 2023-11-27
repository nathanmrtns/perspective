import Image from "next/image";
import { ListT } from "@/app/types/types";
import { base64Shimmer } from "@/app/utils";

export default function List({ id, items }: ListT) {
  return (
    <ul className="w-full" id={id}>
      {items.map((item, idx) => {
        return (
          <li className="flex w-full p-3 items-center" key={idx}>
            <Image
              className="w-12 h-12 rounded"
              src={item.src}
              alt={item.title}
              width="48"
              height="48"
              placeholder="blur"
              blurDataURL={`data:image/svg+xml;base64,${base64Shimmer(48, 48)}`}
            />
            <div className="flex flex-col pl-3">
              <h2 className="font-bold">{item.title}</h2>
              <span>{item.description}</span>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
