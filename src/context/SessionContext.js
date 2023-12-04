"use client";
import React, { useState } from 'react'
import { createContext } from "react";

import { user_data } from '@/utils/data';
import { order } from '@/utils/data';
import { alerts } from '@/utils/data';
import { routes_almacen } from '@/utils/data';
import { routes_doctors } from '@/utils/data';


export const SessionContext = createContext();

export function SessionProvider({ children }) {

    return (
        <SessionContext.Provider
            value={{
                user_data,
                order,
                alerts,
                routes_almacen,
                routes_doctors
            }}
        >
            {children}
        </SessionContext.Provider>
    );
}
