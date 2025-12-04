import ToolsSvg from "@assets/svgs/tools-white.svg?react";
import Title from "src/Title";
import SectionWrapper from "../SectionWrapper";
import { Ids } from "src/constants/ids";
import TechArticle from "./TechArticle";

function ToolsTechnologies() {
  return (
    <SectionWrapper id={Ids.ToolsTechonologies}>
      <Title image={ToolsSvg} titleText="Herramientas y tecnologías" />
      <div className="w-full grid lg:grid-cols-2 lg:place-content-center gap-8">
        <TechArticle title="Frontend" />
        <TechArticle title="Backend" />
        <TechArticle title="Herramientas" />
        <TechArticle title="Aprendiendo" />
      </div>
    </SectionWrapper>
  );
}

export default ToolsTechnologies;
