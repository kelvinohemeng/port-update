import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowElbowDownRight,
  ArrowElbowRightDown,
} from "@phosphor-icons/react";
import VanillaTilt from "vanilla-tilt";
export const BtnDef = ({ children, linkTo, showIcon, target, onClick }) => {
  const ref1 = useRef(null);

  useEffect(() => {
    // vanilla tilt code
    VanillaTilt.init(ref1.current, {
      max: 10,
      speed: 200,
      transition: true,
      easing: "cubic-bezier(.03,.98,.52,.99)",
      perspective: 1000,
    });
  });
  return (
    <Link
      ref={ref1}
      to={linkTo}
      onClick={onClick}
      target={target ? "_blank" : ""}
      className="abt-btn"
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
  const ref1 = useRef(null);

  useEffect(() => {
    // vanilla tilt code
    VanillaTilt.init(ref1.current, {
      max: 10,
      speed: 200,
      transition: true,
      easing: "cubic-bezier(.03,.98,.52,.99)",
      perspective: 1000,
    });
  });
  return (
    <a
      ref={ref1}
      href={linkTo}
      target={target ? "_blank" : ""}
      className="abt-btn"
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
      // ref={ref1}
      to={linkTo}
      target={target ? "_blank" : ""}
      className="abt-btn navs"
      onClick={onClick}
      onMouseEnter={onHover}
      onMouseLeave={notOnHover}
    >
      <div className="main-text-btn ">
        <div>
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
    </Link>
  );
};
export const BtnDefNativeNoLink = ({
  children,
  showIcon,
  target,
  pointDown,
}) => {
  const ref1 = useRef(null);

  useEffect(() => {
    // vanilla tilt code
    VanillaTilt.init(ref1.current, {
      max: 10,
      speed: 200,
      transition: true,
      easing: "cubic-bezier(.03,.98,.52,.99)",
      perspective: 1000,
    });
  });
  return (
    <div ref={ref1} className="abt-btn cursor-pointer">
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
