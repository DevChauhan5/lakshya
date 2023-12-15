import { useTransform, MotionValue, useScroll, motion } from "framer-motion";
import { useRef } from "react";

export default function ScrollFun(){
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const rotate = useTransform(scrollYProgress, [0, 1], ["0deg", "90deg"]);

  return (
    <div ref={targetRef} className="relative z-0 h-[800vh] bg-neutral-200">
      <div className="sticky top-0 h-screen bg-white">
        <Trippy rotate={rotate} />
      </div>
    </div>
  );
};

const NUM_SECTIONS = 25;
const PADDING = `${100 / NUM_SECTIONS / 2}vmin`;

const generateSections = (
  count: number,
  color: string,
  rotate: MotionValue
) => {
  if (count === NUM_SECTIONS) {
    return <></>;
  }

  const nextColor = color === "black" ? "white" : "black";

  return (
    <Section rotate={rotate} background={color}>
      {generateSections(count + 1, nextColor, rotate)}
    </Section>
  );
};

const Trippy = ({ rotate }: { rotate: MotionValue }) => {
  return (
    <motion.div className="absolute inset-0 overflow-hidden bg-black">
      {generateSections(0, "black", rotate)}
    </motion.div>
  );
};

const Section = ({
  background,
  children,
  rotate,
}: {
  background: string;
  rotate: MotionValue;
  children?: JSX.Element;
}) => {
  return (
    <motion.div
      className="relative h-full w-full origin-center"
      style={{
        background,
        rotate,
        padding: PADDING,
      }}
    >
      {children}
    </motion.div>
  );
};