import { ButtonT } from "@/app/types/types";

export default function Button({ id, text, color, bgColor }: ButtonT) {
  return (
    <button
      role="button"
      id={id}
      className="w-full p-2 rounded"
      style={{
        backgroundColor: bgColor,
        color: color,
      }}
    >
      {text}
    </button>
  );
}
