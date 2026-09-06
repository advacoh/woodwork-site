"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function PageTransition({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }} // מתחיל שקוף וקצת למטה
      animate={{ opacity: 1, y: 0 }}   // הופך לנראה ועולה למקום
      exit={{ opacity: 0, y: -10 }}    // כשיוצא הופך לשקוף ועולה קצת
      transition={{ duration: 0.6, ease: "easeOut" }} // משך זמן של 0.6 שניות - עדין וחלק
    >
      {children}
    </motion.div>
  );
}