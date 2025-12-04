import AboutMeSvg from "@assets/svgs/about-me-icon.svg?react";
import SectionWrapper from "./SectionWrapper";
import Title from "src/Title";
import { Ids } from "src/constants/ids";

function AboutMe() {
  return (
    <SectionWrapper id={Ids.AboutMe}>
      <Title image={AboutMeSvg} titleText="Sobre mí" />
    </SectionWrapper>
  );
}

export default AboutMe;
