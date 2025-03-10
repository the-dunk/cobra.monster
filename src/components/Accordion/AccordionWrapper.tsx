import { useRef, useState, type ReactNode } from "react";
import arrowRight from "@assets/mutantEmoji/utility/arrow_right.png";

interface Props {
  title: ReactNode;
  content: ReactNode;
}

const Accordion = ({ title, content }: Props) => {
  const [active, setActive] = useState(false);
  const [height, setHeight] = useState("0px");
  const [rotate, setRotate] = useState("transform duration-700 ease");

  const contentSpace = useRef(null);

  function toggleAccordion() {
    setActive((prevState) => !prevState);
    // @ts-ignore
    setHeight(active ? "0px" : `${contentSpace.current.scrollHeight}px`);
    setRotate(active ? "transform duration-500 ease" : "transform duration-500 ease rotate-90");
  }

  return (
    <div className="@container/accordion accordion flex flex-col not-prose my-2 border-l-8 border-yellow">
      {
        <div className="bg-redDark/40 p-4">
          <button className="accordionBtn flex items-center justify-between w-full" onClick={toggleAccordion}>
            <h3>{title}</h3>
            <img className={`${rotate} w-6`} src={arrowRight.src} alt="arrow" />
          </button>
          <div ref={contentSpace} style={{ maxHeight: `${height}` }} className="overflow-y-hidden transition-max-height duration-500 ease-in-out">
            <div>{content}</div>
          </div>
        </div>
      }
    </div>
  );
};

export default Accordion;
