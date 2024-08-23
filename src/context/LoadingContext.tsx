import { createContext, ReactNode, useState } from "react";
import { useContext } from "react";
import Loading from "../components/Loading";

export const ContextInit = createContext<
  React.Dispatch<React.SetStateAction<boolean>>
>(() => {});
export const loadingContext = () => useContext(ContextInit);

const ContextGlobal = ({ children }: { children: ReactNode }) => {
  const [loading, setLoading] = useState<boolean>(false);
  return (
    <>
      <ContextInit.Provider value={setLoading}>{children}</ContextInit.Provider>
      {loading && <Loading />}
    </>
  );
};

export default ContextGlobal;
