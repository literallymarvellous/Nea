import {
  createContext,
  MutableRefObject,
  ReactNode,
  useContext,
  useRef,
  useState,
} from "react";

interface RefObject {
  onLink: boolean;
  setOnLink: React.Dispatch<React.SetStateAction<boolean>>;
  sections: string[];
}

const sections = ["general", "tech", "business", "sports", "entertainment"];

// export const RefContext = createContext<RefObject>();
export const RefContext = createContext<RefObject>({
  onLink: false,
  setOnLink: () => null,
  sections,
});

interface AppProps {
  children: React.ReactNode;
}

export const Provider = ({ children }: AppProps) => {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const [onLink, setOnLink] = useState(false);
  return (
    <RefContext.Provider value={{ onLink, setOnLink, sections }}>
      {children}
    </RefContext.Provider>
  );
};

// TODO: change context name

export const useRefContext = () => {
  return useContext(RefContext);
};
