import React, { useContext } from "react";
import { CardUserSelect } from "../cards/CardUserSelect";

import styles from "@/styles/components/forms/MenuSelectUser.module.scss";
import { SessionContext } from "@/context/SessionContext";


function MenuSelectUser() {

  const { user_data: data } = useContext(SessionContext);


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
              data.map((item, i) => (
                <CardUserSelect data={item} key={i} />
              ))
            }
          </div>
        </>
      </form>
    </div>
  );
}

export { MenuSelectUser };
