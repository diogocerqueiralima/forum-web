'use client'

import React, {createContext, useContext} from "react";
import {userService, UserService} from "@/services/UserService";

interface UserServiceContextProps {

    url: string
    children: React.ReactNode

}

const UseServiceContext = createContext<UserService | null>(null);

export function useUserService() {

    const context = useContext(UseServiceContext)

    if (!context)
        throw new Error("useUserService must be used within useService");

    return context;
}

export function UserServiceProvider({ url, children }: UserServiceContextProps) {

    const service = userService(url)

    return (
        <UseServiceContext.Provider value={service}>
            { children }
        </UseServiceContext.Provider>
    )

}