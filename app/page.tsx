// needs to be dynamic
'use client'

import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <div className="items-center justify-center flex flex-col mt-36">
      <h1 className="text-4xl mb-8 font-thin w-4/5 md:w-3/5 lg:w-2/5 text-center font-serif leading-[3rem]">Capture your moments, discover what awaits for you.</h1>
      <div className="border-[.5px] border-neutral-700 shadow-xs shadow-neutral-700 bg-neutral-900 rounded-xl flex p-2 items-center gap-2 hover:bg-neutral-800">
        <div className="border-[.5px] border-neutral-700 shadow-xs shadow-neutral-700 bg-neutral-900 rounded-lg">
          <p className="px-2 py-1 text-xs font-light">
            8
          </p>
        </div>
        <p className="text-sm font-light">
          Street Names
        </p>
      </div>
      <div 
      className="border-[.5px] border-neutral-700 shadow-xs shadow-neutral-700 bg-neutral-900 hover:bg-neutral-800 rounded-xl flex justify-between items-center mt-8 flex-row w-4/5 md:w-3/5 lg:w-2/5"
      onClick={() => {}}
      >
        <div className="flex p-2">
          <Image
            src="/example.jpg"
            alt="example"
            height={700}
            width={50}
            className="rounded-md"
          />
          <h3 className="px-3 py-2 text-md">
            What does this sign say? 
          </h3>
        </div>
        <p className="mr-3 text-md">
          12/4/10
        </p>
      </div>
    </div>
  )
}