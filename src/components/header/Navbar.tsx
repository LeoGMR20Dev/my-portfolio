import { Ids } from "src/constants/ids";
import NavbarItem from "./NavbarItem";

function navbar() {
  return (
    <nav className="col-start-2 col-end-8 flex flex-row gap-x-4">
      <NavbarItem text="Inicio" redirectTo={`#${Ids.Introduction}`} />
      <NavbarItem text="Experiencia" redirectTo={`#${Ids.WorkExperience}`} />
      <NavbarItem
        text="Herramientas"
        redirectTo={`#${Ids.ToolsTechonologies}`}
      />
      <NavbarItem text="Sobre mí" redirectTo={`#${Ids.AboutMe}`} />
      <NavbarItem text="Contacto" redirectTo={`#`} />
    </nav>
  );
}

export default navbar;
