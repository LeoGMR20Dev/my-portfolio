import { ReactNode } from "react";

function SectionWrapper({ id, children }: { id: string; children: ReactNode }) {
  return (
    <section
      className="flex flex-col justify-center items-center gap-y-8 px-16 w-full mt-32 scroll-m-20"
      id={id}
    >
      {children}
    </section>
  );
}

export default SectionWrapper;
