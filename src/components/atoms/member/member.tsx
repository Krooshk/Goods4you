import { MemberType } from "../../../types/types";
import styles from "./member.module.css";

export function Member({ params }: { params: MemberType }) {
  return (
    <div className={styles.member}>
      <img src={params.img} alt="Член команды" />
    </div>
  );
}
