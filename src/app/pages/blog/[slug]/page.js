import React from "react";

import { getAllArticles, getArticle } from "../../../../../lib/api";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { draftMode } from "next/headers";
import Image from "next/image";
import { notFound } from "next/navigation";
import { formatDate } from "../../../../../lib/utils";

export async function generateStaticParams() {
  const allArticles = await getAllArticles();

  return allArticles.map((article) => ({
    
    slug: article.slug,
  }));
}

export default async function KnowledgeArticlePage({ params }) {
  const { isEnabled } = draftMode();
  const article = await getArticle(params.slug, isEnabled);

  if (!article) {
    notFound();
  }

  return (
    <React.Fragment>
      <div className="relative bg-[url('/assets/images/WebsiteBG.png')] bg-auto">
        <div className="flex flex-col items-center justify-center  pt-[50px] pb-[10px] mt-4">
          <div className=" w-[80%] bg-white items-center justify-center text-center">
            <div className="space-y-5 items-center justify-center">
              <h1
                className="text-4xl mt-5 text-[#395A68] font-bold tracking-tighter sm:text-5xl"
                style={{ fontFamily: "Optima" }}
              >
                {article.title}
              </h1>
              <p
                className="m-10 text-center text-[#395A68] md:text-xl lg:text-base xl:text-xl"
                style={{ fontFamily: "Optima" }}
              >
                {article.summary}
              </p>

              <p
                className="max-w-none text-[#395A68] mt-2 mb-2 text-sm font-bold"
                style={{ fontFamily: "Optima" }}
              >
                Written by: {article.authorName}
              </p>
              <p
                className="max-w-none text-[#395A68] mt-2 mb-10 pb-10 text-sm font-bold"
                style={{ fontFamily: "Optima" }}
              >
                Published Date: {formatDate(article.date)}
              </p>

              <div className="flex justify-center items-center">
              <Image
                  alt="placeholder"
                  className="aspect-[4/3]   text-center justify-center items-center "
                  height="450"
                  src={article.articleimage.url}
                  width="600"
                />
              </div>

           
                <div className="space-y-4 md:space-y-6">
                  <div
                    className="mt-10 ml-5 md:ml-20 mb-10 text-start items-center justify-center text-[#395A68] md:text-xl lg:text-base xl:text-xl"
                    style={{ fontFamily: "Optima" }}
                  >
                    {documentToReactComponents(article.details?.json, {
                      preserveWhitespace: true,
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      {/* </div> */}
    </React.Fragment>
  );
}
