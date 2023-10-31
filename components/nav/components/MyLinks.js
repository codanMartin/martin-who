import React from "react"
import { motion } from "framer-motion";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

import styles from "./headinglinks.module.scss";
import Link from "next/link";

const links = [
    { url: "https://www.linkedin.com/in/codanmartin25/", icon: AiFillLinkedin },
    { url: "https://github.com/codanMartin", icon: AiFillGithub }
];

export const MyLinks = () => {
    return (
        <div className={styles.links}>
            {links.map((link, index) => (
                <motion.span
                    key={index}
                    initial={{ y: -30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.0 }}
                >
                    <Link href={link.url} target="_blank" rel="nofollow">
                        {React.createElement(link.icon, { size: "2.4rem" })}
                    </Link>
                </motion.span>
            ))}
        </div>
    );
};

