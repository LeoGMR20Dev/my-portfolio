import ToolsSvg from "@assets/svgs/tools-white.svg?react";
import Title from "src/components/Title";
import SectionWrapper from "../SectionWrapper";
import { Ids } from "src/constants/ids";
import TechArticle from "./TechArticle";
import {
  BACKEND_ITEMS,
  FRONTEND_ITEMS,
  LEARNING_ITEMS,
  OTHER_TOOLS_ITEMS,
} from "@constants/toolsTechnologies";

function ToolsTechnologies() {
  return (
    <SectionWrapper id={Ids.ToolsTechonologies}>
      <Title image={ToolsSvg} titleText="Herramientas y tecnologías" />
      <div className="w-full grid lg:grid-cols-2 lg:place-content-center gap-8">
        <TechArticle title="Frontend" techItems={FRONTEND_ITEMS} />
        <TechArticle title="Backend" techItems={BACKEND_ITEMS} />
        <TechArticle title="Herramientas" techItems={OTHER_TOOLS_ITEMS} />
        <TechArticle title="Aprendiendo" techItems={LEARNING_ITEMS} />
      </div>
    </SectionWrapper>
  );
}

export default ToolsTechnologies;
