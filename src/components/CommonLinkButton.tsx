import type React from "react";

interface ICommonLinkButton {
  text?: string;
  icon?: React.ReactNode;
  redirectTo: string;
  target: React.HTMLAttributeAnchorTarget;
}

function CommonLinkButton({
  text,
  icon,
  redirectTo,
  target,
}: ICommonLinkButton) {
  if (!text && !icon) {
    throw new Error("CommonLinkButton must have a text or an imageUrl");
  }

  return (
    <a
      href={redirectTo}
      className="z-10 relative h-10 inline-flex flex-row justify-start items-center rounded-full py-2 px-4 gap-4 button--hover border border-(--color-white) transition-all duration-150 hover:scale-110 hover:bg-(--color-tertiary)"
      target={target}
    >
      {icon}
      {text}
    </a>
  );
}

export default CommonLinkButton;
