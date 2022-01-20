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
}

// export const RefContext = createContext<RefObject>();
export const RefContext = createContext<RefObject>({
  onLink: false,
  setOnLink: () => null,
});

interface AppProps {
  children: React.ReactNode;
}

export const Provider = ({ children }: AppProps) => {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const [onLink, setOnLink] = useState(false);
  return (
    <RefContext.Provider value={{ onLink, setOnLink }}>
      {children}
    </RefContext.Provider>
  );
};

export const useRefContext = () => {
  return useContext(RefContext);
};
