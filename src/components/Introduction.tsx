import ProfileImagePath from "@assets/profile.webp";
import CommonLinkButton from "./CommonLinkButton";
import { Ids } from "src/constants/ids";
import LinkedlnSvg from "@assets/svgs/linkedln-white.svg?react"; //Do not erase the '?react' part
import GithubSvg from "@assets/svgs/github-white.svg?react";
import GmailSvg from "@assets/svgs/gmail-white.svg?react";

function Introduction() {
  return (
    <section
      className="flex flex-col justify-center items-center gap-y-8 px-16 pt-36 w-full"
      id={Ids.Introduction}
    >
      <div className="flex flex-row flex-wrap justify-center items-center gap-4">
        <div className="flex flex-col gap-y-2 flex-1">
          <h1 className="font-bold text-4xl">
            Hola, soy&nbsp;
            <span className="text-(--color-tertiary)">Leandro Morales</span>
          </h1>
          <p className="font-semibold text-xl">
            Desarrollador Web Junior de La Paz, Bolivia. Enfocado en el
            desarrollo de aplicaciones web con tecnologías de Javascript.
          </p>
        </div>
        <img
          src={ProfileImagePath}
          alt="Imagen de perfil"
          className="rounded-full size-72"
        />
      </div>
      <div className="w-full flex flex-row flex-wrap justify-start items-center gap-x-4 gap-y-2">
        <CommonLinkButton
          text="Linkedln"
          icon={LinkedlnSvg}
          redirectTo="https://www.linkedin.com/in/leandro-guillermo-morales-rada-878417315"
          target="_blank"
        />
        <CommonLinkButton
          text="GitHub"
          icon={GithubSvg}
          redirectTo="https://github.com/LeoGMR20Dev"
          target="_blank"
        />
        <CommonLinkButton
          text="leoguimorales@gmail.com"
          icon={GmailSvg}
          redirectTo="mailto:leoguimorales@gmail.com"
          target="_blank"
        />
      </div>
    </section>
  );
}

export default Introduction;
