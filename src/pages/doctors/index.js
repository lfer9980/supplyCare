import { Header } from "@/components/Header";
import { SideMenu } from "@/components/SideMenu";
import React from "react";


export default function Home() {
    return (
        <>
            <Header />
            <main className="main-home">
                <SideMenu />
                <section>
                    <p>hola</p>
                </section>
            </main>
        </>
    )
}