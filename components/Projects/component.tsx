import { Section } from "components";
import { useTranslation } from "next-i18next";
import React, { FC, useMemo } from "react";

import { ProjectCard } from "./libs/ProjectCard";

export const Projects: FC = () => {
  const { t } = useTranslation("common");

  const projects = useMemo(
    () => [
      {
        title: "InternNexus",
        subtitle: t("projects.internnexus.subtitle"),
        description: t("projects.internnexus.description"),
        technologies: ["AngularJs", "TypeScript", "NodeJs", "Bootstrap"],
        externalLink: "https://www.internnexus.com",
        imageLink: `/images/internnexus.png`,
      },
      {
        title: "Wild Organic",
        subtitle: t("projects.wildorganic.subtitle"),
        description: t("projects.wildorganic.description"),
        technologies: ["AngularJs", "NodeJs", "BootsTrap"],
        externalLink: "https://wildorganic.in/",
        imageLink: `/images/wildorganic.png`,
      },
      {
        title: "Coupay",
        subtitle: t("projects.coupay.subtitle"),
        description: t("projects.coupay.description"),
        technologies: ["Next.js", "Nodejs", "Tailwindcss"],
        externalLink: "https://coupay.co.uk/",
        imageLink: `/images/coupay.png`,
      },
      {
        title: "Hackinbits",
        subtitle: t("projects.coupay.subtitle"),
        description: t("projects.coupay.description"),
        technologies: ["Next.js", "Nodejs", "Tailwindcss"],
        externalLink: "https://hackinbits.com/",
        imageLink: `/images/hackinbits.png`,
      },
      {
        title: "Portfolio",
        subtitle: t("projects.portfolio.subtitle"),
        description: t("projects.portfolio.description"),
        technologies: ["Next.js", "Tailwindcss"],
        githubLink: "https://github.com/conquerorpulkit/Portfolio",
        externalLink: "https://pulkitgupta.online/",
        imageLink: `/images/portfolio.png`,
      },
    ],
    [t]
  );
  return (
    <Section
      className="md:mt-20 mt-14"
      title={t("projects.title")}
      description={t("projects.description")}
    >
      <div className="px-4 mx-auto mt-10 md:mt-20 md:px-8 max-w-screen-lg">
        {projects.map((project, i) => (
          <ProjectCard
            githubLink={""}
            key={i}
            rightShift={i % 2 === 0}
            {...project}
          />
        ))}
      </div>
    </Section>
  );
};
