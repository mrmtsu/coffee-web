import type { NextPage } from "next";
import Image from "next/image";
import { Header } from "components/header";
import { Footer } from "components/footer";
import { ArticleList } from "components/article";

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

      <ArticleList />

      <Footer />
    </>
  );
};

export default Home;
