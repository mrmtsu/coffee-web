import type { NextPage } from "next";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <>
      <header className="w-full h-20 fixed top-0 left-0 z-10">
        <div className="flex content-between flex-wrap">
          <div className="w-1/3 p-2">
            <div className="text-gray-700 text-center bg-gray-400 p-2">1</div>
          </div>
          <div className="w-1/3 p-2">
            <div className="text-gray-700 text-center bg-gray-400 p-2">2</div>
          </div>
          <div className="w-1/3 p-2">
            <div className="text-gray-700 text-center bg-gray-400 p-2">3</div>
          </div>
        </div>
      </header>

      <div className="min-h-screen">
        <Image src="/top.jpg" layout="fill" />
      </div>

      <div className="flex items-stretch h-32 md:h-60 lg:h-96 m-4">
        <div className="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2 relative">
          <Image src="/list1.jpg" layout="fill" />
        </div>
        <div className="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
          2
        </div>
        <div className="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
          3
        </div>
      </div>

      <footer className="h-80 bg-orange-400"></footer>
    </>
  );
};

export default Home;
