import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

export const ArticleList: NextPage = () => {
  const articles = [
    {
      id: "1",
      title: "coffee county",
      imageUrl: "/list1.jpg",
    },
    {
      id: "2",
      title: "coffee county",
      imageUrl: "/list1.jpg",
    },
    {
      id: "3",
      title: "coffee county",
      imageUrl: "/list1.jpg",
    },
    {
      id: "4",
      title: "coffee county",
      imageUrl: "/list1.jpg",
    },
  ];

  return (
    <>
      <ul className="grid grid-cols-3 gap-7 px-14 my-10">
        {articles.map((article) => {
          return (
            <li key={article.id} className=" h-full">
              <Link href="`/articles/${article.id}`">
                <a className="block bg-pink-200 p-2 shadow rounded hover:opacity-75 ">
                  <Image src={article.imageUrl} width={400} height={400} />
                  <p>{article.title}</p>
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};
