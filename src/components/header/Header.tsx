import Navbar from "./Navbar";

function header() {
  return (
    <header className="grid grid-cols-8 place-items-center gap-4 bg-(--color-primary) fixed z-100 w-full py-2 px-12">
      <div className="flex flex-col gap-0 col-span-1">
        <p className="font-bold text-lg">LeoGMR20Dev</p>
        <p className="text-sm text-(--color-gray-text)">Desarrollador web</p>
      </div>
      <Navbar />
      <div className="col-start-8 col-end-8">
        <div className="text-lg font-bold">
          <p>ES</p>
        </div>
      </div>
    </header>
  );
}

export default header;
