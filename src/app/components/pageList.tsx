import { useFileContext, useFileDispatcher } from "@/app/context";
import { Page } from "../types/types";

type PageList = {
  pages: Page[];
};

export default function PagesList({ pages }: PageList) {
  const { selectedPageId } = useFileContext();
  const dispatch = useFileDispatcher();

  const handleSelectPage = (pageId: string) => async () => {
    await dispatch({
      type: "selectPage",
      pageId: pageId,
    });
  };

  if (pages === undefined) return;

  const btnClass = {
    active: "bg-primary-100 hover:font-bold p-2 my-2 w-full text-white rounded",
    inactive:
      "bg-primary-300 text-primary-dark p-2 my-2 w-full rounded hover:bg-primary-dark hover:text-white",
  };

  return (
    <>
      <span className="text-lg font-medium">Pages</span>
      {pages.map((page: Page, idx: number) => {
        return (
          <button
            className={
              page.id === selectedPageId
                ? btnClass["active"]
                : btnClass["inactive"]
            }
            key={page.id}
            onClick={handleSelectPage(page.id)}
          >
            Page {idx + 1}
          </button>
        );
      })}
    </>
  );
}
