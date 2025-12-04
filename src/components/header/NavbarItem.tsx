function NavbarItem({
  text,
  redirectTo,
}: {
  text: string;
  redirectTo: string;
}) {
  return (
    <a
      className="relative block p-2 text-md font-bold rounded-md transition duration-150 hover:bg-(--color-gray-hover)"
      href={redirectTo}
    >
      {text}
    </a>
  );
}

export default NavbarItem;
