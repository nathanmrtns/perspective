"use client";

import BlockRenderer from "./blocks/blockRenderer";
import { useFileContext } from "../context";

export default function Preview() {
  const { state, selectedPageId } = useFileContext();

  const pageBlocks = state?.pages.find((p) => p.id === selectedPageId)?.blocks;

  return (
    <div className="flex w-full justify-center items-center bg-primary-300">
      {state ? (
        <div
          className="flex flex-col w-[375px] min-h-[600px] items-center
         py-5 px-5 gap-y-5 overflow-auto rounded-md shadow-lg bg-white"
          style={{
            backgroundColor: state.bgColor,
          }}
        >
          <BlockRenderer blocks={pageBlocks} />
        </div>
      ) : (
        <h1 className="text-xl font-bold text-primary-dark">
          Select a template file for preview
        </h1>
      )}
    </div>
  );
}
