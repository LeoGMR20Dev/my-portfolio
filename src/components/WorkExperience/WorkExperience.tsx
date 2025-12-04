import SuitcaseSvg from "@assets/svgs/suitcase-white.svg?react";
import Job from "@components/WorkExperience/Job";
import { JOBS } from "src/data/jobs";
import SectionWrapper from "../SectionWrapper";
import { Ids } from "src/constants/ids";

function WorkExperience() {
  return (
    <SectionWrapper id={Ids.WorkExperience}>
      <div className="flex flex-row gap-x-2 items-center w-full">
        <SuitcaseSvg className="size-5" />
        <h2 className="font-bold text-2xl">Experiencia Laboral</h2>
      </div>
      <ol>
        {[...JOBS].reverse().map(
          (
            job,
            i //TODO: filter the array to show the last by date
          ) => (
            <Job key={i} jobData={job} />
          )
        )}
      </ol>
    </SectionWrapper>
  );
}

export default WorkExperience;
