import { Header } from "../../components/organisms/header/header";
import { Introduce } from "../../components/molecules/introduce/introduce";
import { SideBarSelection } from "../../components/organisms/side-bar-selection/side-bar-selection";
import { Catalog } from "../../components/organisms/catalogView/catalogView";
import { InfoBlock } from "../../components/organisms/info-block/info-block";
import { Team } from "../../components/organisms/members-team/team";
import { Footer } from "../../components/organisms/footer/footer";
import styles from "./main.module.css";

export function MainPage() {
  return (
    <>
      <Header />
      <Introduce />

      <section className={styles.sectionCatalog}>
        <h2>Catalog</h2>
        <SideBarSelection />
        <Catalog />
      </section>

      <section className={styles.sectionAbout}>
        <div className={styles.skateImage}>
          <img
            src="/src/assets/images/MaskGroup.png"
            alt="Человек сидит на скейтборде"
          />
        </div>
        <div className={styles.figureImage}>
          <img src="/src/assets/images/figure.svg" alt="Абстракция" />
        </div>
        <InfoBlock />
      </section>

      <section className={styles.sectionFeedback}></section>

      <section className={styles.sectionMemberTeam}>
        <h3>Our team</h3>
        <div className={styles.figureMember}>
          <img src="/src/assets/images/figura-member.svg" alt="Абстракция" />
        </div>
        <Team />
      </section>
      <Footer />
    </>
  );
}
