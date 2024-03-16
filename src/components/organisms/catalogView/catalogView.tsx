import catalog from "../../../mocks/mocks";
import { Button } from "../../atoms/button/button";
import { Snippet } from "../../atoms/snippet/snippet";
import { useState } from "react";
import styles from "./catalog.module.css";

export function Catalog() {
  const [quantity, setQuantity] = useState(9);
  const array = catalog.slice(0, quantity);
  console.log(array);
  return (
    <div>
      <div className={styles.catalog}>
        {array.map((el, index) => (
          <Snippet key={index} params={el} />
        ))}
      </div>
      <Button
        text="Show more"
        type="secondary"
        handleClick={() => setQuantity(quantity + 9)}
      />
    </div>
  );
}
