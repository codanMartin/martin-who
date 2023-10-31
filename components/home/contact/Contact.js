import {Reveal} from "@/components/utils/Reveal";
import styles from "./contact.module.scss";
import {AiFillMail} from "react-icons/ai";
import Link from "next/link";

export const Contact = () => {
    return (
        <section className="section-wrapper" id="contact">
            <div className={styles.contactWrapper}>
                <Reveal width="100%">
                    <h4 className={styles.contactTitle}>
                        Contact<span>.</span>
                    </h4>
                </Reveal>
                <Reveal width="100%">
                    <p className={styles.contactCopy}>
                        Ready to make things happen? Hit me up via email or find me on{" "} <Link
                        href="https://www.linkedin.com/in/codanmartin25/"
                        target="_blank"
                        rel="nofollow"
                    >
                        Linkedin
                    </Link>. Let's team up and unleash some digital magic!
                    </p>
                </Reveal>
                <Reveal width="100%">
                    <Link href="mailto:danmartin_25@icloud.com">
                        <div className={styles.contactEmail}>
                            <AiFillMail size="2.4rem"/>
                            <span>danmartin_25@icloud.com</span>
                        </div>
                    </Link>
                </Reveal>
            </div>
        </section>
    );
};
