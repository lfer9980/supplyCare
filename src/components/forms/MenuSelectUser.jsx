import React from "react";
import { CardUserSelect } from "../cards/CardUserSelect";

import styles from "@/styles/components/forms/MenuSelectUser.module.scss";

//TODO: alimentar informacion de usuarios

let user_data = [
  {
    "nombre": "Jessica Garcia Gonzalez",
    "tipo": "medico",
    "foto": "/assets/images/profile.png",
    "link": "/doctors"
  },
  {
    "nombre": "Angel Fernandez Anchondo",
    "tipo": "almacen",
    "foto": "/assets/images/profile_2.png",
    "link": "/warehouse"
  },
]

function MenuSelectUser() {
  return (
    <div className={styles.menu_select__container}>
      <form className={styles.menu_select}>
        <h3>Selecciona un tipo de usuario.</h3>
          <>
            <p className={styles.menu_select__text}>
              Para comenzar, selecciona el tipo de usuario del menú.
            </p>
            <div>
              {
                user_data.map((item, i) => (
                  <CardUserSelect data={item} key={i}/>
                ))
              }
            </div>
          </>
      </form>
    </div>
  );
}

export { MenuSelectUser };
