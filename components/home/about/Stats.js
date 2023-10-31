import styles from "./stats.module.scss";
import { AiFillCode, AiFillSmile } from "react-icons/ai";
import { Reveal } from "@/components/utils/Reveal";

export const Stats = () => {
  return (
    <div className={styles.stats}>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <AiFillCode size="2.4rem" color="var(--brand)" />
            <span>Use at work</span>
          </h4>
          <div className={styles.statGrid}>
            <span className="chip">JavaScript</span>
            <span className="chip">HTML</span>
            <span className="chip">Tailwind</span>
            <span className="chip">CSS</span>
            <span className="chip">React</span>
            <span className="chip">Framer Motion</span>
            <span className="chip">NodeJS</span>
            <span className="chip">MongoDB</span>
            <span className="chip">Axios</span>
            <span className="chip">Git</span>
          </div>
        </div>
      </Reveal>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <AiFillSmile size="2.4rem" color="var(--brand)" />
            <span>Use for fun</span>
          </h4>
          <div className={styles.statGrid}>
            <span className="chip">TypeScript</span>
            <span className="chip">Redux</span>
            <span className="chip">Express</span>
            <span className="chip">Progressive Web Apps</span>
            <span className="chip">FireBase</span>
            <span className="chip">Jest</span>
          </div>
        </div>
      </Reveal>
    </div>
  );
};
