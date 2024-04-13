// needs to be dynamic

'use client'

import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <div className="">
      <div className="flex ml-8 mt-8">
        <Icon
            icon="ic:round-close"
            className="text-3xl"
          />
      </div>
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="flex items-center gap-4 justify-center ">
          {/* <Icon
            icon="solar:arrow-left-outline"
            className="text-2xl"
          /> */}
          <div className="flex flex-col items-center gap-4">
            <h1 className="text-3xl">2/4/10</h1>
            <p className="text-xs">5:38 PM</p>
          </div>
          {/* <Icon
            icon="solar:arrow-right-outline"
            className="text-2xl"
          /> */}
        </div>
        <div className="my-24 mb-60 flex lg:mx-8 gap-8 justify-center items-center">
          <Image
            src="/example.jpg"
            alt="example"
            height={600}
            width={800}
            className="rounded-md"
          />
          <div className="text-center ">
            <p className="mb-4">What does this sign say?</p>
            <h3 className="text-2xl lg:mx-20 mx-0">Given the information you've provided, your</h3>
          </div>
        </div>
      </div>
    </div>
  )
}