import { ITechItem } from "src/types/techItems.interface";
import TechItem from "./TechItem";

function TechArticle({
  title,
  techItems,
}: {
  title: string;
  techItems: ITechItem[];
}) {
  return (
    <article className="w-full rounded-3xl bg-(--color-primary) border border-(--color-white) p-5">
      <h3 className="font-bold text-(--color-tertiary) text-2xl text-center mb-4">
        {title}
      </h3>
      <ul className="grid grid-cols-[repeat(auto-fit,minmax(50px,110px))] place-content-center gap-4">
        {techItems.map((item: ITechItem, i) => {
          const Image = item.image;
          return <TechItem name={item.name} image={Image} key={i} />;
        })}
      </ul>
    </article>
  );
}

export default TechArticle;
