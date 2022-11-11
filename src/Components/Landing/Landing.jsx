import React from "react";
import "./landing.css";
import { motion } from "framer-motion";
import { useState } from "react";
import { useEffect, useRef } from "react";
import About from "../About/About";
import Skills from "../Skills/Skills";
import Contact from "../Contact/Contact";
function Landing() {
  const transition = { duration: 0.6, ease: [0.6, 0.1, -0.05] };
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ transition }}
        className="Landing-container"
      >
        <div>
          <motion.div className="Landing-hero-content">
            <span className="landing-text">
              <div className="hello-container">
                <motion.span
                  initial={{ y: "100%" }}
                  whileInView={{ y: "0" }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="hello-landing"
                >
                  hello
                </motion.span>
                <div className="hello-text-container">
                  <motion.div
                    initial={{ y: "300%" }}
                    whileInView={{ y: "100%" }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                    className="hello-text"
                  >
                    {" "}
                    your project is cool 😎 <br></br> but let's make it cooler🎉
                  </motion.div>
                </div>
              </div>
              <div className="world-container">
                <motion.span
                  initial={{ y: "100%" }}
                  whileInView={{ y: 0 }}
                  transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                  className="world-landing"
                >
                  World
                </motion.span>
              </div>
            </span>
          </motion.div>
        </div>
      </motion.div>
      <About />
      <Skills />
      <Contact />
    </>
  );
}

export default Landing;
