// needs to be dynamic

'use client'

import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <div>
      <div className="flex ml-8 mt-8">
        <Icon
            icon="ic:round-close"
            className="text-3xl"
          />
      </div>
      <div className="flex items-center gap-4 justify-center">
        {/* <Icon
          icon="solar:arrow-left-outline"
          className="text-2xl"
        /> */}
        <div className="flex gap-2 items-end">
          <h1 className="text-3xl">2/4/10</h1>
          <p className="text-xs">5:38 PM</p>
        </div>
        {/* <Icon
          icon="solar:arrow-right-outline"
          className="text-2xl"
        /> */}
      </div>
      <div>
        <Image
          src="/example.jpg"
          alt="example"
          height={400}
          width={600}
        />
        <div>
          <p>What does this sign say?</p>
          <h3>Given the information you've provided, your</h3>
        </div>
      </div>
    </div>
  )
}