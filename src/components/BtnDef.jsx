import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowElbowDownRight,
  ArrowElbowRightDown,
  Coffee,
} from "@phosphor-icons/react";
import VanillaTilt from "vanilla-tilt";
export const BtnDefFollow = ({
  children,
  linkTo,
  showIcon,
  target,
  onClick,
}) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [size, setSize] = useState(10);
  const updateCursorPosition = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    document.addEventListener("mousemove", updateCursorPosition);
    return () => {
      document.removeEventListener("mousemove", updateCursorPosition);
    };
  }, []);

  return (
    <div
      className=" p-4 relative"
      onMouseOver={() => setSize(100)}
      onMouseLeave={() => setSize(10)}
    >
      {" "}
      <Link
        to={linkTo}
        onClick={onClick}
        target={target ? "_blank" : ""}
        className="abt-btn relative overflow-hidden"

        // onClick={pageRefresh}
      >
        <div className="main-text-btn">
          <div>
            <div>{children}</div>
            <div>{children}</div>
          </div>
        </div>

        {showIcon ? (
          <ArrowElbowDownRight
            size={22}
            weight="fill"
            className=" order-first"
          />
        ) : (
          ""
        )}
        <div
          className="cursor-follower"
          style={{
            width: `${size}px`,
            left: position.x - size / 1,
            top: position.y - size / 1,
          }}
        ></div>
      </Link>
    </div>
  );
};

export const BtnDef = ({
  children,
  linkTo,
  showIcon,
  target,
  onClick,
  className,
  showIconCoffee,
  customIcon,
}) => {
  return (
    <Link
      to={linkTo}
      onClick={onClick}
      target={target ? "_blank" : ""}
      className={`abt-btn  ${className} ${
        className
          ? `${className}`
          : " text-black bg-[#ecebeb] hover:bg-[hsl(234,59%,44%)] hover:text-white"
      }`}
      // onClick={pageRefresh}
    >
      <div className="main-text-btn">
        <div>
          <div>{children}</div>
          <div>{children}</div>
        </div>
      </div>
      {showIcon ? (
        <ArrowElbowDownRight size={22} weight="fill" className=" order-first" />
      ) : (
        ""
      )}
      {showIconCoffee ? (
        <Coffee size={22} weight="fill" className=" order-first" />
      ) : (
        ""
      )}
      {customIcon ? customIcon : ""}
    </Link>
  );
};
export const BtnDefNative = ({
  children,
  linkTo,
  showIcon,
  target,
  pointDown,
}) => {
  return (
    <a href={linkTo} target={target ? "_blank" : ""} className="abt-btn">
      <div className="main-text-btn">
        <div>
          <div>{children}</div>
          <div>{children}</div>
        </div>
      </div>
      {showIcon ? (
        <ArrowElbowDownRight size={22} weight="fill" className=" order-first" />
      ) : (
        ""
      )}
      {pointDown ? (
        <ArrowElbowRightDown
          size={22}
          weight="fill"
          mirrored
          className=" order-first"
        />
      ) : (
        ""
      )}
    </a>
  );
};
export const BtnDefNativeNavLink = ({
  children,
  linkTo,
  showIcon,
  target,
  pointDown,
  onClick,
  onHover,
  notOnHover,
}) => {
  // const ref1 = useRef(null);

  // useEffect(() => {
  //   // vanilla tilt code
  //   VanillaTilt.init(ref1.current, {
  //     max: 10,
  //     speed: 200,
  //     transition: true,
  //     easing: "cubic-bezier(.03,.98,.52,.99)",
  //     perspective: 1000,
  //   });
  // });
  return (
    <Link
      to={linkTo}
      target={target ? "_blank" : ""}
      className="abt-btn navs"
      onClick={onClick}
      onMouseEnter={onHover}
      onMouseLeave={notOnHover}
    >
      <div className="main-text-btn ">
        <div>
          <div className=" text-white">{children}</div>
        </div>
      </div>
      {showIcon ? (
        <ArrowElbowDownRight size={22} weight="fill" className=" order-first" />
      ) : (
        ""
      )}
      {pointDown ? (
        <ArrowElbowRightDown
          size={22}
          weight="fill"
          mirrored
          className=" order-first"
        />
      ) : (
        ""
      )}
    </Link>
  );
};
export const BtnDefNativeNoLink = ({
  children,
  showIcon,
  target,
  pointDown,
}) => {
  return (
    <div className="abt-btn cursor-pointer">
      <div className="main-text-btn">
        <div>
          <div>{children}</div>
          <div>{children}</div>
        </div>
      </div>
      {showIcon ? (
        <ArrowElbowDownRight size={22} weight="fill" className=" order-first" />
      ) : (
        ""
      )}
      {pointDown ? (
        <ArrowElbowRightDown
          size={22}
          weight="fill"
          mirrored
          className=" order-first"
        />
      ) : (
        ""
      )}
    </div>
  );
};
