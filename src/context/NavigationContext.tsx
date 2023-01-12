import { createContext, ReactNode, useContext, useState } from "react";

type NavigationContext = {
    isOpen: boolean;
    setIsOpen(isOpen: boolean): void;
    location: string | undefined;
    setLocation(location: string): void;
};

const navigationContextDefaultValues: NavigationContext = {
    isOpen: false,
    setIsOpen: () => {},
    location: undefined,
    setLocation: () => {},
};

const NavigationContext = createContext<NavigationContext>(
    navigationContextDefaultValues
);

export function useNavigation() {
    return useContext(NavigationContext);
}

type Props = {
    children: ReactNode;
};

export function NavigationProvider({ children }: Props) {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [location, setLocation] = useState<string | undefined>();

    return (
        <>
            <NavigationContext.Provider
                value={{
                    isOpen,
                    setIsOpen,
                    location,
                    setLocation,
                }}
            >
                {children}
            </NavigationContext.Provider>
        </>
    );
}
