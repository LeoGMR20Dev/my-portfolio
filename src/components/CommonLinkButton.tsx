import type React from "react";
import { ComponentType, HTMLProps } from "react";

interface ICommonLinkButton {
  text?: string;
  icon: ComponentType<HTMLProps<HTMLElement>> | undefined;
  redirectTo: string;
  target: React.HTMLAttributeAnchorTarget;
}

function CommonLinkButton({
  text,
  icon: Icon,
  redirectTo,
  target,
}: ICommonLinkButton) {
  if (!text && !Icon) {
    throw new Error("CommonLinkButton must have a text or an imageUrl");
  }

  return (
    <a
      href={redirectTo}
      className="z-10 relative h-10 inline-flex flex-row justify-start items-center rounded-full py-2 px-4 gap-4 button--hover border border-(--color-white) transition-all duration-150 hover:scale-110 hover:bg-(--color-tertiary)"
      target={target}
    >
      {Icon && <Icon className="size-5" />}
      {text}
    </a>
  );
}

export default CommonLinkButton;
