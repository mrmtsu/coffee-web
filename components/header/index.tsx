import type { NextPage } from "next";

export const Header: NextPage = () => {
  return (
    <>
      <header className="w-full h-20 fixed top-0 left-0 z-10">
        <div className="flex content-between flex-wrap">
          <div className="w-1/3 p-2">
            <div className="text-white text-center  p-2">HOME</div>
          </div>
          <div className="w-1/3 p-2">
            <div className="text-white text-center  p-2">LOGO</div>
          </div>
          <div className="w-1/3 p-2">
            <div className="text-white text-center  p-2">MENU</div>
          </div>
        </div>
      </header>
    </>
  );
};
