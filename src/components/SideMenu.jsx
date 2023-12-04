import React, { useContext, useEffect, useState } from "react";

import styles from "@/styles/components/SideMenu.module.scss"
import Link from "next/link";
import { useRouter } from "next/router";
import { SessionContext } from "@/context/SessionContext";



function SideMenu() {

    const router = useRouter();

    const [routes, setRoutes] = useState(null);

    const { routes_doctors, routes_almacen } = useContext(SessionContext);

    useEffect(() => {
        router.pathname.includes("doctors") ?
            setRoutes(routes_doctors)
            :
            setRoutes(routes_almacen)
    }, [router])

    return (
        <aside className={styles.side_menu}>
            <div className={styles.side_menu__stick}>

                {routes ?
                    routes.map((item, i) => (
                        <Link href={item.route} key={i}>
                            <p className={`${styles.side_menu__button} ${router.pathname === item.route ? styles.side_menu__button__active : null}`}>
                                <span className="material-symbols-outlined">
                                    {item.span}
                                </span>
                                {item.text}
                            </p>
                        </Link>
                    ))
                    :
                    null
                }

            </div>
        </aside>
    )
}

export { SideMenu }