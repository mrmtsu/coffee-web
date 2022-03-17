import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

const Home: NextPage = () => {
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

      <div className="min-h-screen relative">
        <Image src="/top.jpg" layout="fill" />
        <p className="absolute text-white font-blod text-4xl top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 m-0 p-0 animate-fade">
          3 Cedars Coffee Roastery
        </p>
      </div>

      <div className="flex items-stretch h-32 md:h-60 lg:h-96 m-4">
        <div className="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
          1
        </div>
        <div className="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
          2
        </div>
        <div className="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
          3
        </div>
      </div>

      <ul className="grid grid-cols-3 gap-7 px-14">
        <li className="h-96 relative">
          <Link href="/">
            <a className="block bg-pink-200 p-2 shadow rounded hover:opacity-75 ">
              <Image src="/list1.jpg" layout="fill" />
            </a>
          </Link>
        </li>
        <li className="h-96 relative">
          <Link href="/">
            <a className="block bg-pink-200 p-2 shadow rounded hover:opacity-75 ">
              <Image src="/list1.jpg" layout="fill" />
            </a>
          </Link>
        </li>
        <li className="h-96 relative">
          <Link href="/">
            <a className="block bg-pink-200 p-2 shadow rounded hover:opacity-75 ">
              <Image src="/list1.jpg" layout="fill" />
            </a>
          </Link>
        </li>
        <li className="h-96 relative">
          <Link href="/">
            <a className="block bg-pink-200 p-2 shadow rounded hover:opacity-75 ">
              <Image src="/list1.jpg" layout="fill" />
            </a>
          </Link>
        </li>
        <li className="h-96 relative">
          <Link href="/">
            <a className="block bg-pink-200 p-2 shadow rounded hover:opacity-75 ">
              <Image src="/list1.jpg" layout="fill" />
            </a>
          </Link>
        </li>
        <li className="h-96 relative">
          <Link href="/">
            <a className="block bg-pink-200 p-2 shadow rounded hover:opacity-75 ">
              <Image src="/list1.jpg" layout="fill" />
            </a>
          </Link>
        </li>
      </ul>

      <footer className="h-80 mt-10 bg-orange-400"></footer>
    </>
  );
};

export default Home;
