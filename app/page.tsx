// needs to be dynamic

'use client'

import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <div>
      <div>

      </div>
      <div>
        <Icon
          icon="ic:round-close"
          className="text-black"
        />
        <Icon
          icon="solar:arrow-left-outline"
          className="text-black"
        />
        <h1>2/4/10</h1>
        <p>5:38 PM</p>
        <Icon
          icon="solar:arrow-right-outline"
          className="text-black"
        />
      </div>
      <div>
        <Image
          src="/example.jpg"
          alt="example"
          height={400}
          width={400}
        />
        <div>
          <p>What does this sign say?</p>
          <h3>Given the information you've provided, your</h3>
        </div>
      </div>
    </div>
  )
}