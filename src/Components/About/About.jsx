import React from "react";
import "./about.css";
import face from "./assets/starface2.jpg";
import { motion } from "framer-motion";

const transition = { duration: 0.6, ease: [0.6, 0.1, -0.05, 0.9] };
function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={transition}
      className="About-container"
    >
      <div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="About-left"
      >
        <div className="about-left-heading-container">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.8, ease: [0.6, 0.1, -0.05, 0.9] }}
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            className="About-left-heading"
          >
            {" "}
            WHY DO WE STAND OUT?
          </motion.div>
        </div>
        <motion.div
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 1.2, ease: [0.6, 0.1, -0.05, 0.9] }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="About-left-para"
        >
          {" "}
          STOODIYO is a startup that aims to fulfill the demands of the client
          from bringing in content to post producing the video professionally.
          We make the process hassle free for the clients by providing each of
          the clients a Personal assistant. Cutting down the unnecessary
          confusion and repetitive communication.
        </motion.div>
      </div>
      <div className="About-right">
        <motion.img src={face} alt="Logo" id="face" />
      </div>
    </motion.div>
  );
}

export default About;
