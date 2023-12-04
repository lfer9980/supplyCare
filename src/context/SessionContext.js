"use client";
import React, { useState } from 'react'
import { createContext } from "react";

export const SessionContext = createContext();

export function SessionProvider({ children }) {

    return (
        <SessionContext.Provider
            value={{
            }}
        >
            {children}
        </SessionContext.Provider>
    );
}
