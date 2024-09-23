import React from "react";
import { getAllArticles, getArticle } from "../../../../lib/api";


import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import { draftMode } from "next/headers";
import Image from "next/image";
import { notFound } from "next/navigation";
import { formatDate } from "../../../../lib/utils";


export async function generateStaticParams() {
  const allArticles = await getAllArticles();

  return allArticles.map((article) => ({
    slug: article.slug,
  }));
}

export default async function KnowledgeArticlePage({ params }) {
  const { isEnabled } = draftMode();
  const article = await getArticle(params.slug, isEnabled);
  // console.log(article);
  // console.log(documentToReactComponents(article.details.json));

  if (!article) {
    notFound();
  }

 

  return (
    <React.Fragment>
    <div className="flex min-h-screen flex-col  items-center justify-between p-5 bg-white">
      <section className="w-full">
        <div className="container space-y-5 px-4 md:px-6">
          <div className="space-y-5">
            <h1 className="text-4xl mt-5 font-bold tracking-tighter sm:text-5xl">
              {article.title}
            </h1>
            <p className="max-w-[900px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-zinc-400">
              {article.summary}
            </p>
            
            <p className="max-w-none text-zinc-600 mt-2 mb-2 text-sm font-bold dark:text-zinc-400">
              Written by: {article.authorName}
            </p>
            <p className="max-w-none text-zinc-600 mt-2 mb-2 text-sm font-bold dark:text-zinc-400">
              Published Date: { formatDate(article.date) }
            </p>
           
          </div>
          <div className="w-[70%] justify-center items-center space-y-8 lg:space-y-10">
          <Image
                      alt="placeholder"
                      className=" object-cover w-full"
                      height="200"
                      src={article.articleimage.url}
                      width="350"
                    />
         {/*    <Image
              alt="Article Image"
              className="aspect-video w-full overflow-hidden rounded-xl object-cover"
              height="250"
              src={article.articleimage.url}
              width="650"
            /> */}
            <div className="space-y-4 md:space-y-6">
              <div className="space-y-2">
                <div className="max-w-[900px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-zinc-400">
                
                  {documentToReactComponents(article.details?.json, {preserveWhitespace: true})}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </React.Fragment>
  );
}
