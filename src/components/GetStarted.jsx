import React from "react";
import styles from "../style";
import { arrowUp } from "../assets";

const GetStarted = () => (
  <div
    className={`${styles.flexCenter} bg-blue-gradient h-[140px] w-[140px] 
  cursor-pointer rounded-full p-[2px]`}
  >
    <div
      className={`${styles.flexCenter} h-[100%] w-[100%] flex-col rounded-full bg-primary`}
    >
      <div className={`${styles.flexStart} flex-row`}>
        <p className="mr-2 font-poppins text-[18px] font-medium leading-[23px]">
          <span className="text-gradient">Get</span>
        </p>
        <img
          className="h-[23] w-[23px] object-contain"
          alt="arrow"
          src={arrowUp}
        />
      </div>
      <p className="font-poppins text-[18px] font-medium leading-[23px]">
        <span className="text-gradient">Started</span>
      </p>
    </div>
  </div>
);

export default GetStarted;
