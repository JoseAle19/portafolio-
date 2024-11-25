import React from "react";

export const SocialPill = ({ children, url, isPrivate, isMobile }) => {
  return (
    <a
    download={isMobile?url:''}
      className={`rounded-full
       border border-white/90
        flex justify-center items-center 
        gap-x-2 
        xl:py-2  xl:px-4 xl:text-base
        py-1  px-2
        text-xs 
      bg-white/5 hover:scale-105 cursor-pointer transition
        ${isPrivate && "pointer-events-none bg-white/30"}
      `}
      href={url}
      target="_blank"
      rel="noopener"
    >
      {children}
    </a>
  );
};
