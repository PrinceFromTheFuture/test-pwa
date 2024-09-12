import { AnimatePresence, motion } from "framer-motion";
import { useState, useRef } from "react";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const itemRef = useRef<HTMLDivElement>(null);
  return (
    <div className=" fixed inset-0 bg-[#F8FBFD] flex justify-center items-center shadow-lg">
      <motion.div
        whileHover={{ scale: 1.02, backgroundColor: "rgb(198, 208, 220)" }}
        whileTap={{ scale: 0.98, backgroundColor: "#f1f5f9  " }}
        ref={itemRef}
        onClick={() => setIsOpen(!isOpen)}
        className="  bg-slate-100 border-lime-100 text-white p-5 rounded-lg select-none cursor-pointer"
      >
        Expense tracher
      </motion.div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed  rounded-lg select-none cursor-pointer shadow-lg p-4"
            style={{ backgroundColor: "#f1f5f9  " }}
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
              top: 20,
              left: 20,
              right: 20,
              bottom: 20,
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
