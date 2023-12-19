import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const LoadingSpinner = () => {
  const controls = useAnimation();

  useEffect(() => {
    const spinAnimation = async () => {
      while (true) {
        await controls.start({
          rotate: 720,
          transition: { duration: 1, ease: "linear" },
        });

        await controls.start({
          rotateY: 180,
          rotateX: 180,
          transition: { duration: 1, ease: "linear" },
        });

        await controls.start({
          rotate: 0,
          rotateY: 0,
          rotateX: 0,
          transition: { duration: 0 },
        });
      }
    };

    spinAnimation();
  }, [controls]);

  return (
    <motion.div
      style={{
        display: "inline-block",
        originX: 0.5,
        originY: 0.5,
        overflow: "hidden",
        width: "150px",
        height: "150px"
      }}
    >
      <motion.div
        animate={controls}
        style={{
          display: "inline-block",
        }}
      >
        <motion.img
          src="/images/site/record-transparent.png"
          alt="record"
          style={{width: "100%", rotate: 90}}
        />
      </motion.div>
    </motion.div>
  );
};

export default LoadingSpinner;