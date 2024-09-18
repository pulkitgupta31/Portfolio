import { Container, Section } from "components";
import { useAnimation } from "framer-motion";
import { useTranslation } from "next-i18next";
import React, { FC, useEffect } from "react";
import { FaReact } from "react-icons/fa";
import { SiNodedotjs } from "react-icons/si";
import { useInView } from "react-intersection-observer";

import {
  AngularIcon,
  BootstrapIcon,
  MongoIcon,
  NextIcon,
  PythonIcon,
  TailwindIcon,
  TsIcon,
  ExcelIcon
} from "./libs/Icons";
import { Skill } from "./libs/Skill";

const skills = [
  {
    name: "Python",
    href: "https://www.python.org/",
    icon: <PythonIcon />,
  },
  {
    name: "R Programming",
    href: "https://www.r-project.org/",
    icon: <PythonIcon />,
  },
  {
    name: "Excel",
    href: "https://www.microsoft.com/en-gb/microsoft-365/excel",
    icon: <ExcelIcon />,
  },
  {
    name: "Bloomberg Terminal",
    href: "https://www.bloomberg.com/professional/products/bloomberg-terminal/?utm_medium=Adwords_SEM&utm_source=pdsrch&utm_content=Terminal&utm_campaign=835926&utm_term=bloomberg+terminal&tactic=835926&gad_source=1&gclid=Cj0KCQjw9Km3BhDjARIsAGUb4nzopB6KH7_NH2w9LmNK5QogwA1lysXWZAULPryo1k1TGQZ5wtYGMNAaAmCzEALw_wcB&gclsrc=aw.ds",
    icon: <PythonIcon />,
  },
  {
    name: "Solidity",
    href: "https://soliditylang.org/",
    icon: <PythonIcon />,
  },
  {
    name: "MySQL",
    href: "https://www.mysql.com/",
    icon: <PythonIcon />,
  },
  {
    name: "PostgreSQL",
    href: "https://www.postgresql.org/",
    icon: <PythonIcon />,
  },
  {
    name: "React",
    href: "https://reactjs.org",
    icon: <FaReact color="#00D8FF" />,
  },
  {
    name: "Next.js",
    href: "https://nextjs.org/",
    icon: <NextIcon />,
  },
  {
    name: "Angular",
    href: "https://angularjs.org/",
    icon: <AngularIcon />,
  },
  {
    name: "Node.js",
    href: "https://nodejs.org",
    icon: <SiNodedotjs color="#539E43" />,
  },
  {
    name: "MongoDB",
    href: "https://www.mongodb.com/",
    icon: <MongoIcon />,
  },
  {
    name: "TypeScript",
    href: "https://typescriptlang.org",
    icon: <TsIcon />,
  },
  {
    name: "Bootstrap",
    href: "https://getbootstrap.com/",
    icon: <BootstrapIcon />,
  },
  {
    name: "Tailwind",
    href: "https://tailwindcss.com/",
    icon: <TailwindIcon />,
  },
];

export const Skills: FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const { t } = useTranslation("common");

  useEffect(() => {
    if (inView) {
      controls.start((i) => ({
        opacity: 1,
        transition: { delay: (i + 2) * 0.2 },
      }));
    }
  }, [controls, inView]);

  return (
    <Section
      className="mt-20 mb-16 md:mt-28"
      title={t("skills.title")}
      description={t("skills.description")}
    >
      <Container>
        <div
          className="mt-8 grid grid-cols-2 sm:grid-cols-5 gap-6"
          ref={ref}
        >
          {skills.map((skill, i) => (
            <Skill {...skill} key={i} custom={i} controls={controls} />
          ))}
        </div>
      </Container>
    </Section>
  );
};
