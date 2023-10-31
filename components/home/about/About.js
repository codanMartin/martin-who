import {MyLinks} from "@/components/nav/components/MyLinks";
import {Reveal} from "@/components/utils/Reveal";
import {SectionHeader} from "@/components/utils/SectionHeader";
import styles from "./about.module.scss";
import {Stats} from "./Stats";
import {AiOutlineArrowRight} from "react-icons/ai";

export const About = () => {

    return (
        <section id="about" className="section-wrapper">
            <SectionHeader title="About" dir="l"/>
            <div className={styles.about}>
                <div>
                    <Reveal>
                        <p className={`${styles.aboutText} ${styles.highlightFirstLetter}`}>
                            Greetings, I'm Martin, a 22 y/o self-taught coder based in Romania, currently diving into the
                            intricacies of front-end development at an exciting startup. I love working with React,
                            styling with Tailwind and animating with Framer Motion though I am open to working with what technologies
                            a project needs.


                        </p>
                    </Reveal>
                    <Reveal>
                        <p className={styles.aboutText}>
                            When I'm not engrossed in the world of coding, you can find me exploring the picturesque
                            Romanian outdoors during weekend hikes. It's where I often find the inspiration to fuel my
                            drive.</p>
                    </Reveal>
                    <Reveal>
                        <p className={styles.aboutText}>
                            I strongly believe in the power of continuous growth and adaptation. Embracing new
                            technologies is a key part of my approach, enabling me to constantly expand my skill set and
                            stay relevant in the fast-paced tech landscape. </p>
                    </Reveal>
                    <Reveal>
                        <p className={styles.aboutText}>
                            If you have an opportunity that aligns with my passion for creating exceptional user
                            experiences, I'm more than eager to collaborate and bring innovative ideas to life. Feel
                            free to
                            reach out, and let's embark on an exciting journey together.</p>
                    </Reveal>
                    <Reveal>
                        <div className={styles.links}>
                            <div className={styles.linksText}>
                                <span>My links</span>
                                <AiOutlineArrowRight/>
                            </div>
                            <MyLinks/>
                        </div>
                    </Reveal>
                </div>
                <Stats/>
            </div>
        </section>
    );
};
