import { Fragment } from "react";
import Image from "next/image";
import classes from "./hero.module.css";

const Hero = () => {
  return (
    <Fragment>
      <section>
        <div className={classes.image}>
          <Image
            src="/images/site/vercel.svg"
            alt="An image showing Max"
            width={300}
            height={300}
          />
        </div>
        <h1>Hi, I am Max.</h1>
      </section>
    </Fragment>
  );
};

export default Hero;
