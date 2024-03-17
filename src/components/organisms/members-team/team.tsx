import { members } from "../../../mocks/mocks";
import { Member } from "../../atoms/member/member";
import styles from "./team.module.css";

export function Team() {
  return (
    <div className={styles.team}>
      <div className={styles.column}>
        <Member params={members[0]} />
        <Member params={members[1]} />
      </div>
      <div className={`${styles.secondColumn} ${styles.column}`}>
        <Member params={members[2]} />
        <Member params={members[3]} />
      </div>
      <div className={styles.column}>
        <Member params={members[4]} />
        <Member params={members[5]} />
      </div>
    </div>
  );
}
