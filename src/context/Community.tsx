import { createContext, useState, ReactNode, useContext } from "react";

interface CommunityContextType {
  showCommunity: boolean;
  setShowCommunity: (value: boolean) => void;
}

export const CommunityContext = createContext<CommunityContextType | undefined>(
  undefined
);

interface CommunityProviderProps {
  children: ReactNode;
}

export const CommunityProvider = ({ children }: CommunityProviderProps) => {
  const [showCommunity, setShowCommunity] = useState<boolean>(false);

  return (
    <CommunityContext.Provider value={{ showCommunity, setShowCommunity }}>
      {children}
    </CommunityContext.Provider>
  );
};

export const useCommunity = (): CommunityContextType => {
  const context = useContext(CommunityContext);
  if (context === undefined) {
    throw new Error("useCommunity must be used within a CommunityProvider");
  }
  return context;
};
