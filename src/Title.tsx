import type { ComponentType } from "react";

function Title({
  titleText,
  image: Image,
}: {
  titleText: string;
  image: ComponentType<any>;
}) {
  return (
    <div className="flex flex-row gap-x-2 items-center w-full">
      <Image className="size-5" />
      <h2 className="font-bold text-2xl">{titleText}</h2>
    </div>
  );
}

export default Title;
