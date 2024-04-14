'use client'

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { db, collection, getDocs } from '../db/firebase';
import { TextGenerateEffect } from "../components/ui/text-generate-effect";
import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";



const Page = () => {
  const [chats, setChats] = useState<any[]>([]);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const colRef = collection(db, 'data');
    getDocs(colRef)
      .then((snapshot) => {
        const fetchedChats = snapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id
        }));  
        setChats(fetchedChats);
        console.log('Fetched chats:', fetchedChats);
      })
      .catch(error => {
        console.error('Error fetching chats:', error);
      });
  }, []);

  return (
    <>
      <Head>
        <title>Insight</title>
      </Head>
      <main className="mx-auto max-w-[1960px] px-4 pt-4 ">
        <div className="columns-1 gap-4 sm:columns-2 xl:columns-3 2xl:columns-4">
          <div className="shadow-sm shadow-neutral-300 bg-gradient-to-r from-neutral-900 from-10% neutral-600 via-30% to-neutral-800 to-90% after:content relative mb-5 flex h-[565px] flex-col items-center justify-end gap-4 overflow-hidden rounded-lg bg-white/10 px-6 pb-16 pt-64 text-center text-white shadow-highlight after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight lg:pt-0">
            <>
            <div className="absolute inset-0 flex items-center justify-center opacity-20">
              
              <span className="flex max-h-full max-w-full items-center justify-center mb-32">
                <Image 
                  src="./SmarterGlass.svg"
                  alt="Smart Glasses"
                  width={400}
                  height={400}
                />
              </span>
              <span className="absolute left-0 right-0 bottom-0 h-[400px] bg-gradient-to-b from-black/0 via-black to-black"></span>
            </div>
            <h1 className="text-6xl font-light font-">
              Insight
            </h1>
            <h1 className="mt-4 text-base font-semibold uppercase tracking-widest">
              Capture your moments
            </h1>
            <p className="max-w-[40ch] text-white/75 font-light text-sm sm:max-w-[32ch] leading-6">
              Your personal assistant for capturing and organizing your memories.
            </p>
            <a
              className="pointer z-10 mt-6 rounded-lg border border-white bg-white px-3 py-2 text-sm font-semibold text-black transition hover:bg-white/10 hover:text-white md:mt-4"
              href="https://vercel.com/new/clone?repository-url=https://github.com/vercel/next.js/tree/canary/examples/with-cloudinary&project-name=nextjs-image-gallery&repository-name=with-cloudinary&env=NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,CLOUDINARY_API_KEY,CLOUDINARY_API_SECRET,CLOUDINARY_FOLDER&envDescription=API%20Keys%20from%20Cloudinary%20needed%20to%20run%20this%20application"
              target="_blank"
              rel="noreferrer"  
            >
              View our Demo
            </a>
            </>
          </div>
          {chats.map(({ created_at, image_url, input_prompt, output_response }, index) => (
          <CardContainer key={created_at}>
            <div 
              className="hover:transition-all transition delay-150 p-3 rounded-lg group relative mb-5 block w-full "
              style={{
                position: 'relative',
                overflow: 'hidden',
              }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${image_url})`,
                  filter: 'blur(8px)',
                }}
              ></div>
              <div className="absolute inset-0 backdrop-filter backdrop-blur-lg"></div>
              <div className="absolute inset-0 overflow-hidden rounded-lg">
                <span className="absolute inset-0 rounded-lg bg-[image:radial-gradient(circle_at_50%_50%,rgba(18,18,18,0.6)_0%,rgba(33,33,33,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
              </div>
              <p className="line-clamp-1 text-center mb-2 text-neutral-200 group-hover:text-white z-10 relative">{input_prompt}</p>
              {image_url ? (
                <Image
                  alt={input_prompt}
                  className="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110 relative z-10"
                  src={image_url}
                  width={720}
                  height={480}
                  sizes="(max-width: 640px) 100vw,
                        (max-width: 1280px) 50vw,
                        (max-width: 1536px) 33vw,
                        25vw"
                />
              ) : (
                <div
                  style={{
                    width: 320,
                    height: 480,
                    backgroundColor: 'grey',
                  }}
                  className="rounded-lg"
                />
              )}
              <div 
                className="absolute inset-0 flex items-center justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <div className="bg-black bg-opacity-50 rounded p-2 lg:mt-36">
                  <TextGenerateEffect words={output_response} isHovered={isHovered} className="line-clamp-3 text-center text-white z-30 relative p-2 bg-black bg-opacity-40 transition-opacity rounded-lg"/>
                </div>
              </div>
              <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-neutral-400/0 via-neutral-400/90 to-neutral-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
            </div>
          </CardContainer>
        ))}

        </div>
      </main>
      <footer className="p-6 text-center font-light text-white/80 sm:pb-12">
        Created by {" "}
        <a
          href="https://www.linkedin.com/in/david-yu-871202244/"
          target="_blank"
          className="font-semibold hover:text-white hover:transition-all"
          rel="noreferrer"
        >
          David
        </a>
        ,{" "}
        <a
          href="https://www.linkedin.com/in/alexandra-enders/"
          target="_blank"
          className="font-semibold hover:text-white"
          rel="noreferrer"
        >
          Lexa
        </a>
        , and{" "}
        <a
          href="https://www.linkedin.com/in/advaitpaliwal/"
          target="_blank"
          className="font-semibold hover:text-white"
          rel="noreferrer"
        >
          Advait
        </a>{" "}
      </footer>
    </>
  );
};

export default Page;