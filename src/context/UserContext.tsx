import {
  createContext,
  useEffect,
  useState,
  ReactNode,
  useContext,
} from "react";
import Cookies from "js-cookie";

interface UserContextType {
  userLogged: boolean;
  setUserLogged: (value: boolean) => void;
}

export const UserContext = createContext<UserContextType | undefined>(
  undefined
);

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider = ({ children }: UserProviderProps) => {
  const [userLogged, setUserLogged] = useState<boolean>(() => {
    const token = Cookies.get("token");
    return !!token; // Convert token existence to boolean
  });

  useEffect(() => {
    // No need to set userLogged to false initially
    const token = Cookies.get("token");
    if (token) {
      setUserLogged(true);
    }
    // setUserLogged(false); // This line resets the userLogged state immediately after setting it
  }, []);

  return (
    <UserContext.Provider value={{ userLogged, setUserLogged }}>
      {children}
    </UserContext.Provider>
  );
};

export const useAuth = () => useContext(UserContext);
