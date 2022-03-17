import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "components/header";
import { Footer } from "components/footer";

const Home: NextPage = () => {
  return (
    <>
      <Header />

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

      <Footer />
    </>
  );
};

export default Home;
