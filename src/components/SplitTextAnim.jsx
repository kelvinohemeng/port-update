import gsap from "gsap";
import { useEffect, useRef } from "react";

export const SplitTextAnim = ({ text, className }) => {
  const charRefs = useRef([]);

  useEffect(() => {
    // Select all the characters using the refs
    const chars = charRefs.current.flat();

    // Check if GSAP is available and if there are characters to animate
    if (gsap && chars.length > 0) {
      gsap.from(chars, {
        y: -200,
        duration: 0.6,
        stagger: 0.09,
        ease: "expo.out",
        scrollTrigger: {
          trigger: chars,
          // markers: true,
          start: "center center",
          end: "bottom top",
          // toggleActions: "restart none restart none",
        },
      });
    }
  }, [text]); // Add 'text' as a dependency to re-run the effect when the text changes

  return (
    <div className="block">
      <span className={className}>
        {/* Word splitting */}
        {text.split(" ").map((word, i) => (
          <span key={i} className=" ">
            {" "}
            <span className="inline-flex w-max px-[2px] overflow-hidden">
              {/* character splitting */}
              {word.split("").map((char, j) => (
                <span
                  className="w-max chars"
                  key={j}
                  ref={(el) =>
                    (charRefs.current[i] = [...(charRefs.current[i] || []), el])
                  }
                >
                  {char}
                </span>
              ))}
            </span>
          </span>
        ))}
      </span>
    </div>
  );
};

export const SplitWordAnim = ({ text, fontSize }) => {
  const wordRef = useRef(null);

  useEffect(() => {
    const word = wordRef.current.querySelectorAll(".word");

    gsap.from(word, {
      // opacity: 0,
      y: -300,
      duration: 1.2,
      stagger: 0.09,
      ease: "expo.out",
      scrollTrigger: {
        trigger: wordRef.current,
        // markers: true,
        start: "top 70%",
        end: "bottom center",
      },
    });
  }, [text]); // Add 'text' as a dependency to re-run the effect when the text changes

  return (
    <div className={`${fontSize} `}>
      {/* Word splitting */}
      <span
        className="block leading-[100%] relative tracking-tight"
        ref={wordRef}
      >
        {text.split(" ").map((word, i) => (
          <span key={i}>
            {" "}
            <span className="inline-flex relative overflow-hidden ">
              <span className="block w-max word relative p-[1px]">{word}</span>
            </span>
          </span>
        ))}
      </span>
    </div>
  );
};
