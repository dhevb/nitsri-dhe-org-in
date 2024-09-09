"use client";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CommingSoon from '../app/component/CommingSoon'
import CompanyInfo from "./component/CompanyInfo";



const pageVariants = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: 20 },
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.8,
};

const TransitionWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={pageVariants}
      transition={pageTransition}
    >
      {children}
    </motion.div>
  );
};

const MobileView = () => (
  <div className="flex flex-col space-y-4 items-center">
    <div className="flex flex-col w-full">
      <div className="flex items-center justify-center">
        
      </div>
      <div className="flex items-center justify-center">
      
      </div>
     
    </div>
    <div className="w-full">
      
    </div>
    <div className="w-full">
    
    </div>
  </div>
);

const DesktopView = () => (
  <div className="flex flex-col items-center space-x-4">
    <div className="w-1/5"></div>
    <div className="flex ">
      {/* <div className="w-1/5 flex items-center justify-center">
        <Announcement />
      </div>
      <div className="w-3/5 flex items-center justify-center">
        <TransitionWrapper>
          <SlideShow slides={slides1} />
        </TransitionWrapper>
      </div>
      <div className="w-1/4 flex items-center justify-center">
        <TransitionWrapper>
          <NoticeBoard />
        </TransitionWrapper>
      </div>
    </div>
    <div className="w-3/5">
      <TransitionWrapper>
        <Info />
      </TransitionWrapper>

      <TransitionWrapper>
        <Organiger />
      </TransitionWrapper> */}
    </div>
  </div>
);

export default function Home() {
  return (
    <div className="bg-white">
      <CompanyInfo />
      <CommingSoon />

      <div>
        <div className="sm:hidden">
          <MobileView />
        </div>
        <div className="hidden sm:block">
          <DesktopView />
        </div>
      </div>
      
    </div>
  );
}
