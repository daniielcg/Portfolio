import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="lg:py-16 h-screen flex items-center justify-center">
      <div className="grid grid-cols-1 w-full max-w-screen-lg px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center sm:text-left"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#4b0082] to-[#8a2be2]">
              Hello, I&apos;m{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Daniel",
                1000,
                "Software Engineer",
                1000,
                "Web Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            I’m a creative and innovative programmer passionate about crafting
            seamless digital experiences and bringing ideas to life through
            code.
          </p>
          <div className="flex flex-col sm:flex-row justify-center sm:justify-start gap-3 sm:gap-4">
            <Link
              to="/contact"
              className="px-6 inline-block py-3 w-full sm:w-auto rounded-full mt-3 bg-gradient-to-br from-[#4b0082] to-[#8a2be2] hover:bg-slate-200 text-white text-center"
            >
              Hire Me
            </Link>
            <a
              href="public\CV (Inglês).docx"  
              download="Daniel_Goncalves_CV.docx"
              className="px-1 inline-block py-1 w-full sm:w-auto rounded-full bg-gradient-to-br from-[#4b0082] to-[#8a2be2] hover:bg-slate-800 text-white mt-3 sm:ml-4"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2 text-center">
                Download CV
              </span>
            </a>

          </div>



        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
