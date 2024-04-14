'use client'

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { db, collection, getDocs } from '../db/firebase';
import { BackgroundGradientAnimation } from "../components/ui/background-gradient-animation";


const Page = () => {
  const [chats, setChats] = useState<any[]>([]);

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
      <main className="mx-auto max-w-[1960px] p-4">
        <div className="columns-1 gap-4 sm:columns-2 xl:columns-3 2xl:columns-4">
          <div className="after:content relative mb-5 flex h-[629px] flex-col items-center justify-end gap-4 overflow-hidden rounded-lg bg-white/10 px-6 pb-16 pt-64 text-center text-white shadow-highlight after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight lg:pt-0">
            <>
            <div className="absolute inset-0 flex items-center justify-center opacity-20">
              <span className="flex max-h-full max-w-full items-center justify-center mb-36">
                <Image 
                  src="./SmarterGlass.svg"
                  alt="Smart Glasses"
                  width={400}
                  height={400}
                />
              </span>
              <span className="absolute left-0 right-0 bottom-0 h-[400px] bg-gradient-to-b from-black/0 via-black to-black"></span>
            </div>
            <h1 className="text-6xl font-semibold font-mono">
              Insight
            </h1>
            <h1 className="mt-8 mb-4 text-base font-bold uppercase tracking-widest">
              Capture your moments
            </h1>
            <p className="max-w-[40ch] text-white/75 sm:max-w-[32ch]">
              Look, point, and capture what you see. Understand what you see. 
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
          <div 
            className="hover:transition-all p-3 rounded-lg group relative mb-5 block w-full"
            style={{
              position: 'relative',
              overflow: 'hidden', // Ensure the pseudo-element doesn't exceed the div bounds
            }}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${image_url})`,
                filter: 'blur(8px)',
              }}
            ></div>
            <div className="absolute inset-0 backdrop-filter backdrop-blur-lg"></div>
            <p className="line-clamp-1 text-center mb-2 text-neutral-400 group-hover:text-white z-10 relative">{input_prompt}</p>
            {image_url ? (
              <Image
                alt={input_prompt}
                className="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110 relative z-10" // Ensure the image is above the background blur
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
            <p className="line-clamp-2 text-center mt-2 text-neutral-400 group-hover:text-white z-30 relative"
              style={{
                position: 'absolute',
                bottom: '10%', // Adjust positioning to your liking
                left: '50%',
                transform: 'translateX(-50%)',
                width: '90%', // Ensures the text doesn't go edge to edge
                backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background for readability
                padding: '0.5em',
                borderRadius: '10px'
              }}>
              {output_response}
            </p>
          </div>
        ))}

        </div>
      </main>
      <footer className="p-6 text-center text-white/80 sm:p-12">
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
          href="https://www.linkedin.com/in/david-yu-871202244/"
          target="_blank"
          className="font-semibold hover:text-white"
          rel="noreferrer"
        >
          Lexa
        </a>
        , and{" "}
        <a
          href="https://www.linkedin.com/in/david-yu-871202244/"
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