import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowElbowDownRight,
  ArrowElbowRightDown,
  Coffee,
} from "@phosphor-icons/react";
import VanillaTilt from "vanilla-tilt";
import { TweenMax } from "gsap/all";

export const BtnDefFollow = ({
  children,
  paddings,
  linkTo,
  target,
  onClick,
  bg,
  text,
}) => {
  useEffect(() => {
    var magnets = document.querySelectorAll(".magnetic");
    var strength = 50;

    magnets.forEach((magnet) => {
      magnet.addEventListener("mousemove", moveMagnet);
      magnet.addEventListener("mouseout", function (event) {
        TweenMax.to(event.currentTarget, 1, {
          x: 0,
          y: 0,
          ease: "power4.out",
        });
      });
    });

    function moveMagnet(event) {
      var magnetButton = event.currentTarget;
      var bounding = magnetButton.getBoundingClientRect();

      //console.log(magnetButton, bounding)

      TweenMax.to(magnetButton, 1, {
        x:
          ((event.clientX - bounding.left) / magnetButton.offsetWidth - 0.5) *
          strength,
        y:
          ((event.clientY - bounding.top) / magnetButton.offsetHeight - 0.5) *
          strength,
        ease: "power4.out",
      });

      //magnetButton.style.transform = 'translate(' + (((( event.clientX - bounding.left)/(magnetButton.offsetWidth))) - 0.5) * strength + 'px,'+ (((( event.clientY - bounding.top)/(magnetButton.offsetHeight))) - 0.5) * strength + 'px)';
    }
  }, []);

  return (
    <Link to={linkTo} target={target && "_blank"} onClick={onClick && onClick}>
      <div className="magnetic l-font">
        <button
          type="button"
          className={` magnet-button flex items-center gap-1 ${
            paddings && "px-5 py-2"
          } ${bg ? bg : "bg-background"} ${
            text ? text : "text-white"
          } rounded-full`}
        >
          {children}
        </button>
      </div>
    </Link>
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
          : " text-black bg-[#ffffff] hover:bg-[hsl(234,59%,44%)] hover:text-white"
      }`}
      // onClick={pageRefresh}
    >
      <div className=" flex justify-center w-full">
        <span className=" text-[1.5rem] text-center">{children}</span>
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
