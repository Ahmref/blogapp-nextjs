import Image from "next/image";
import classes from "./hero.module.css";
function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="https://raw.githubusercontent.com/Ahmref/blogapp-nextjs/main/public/Images/site/profile.jpeg"
          alt="an image showing me"
          width={100}
          height={100}
          layout="responsive"
        />
      </div>
      <h1>Hi I'm R :)</h1>
      <p>
        I blog about web development -especially frontend frameworks like
        Angular or React.
      </p>
    </section>
  );
}
export default Hero;
