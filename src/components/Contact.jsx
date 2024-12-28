import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_bw52txu",
        "template_fzbfuaz",
        {
          from_name: form.name,
          to_name: "Daniel",
          from_email: form.email,
          to_email: "danielcatgon04@gmail.com",
          message: form.message,
        },
        "WwAUharz7Tg-BefHe"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <section
      id="contact"
      className="grid grid-cols-1 md:grid-cols-2 my-12 py-24 gap-6 relative"
    >
      {/* Fundo de gradiente */}
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#4b0082] to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>

      {/* Formulário de Contato */}
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="z-10 flex flex-col md:flex-row bg-black-100 p-8 rounded-2xl"
      >
        <div className="flex flex-col w-full md:w-3/4">
          <p className={styles.sectionSubText}>Get in touch</p>
          <h3 className={styles.sectionHeadText}>Contact.</h3>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-8 flex flex-col gap-8"
          >
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your good name?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your web address?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Message</span>
              <textarea
                rows={7}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What you want to say?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>

            <button
              type="submit"
              className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </div>
      </motion.div>

      {/* Conteúdo Animado */}
      <motion.div
        initial={{ x: "-100vw", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 50 }}
        className="z-10 flex flex-col justify-center items-center md:items-start text-center md:text-left p-4 md:p-8"
      >
        <h1 className="text-white text-3xl sm:text-5xl lg:text-6xl xl:text-8xl lg:leading-normal font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#4b0082] to-[#8a2be2]">
          Let's Connect
        </h1>
        <p className="text-[#ADB7BE] text-sm sm:text-base lg:text-lg mb-4 max-w-md">
          I&apos;m currently looking for new opportunities. My inbox is always open.
          Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-4 justify-center md:justify-start">
          <a href="https://github.com/daniielcg" target="_blank" rel="noopener noreferrer">
            <img className="h-auto w-8 sm:w-10" src="src/assets/github-icon.svg" alt="Github Icon" />
          </a>
          <a href="https://www.linkedin.com/in/daniel-gon%C3%A7alves-b916412a3/" target="_blank" rel="noopener noreferrer">
            <img className="h-auto w-8 sm:w-10" src="src/assets/linkedin-icon.svg" alt="Linkedin Icon" />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default SectionWrapper(Contact, "contact");
