import type { IJob } from "src/types/job.interface";

function Job({ jobData }: { jobData: IJob }) {
  return (
    <li className="relative grid grid-cols-5 gap-x-16 gap-y-8 mx-12 pb-12 before:absolute before:-left-9  before:block before:content-[''] before:h-full before:border-l before:border-(--color-gray-text)">
      <div className="relative pb-12 col-span-2">
        <span className="absolute rounded-full bg-(--color-tertiary) left-[-42px] top-2 size-3 content-['']"></span>
        <h3 className="text-(--color-tertiary) font-bold text-xl">
          {jobData.position}
        </h3>
        <h4 className="font-semibold text-lg">{jobData.workedAt}</h4>
        <time className="text-sm">{jobData.periodTime}</time>
      </div>
      <div className="col-start-3 col-span-3">
        <p>{jobData.description}</p>
      </div>
    </li>
  );
}

export default Job;
