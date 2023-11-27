import Image from "next/image";
import { ImageT } from "@/app/types/types";
import { base64Shimmer } from "@/app/utils";

export default function ImageBlock({ id, src }: ImageT) {
  return (
    <Image
      className="min-w-20 h-auto rounded"
      id={id}
      src={src}
      alt={""}
      width="375"
      height="225"
      placeholder={`data:image/svg+xml;base64,${base64Shimmer(375, 225)}`}
    />
  );
}
