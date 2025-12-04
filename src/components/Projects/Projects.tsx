import ProjectSvg from "@assets/svgs/projects-white.svg?react";
import SectionWrapper from "../SectionWrapper";
import Title from "src/Title";
import { Ids } from "src/constants/ids";

function Projects() {
  return (
    <SectionWrapper id={Ids.Projects}>
      <Title image={ProjectSvg} titleText="Proyectos" />
    </SectionWrapper>
  );
}

export default Projects;
