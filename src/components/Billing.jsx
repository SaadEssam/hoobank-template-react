import React from "react";
import { apple, google, huawei, bill } from "../assets";
import styles, { layout } from "../style";

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img
        src={bill}
        alt="billing"
        className="relative z-[5] h-[100%] w-[100%]"
      />

      <div className="white__gradient absolute -left-1/2 top-0 z-[3] h-[50%] w-[50%] rounded-full" />
      <div className="pink__gradient absolute -left-1/2 bottom-0 z-[0] h-[50%] w-[50%] rounded-full" />
    </div>

    <div className={`${layout.sectionInfo} items-center`}>
      <h2 className={`${styles.heading2} max-w-[470px]`}>
        Easily control your <br className="hidden sm:block" />
        Billing & invoicing.
      </h2>
      <p className={`${styles.paragraph} mt-5 max-w-[470px]`}>
        The best way to simplify your invoicing and billing procedure is to
        choose an easy-to-use tool that offers scalability. The best invoice app
        will help you implement the same process regardless of the number of
        clients.
      </p>

      <div className="sm:mt-15 mt-6 flex flex-row flex-wrap">
        <img
          src={apple}
          alt="apple_store"
          className="mr-5 h-[42px] w-[128px] cursor-pointer object-contain"
        />
        <img
          src={google}
          alt="google_play"
          className="mr-5 h-[42px] w-[128px] cursor-pointer object-contain"
        />
        <img
          src={huawei}
          alt="huawei_gallery"
          className="mr-5 h-[42px] w-[128px] cursor-pointer object-contain"
        />
      </div>
    </div>
  </section>
);

export default Billing;
