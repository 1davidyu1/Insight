"use client";
import React, { useState } from 'react';
import { motion } from "framer-motion";

export const TextGenerateEffect = ({
  words,
  isHovered,
  className,
}: {
  words: string;
  isHovered: boolean;
  className?: string;
}) => {
  const wordsArray = words.split(" ");

  const variants = {
    visible: (i: number) => ({
      opacity: 1,
      transition: { delay: i * 0.1 },
    }),
    hidden: { opacity: 0 },
  };

  return (
    <div 
      className={className}
    >
      <motion.div className="">
        {wordsArray.map((word, index) => (
          <motion.span
            key={index}
            custom={index}
            initial="hidden"
            animate={isHovered ? "visible" : "hidden"}
            variants={variants}
          >
            {word}{" "}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
};
