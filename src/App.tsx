import { AnimatePresence, motion } from "framer-motion";
import { useState, useRef } from "react";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const itemRef = useRef<HTMLDivElement>(null);
  return (
    <div className=" fixed inset-0 bg-slate-100 flex justify-center items-center">
      <motion.div
        whileHover={{ scale: 1.02, backgroundColor: "rgb(198, 208, 220)" }}
        whileTap={{ scale: 0.98, backgroundColor: "rgb(198, 208, 220)" }}
        ref={itemRef}
        onClick={() => setIsOpen(!isOpen)}
        className=" bg-slate-300 text-white p-5 rounded-lg select-none cursor-pointer"
      >
        Expense tracher
      </motion.div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed  rounded-lg select-none cursor-pointer"
            style={{ backgroundColor: "rgb(198, 208, 220)" }}
            transition={{
              type: "tween",
              ease: "easeOut",
              duration: 0.2,
              mass: 0.01,
            }}
            onClick={() => setIsOpen(!isOpen)}
            layout
            initial={{
              top: itemRef.current!.getBoundingClientRect().top,
              left: itemRef.current!.getBoundingClientRect().left,
              width: itemRef.current!.getBoundingClientRect().width,
              height: itemRef.current!.getBoundingClientRect().height,
            }}
            animate={{
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              width: "100%",
              height: "100%",
            }}
            exit={{
              top: itemRef.current!.getBoundingClientRect().top,
              left: itemRef.current!.getBoundingClientRect().left,
              width: itemRef.current!.getBoundingClientRect().width,
              height: itemRef.current!.getBoundingClientRect().height,
            }}
          >
            fjkl
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
