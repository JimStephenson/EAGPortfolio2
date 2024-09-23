import React from "react";
import { getAllArticles } from "../../../../lib/api";
import Image from "next/image";
import Link from "next/link";
import { formatDate } from "../../../../lib/utils";

export default async function Page() {
    const articles = await getAllArticles();
  return (
    <React.Fragment>
          <div   className=" pt-[20px] md:pt-[20px]   h-fit   relative ">
          <div  className="relative bg-[url('/assets/images/WebsiteBG.png')] bg-auto" >
     
        <div className="flex flex-col items-center justify-between p-24 ">
      <section className=" pt-12">
        <div className="mx-auto container space-y-12 p-10 md:px-6 bg-white">
          <div className="flex flex-col items-center justify-center space-y-4 text-center ">
            <div className="w-[80%] space-y-2 ">
              <h1 className="text-3xl text-[#395A68] font-bold tracking-tighter sm:text-5xl" style={{ fontFamily: "Optima" }}>
                Welcome to our Knowledge Base
              </h1>
              <p className="max-w-[900px] text-[#395A68]  md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed" style={{ fontFamily: "Optima" }}>
                Discover our latest articles and stay up to date with the newest
                technologies, features, and trends.
              </p>
            </div>
          </div>
          <div className=" space-y-12">
            <div className=" grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {articles.map((article) => (
                  <article key={article.sys.id} className="h-full flex flex-col rounded-lg shadow-lg overflow-hidden"    style={{
                    boxShadow: "#395A68 -10px 25px 50px 10px",
                    fontFamily: "Optima",
                  }}>
                    <Image
                      alt="placeholder"
                      className="aspect-[4/3] object-cover w-full"
                      height="263"
                      src={article.articleimage.url}
                      width="350"
                    />
                    <div className="flex-1 p-6">
                      <Link href={`/pages/blog/${article.slug}`}>
                        <h3 className="text-2xl text-[#395A68] font-bold leading-tight  py-4" style={{ fontFamily: "Optima" }}>
                          {article.title}
                        </h3>
                      </Link>
                      <div className="inline-block text-[#395A68] rounded-full px-3 py-1 text-sm font-semibold" style={{ fontFamily: "Optima" }}>
                        {article.categoryName}
                      </div>
                      <p className="max-w-none text-[#395A68] mt-4 mb-2 text-sm " style={{ fontFamily: "Optima" }}>
                        {article.summary}
                      </p>
                      <p className="max-w-none text-[#395A68] mt-2 mb-2 text-sm font-bold " style={{ fontFamily: "Optima" }}>
                        Written by: {article.authorName}
                      </p>
                      <p className="max-w-none text-[#395A68] mt-2 mb-2 text-sm font-bold " style={{ fontFamily: "Optima" }}>
                        Published Date: {formatDate( article.date )}
                      </p>
                      <div className="flex justify-end">
                        <Link
                          className="inline-flex text-[#395A68] h-10 items-center justify-center text-sm font-medium" style={{ fontFamily: "Optima" }}
                          href={`/pages/blog/${article.slug}`}
                        >
                          Read More →
                        </Link>
                      </div>
                    </div>
                  </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
      </div>
      </div>
    </React.Fragment>
  );
}