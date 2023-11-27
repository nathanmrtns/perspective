import { createContext, Reducer, useContext, useReducer } from "react";
import { FileReducerState, FileContextAction } from "./types/types";

const INITIAL_STATE = {
  state: undefined,
  selectedPageId: undefined,
};

const FileContext = createContext<FileReducerState>(INITIAL_STATE);
const FileDispatcherContext = createContext<any>({dispatch: () => undefined});

export function useFileContext() {
  return useContext(FileContext);
}

export function useFileDispatcher() {
  return useContext(FileDispatcherContext);
}

function fileReducer(state: FileReducerState, action: FileContextAction): any {
  switch (action.type) {
    case "loaded": {
      return {
        state: { ...action.data },
        selectedPageId: action.data?.pages[0].id,
      };
    }
    case "selectPage": {
      return {
        state: { ...state.state },
        selectedPageId: action.pageId,
      };
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}

export function FileProvider({ children }: { children: React.ReactNode }) {
  const [context, dispatch] = useReducer<Reducer<FileReducerState, FileContextAction>>(
    fileReducer,
    { state: undefined, selectedPageId: undefined }
  );

  return (
    <FileContext.Provider
      value={{
        state: context.state,
        selectedPageId: context.selectedPageId,
      }}
    >
      <FileDispatcherContext.Provider value={dispatch}>
        {children}
      </FileDispatcherContext.Provider>
    </FileContext.Provider>
  );
}
