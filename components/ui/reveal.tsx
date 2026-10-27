"use client";
import {motion,useReducedMotion} from "framer-motion";
import type {ReactNode} from "react";
export function Reveal({children,delay=0}:{children:ReactNode;delay?:number}){const reduced=useReducedMotion();return <motion.div initial={reduced?false:{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.14}} transition={{duration:reduced?0:.6,delay,ease:[.22,1,.36,1]}}>{children}</motion.div>}
