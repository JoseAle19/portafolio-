import React from "react";

export const SectionContainer = ({ children, styles, id}) => {
  return (
    <section 
     id={id} 
     className={`w-full   md:w-[740px] xl:w-[740px] mx-auto  ${styles} `}>
      {children}
    </section>
  );
};
