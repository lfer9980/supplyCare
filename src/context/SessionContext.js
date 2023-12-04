"use client";
import React, { useState } from 'react'
import { createContext } from "react";

export const SessionContext = createContext();

export function SessionProvider({ children }) {

    let user_data = [
        {
            "primer_nombre": "Jessica",
            "segundo_nombre": "",
            "apellido_paterno": "Garcia",
            "apellido_materno": "Gonzalez",
            "tipo": "medico",
            "foto": "/assets/images/profile.png",
            "link": "/doctors"
        },
        {
            "primer_nombre": "Luis",
            "segundo_nombre": "Angel",
            "apellido_paterno": "Fernandez",
            "apellido_materno": "Anchondo",
            "tipo": "almacen",
            "foto": "/assets/images/profile_2.png",
            "link": "/warehouse"
        },
    ]

    let order = [
        {
            "id": "12345",
            "status": "Pendiente",
            "color": "red",
            "data": {
                "Hospital": "Hospital 1",
                "Departamento": "Departamento 1",
                "Paciente": "Maria Guadalupe Sanchez Ortiz",
                "Sala de operacion": "Sala 1",
                "Cirugia realizada": "Cirugia 1",
                "Hora programada de la cirugia": "19:30",
                "Fecha de la cirugia": "03 / dic / 23",
            },
            "insumos": [
                {
                    "id": "1234567890",
                    "descripcion": "Aguja para estimulación nerviosa A025MM",
                    "solicitado": 2,
                    "recibido": 0,
                },
                {
                    "id": "1234567890",
                    "descripcion": "Aguja para estimulación nerviosa A025MM",
                    "solicitado": 2,
                    "recibido": 0,
                },
                {
                    "id": "1234567890",
                    "descripcion": "Aguja para estimulación nerviosa A025MM",
                    "solicitado": 2,
                    "recibido": 0,
                },
                {
                    "id": "1234567890",
                    "descripcion": "Aguja para estimulación nerviosa A025MM",
                    "solicitado": 2,
                    "recibido": 0,
                },
                {
                    "id": "1234567890",
                    "descripcion": "Aguja para estimulación nerviosa A025MM",
                    "solicitado": 2,
                    "recibido": 0,
                },
                {
                    "id": "1234567890",
                    "descripcion": "Aguja para estimulación nerviosa A025MM",
                    "solicitado": 2,
                    "recibido": 0,
                },
                {
                    "id": "1234567890",
                    "descripcion": "Aguja para estimulación nerviosa A025MM",
                    "solicitado": 2,
                    "recibido": 0,
                },
                {
                    "id": "1234567890",
                    "descripcion": "Aguja para estimulación nerviosa A025MM",
                    "solicitado": 2,
                    "recibido": 0,
                },
                {
                    "id": "1234567890",
                    "descripcion": "Aguja para estimulación nerviosa A025MM",
                    "solicitado": 2,
                    "recibido": 0,
                },
            ]
        }
    ]


    return (
        <SessionContext.Provider
            value={{
                user_data,
                order,
            }}
        >
            {children}
        </SessionContext.Provider>
    );
}
