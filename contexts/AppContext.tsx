"use client";

// import { getLocalStorage, setLocalStorage } from "@/lib/localStorage";
import { createContext, useEffect, useState } from "react";
import { toast } from "sonner";

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

export const AppContext = createContext({} as any);

export const AppContextProvider = ({ children, user }: any) => {
    // useEffect(() => {
    // }, []);


    return (
        <AppContext.Provider
            value={{
                user
            }}
        >
            {children}
        </AppContext.Provider>
    );
};
