import { H1Title } from "../../atoms/h1-title/h1-title";
import { Paragraph } from "../../atoms/paragraph/paragraph";
import { Button } from "../../atoms/button/button";
import styles from "./introduce.module.css";

export function Introduce() {
  return (
    <section className={styles.introduce}>
      <H1Title title="Any products from famous brands&nbsp; with worldwide delivery" />
      <Paragraph text="We sell smartphones, laptops, clothes, shoes&nbsp; and many other products at low prices" />
      <Button type="secondary" text="Go to shopping" />
      <div className={styles.background}>Goods4you</div>
    </section>
  );
}
