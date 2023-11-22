import { Container, MediaIcon } from "components";
import { motion } from "framer-motion";
import { useTranslation } from "next-i18next";
import React, { FC } from "react";
import { FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";

import { HandWave } from "./libs/HandWave";
import { HeroLink } from "./libs/HeroLink";

export const Hero: FC = () => {
  const { t } = useTranslation("common");

  return (
    <Container className="pt-24 md:pt-32">
      <motion.img
        src="/images/me.png"
        alt="me"
        className="border border-gray-700 rounded-full w-28 h-28 md:w-32 md:h-32 mt-36"
        variants={{
          hidden: {
            scale: 0,
            opacity: 0,
          },
          visible: {
            scale: 1,
            opacity: 1,
          },
        }}
        transition={{
          damping: 5,
          mass: 1,
          delay: 0.2,
        }}
        initial="hidden"
        animate="visible"
      />
      <div className="flex items-center">
        <h1 className="mt-6 mb-6 text-4xl font-bold md:mt-8 md:mb-8 md:text-5xl text-black-900 dark:text-white-900">
          {t("hero.title")}
        </h1>
        <HandWave className="text-4xl md:text-5xl" />
      </div>
      <br />
      <p className="text-xl font-bold tracking-normal md:text-3xl text-black-700 dark:text-white-700">
        {t("hero.p0")}
        <br />
        <br />
        {t("hero.p1")} <HeroLink title="University Of Westminster" href="https://www.westminster.ac.uk" />
      </p>
      <div className="flex mt-8">
        <MediaIcon
          icon={<FaGithub className="w-6 h-6 md:w-7 md:h-7" />}
          href="https://github.com/conquerorpulkit"
          className="mr-4"
        />
        <MediaIcon
          icon={<FaTelegram className="w-6 h-6 md:w-7 md:h-7" />}
          href="https://t.me/bushy_brow"
          className="mr-4"
        />
        <MediaIcon
          icon={<FaLinkedin className="w-6 h-6 md:w-7 md:h-7" />}
          href="https://www.linkedin.com/in/pulkitgupta31/"
          className="mr-4"
        />
      </div>
      <div className="mt-10">
        <br />
        <p className="mb-8 text-base md:text-xl dark:text-white-700 text-black-700">
          {t("hero.des0")}
        </p>
        <p className="mb-8 text-base md:text-xl dark:text-white-700 text-black-700">
          {t("hero.des1")}
          <br />
          <br />
          {t("hero.des2")}
        </p>
        <p className="mb-8 text-base md:text-xl dark:text-white-700 text-black-700">
          {t("hero.des3")}
        </p>
      </div>
    </Container>
  );
};
