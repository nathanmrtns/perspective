"use client";

import { useFileContext, useFileDispatcher } from "@/app/context";
import PagesList from "./pageList";
import Image from "next/image";
import perspectiveLogo from "@/app/assets/perspective_logo.png";

export default function Sidebar() {
  const { state } = useFileContext();
  const dispatch = useFileDispatcher();

  async function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e?.target?.files?.item(0);
    if (file) {
      const text = await file?.text();
      await dispatch({
        type: "loaded",
        data: text ? JSON.parse(text) : {},
      });
    }
  }

  return (
    <div className="w-20 shrink-0 h-auto border-r-[1px] shadow-lg border-primary-100 p-4">
      <div className="flex shrink items-center mb-5">
        <Image
          src={perspectiveLogo}
          alt="Perspective gradient logo"
          width="50"
          height="50"
          priority={false}
        />
        <span className="block font-bold text-lg ml-3 text-center">
          {state?.name ? state.name : "Perspective"}
        </span>
      </div>
      <input
        id="file"
        className="block text-sm text-slate-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-full file:border-0
                    file:text-sm file:font-semibold
                    file:bg-secondary-200 file:bg-secondary-100
                    hover:file:bg-secondary-100 hover:file:text-white"
        type="file"
        accept="json"
        onChange={handleChange}
      />
      <div className="bg-primary-300 h-px my-6"></div>
      {state && <PagesList pages={state?.pages} />}
    </div>
  );
}
