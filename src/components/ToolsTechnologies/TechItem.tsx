import { ITechItem } from "src/types/techItems.interface";

function TechItem({ name, image: Image }: ITechItem) {
  return (
    <li className="flex flex-col justify-center items-center">
      <Image className="size-12"/>
      <p className="text-center text-md">{name}</p>
    </li>
  );
}

export default TechItem;
