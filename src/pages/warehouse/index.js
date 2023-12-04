import { Header } from "@/components/Header";
import { SideMenu } from "@/components/SideMenu";
import { SessionContext } from "@/context/SessionContext";
import React, { useContext } from "react";


export default function Home() {

    const {user_data: data } = useContext(SessionContext);

    return (
        <>
            <Header data={data[1]}/>
            <main className="main-home">
                <SideMenu />
                <section>
                    <p>hola</p>
                </section>
            </main>
        </>
    )
}