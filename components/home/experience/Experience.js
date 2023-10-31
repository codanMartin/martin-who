import {SectionHeader} from "@/components/utils/SectionHeader";
import {ExperienceItem} from "./ExperienceItem";

export const Experience = () => {
    return (
        <section className="section-wrapper" id="experience">
            <SectionHeader title="Experience" dir="l"/>
            {experience.map((item) => (
                <ExperienceItem key={item.title} {...item} />
            ))}
        </section>
    );
};

const experience = [
    {
        title: "dBest Qualitative Services",
        position: "Front End Developer",
        time: "2023 - Present",
        location: "Romania",
        description:
            "I contributed to the development of front-end logic and the design of diverse applications, " +
            "including intricate internal systems, e-commerce platforms, and engaging presentation websites.",
        tech: [
            "JavaScript",
            "React",
            "Tailwind",
            "Jest",
            "Git",
            "GitHub",
        ],
    },
];
