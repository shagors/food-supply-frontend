import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import aboutUs from "../../assets/aboutus.jpg";

const AboutUs = () => {
  const controls = useAnimation();

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const handleScroll = () => {
    if (window.scrollY > 300) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  };

  // Attach scroll event listener when the component mounts
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <section className="relative h-[400px] flex items-center justify-center mb-20">
        {/* Background Image */}
        <motion.div
          variants={imageVariants}
          initial="hidden"
          animate={controls}
          transition={{ duration: 3 }}
          className="absolute inset-0 bg-cover bg-center z-[-1]"
          style={{ backgroundImage: `url(${aboutUs})` }}
        ></motion.div>

        {/* Content with Animation */}
        <motion.div
          className="text-white text-center z-40 bg-black bg-opacity-60 w-full h-full flex flex-col items-center justify-center p-5 object-fit"
          variants={textVariants}
          initial="hidden"
          animate={controls}
          transition={{ duration: 3, delay: 0.6 }}
        >
          <h2 className="text-5xl font-bold mb-7 capitalize">About Us</h2>
          <p className="text-md">
            Our Food Supply Management Company is dedicated to revolutionizing
            the food distribution landscape. Our core goal is to establish a
            resilient and efficient supply chain, driven by cutting-edge
            technology and sustainable practices. Motivated by a commitment to
            global food security, we aim to minimize waste, support local
            farmers, and ensure ethical sourcing. By harnessing data analytics,
            we strive to optimize logistics, reduce costs, and enhance the
            overall quality of food distribution. Our ultimate aspiration is to
            contribute to a world where everyone has access to safe, nutritious
            food, while simultaneously fostering environmental responsibility in
            the food industry.
          </p>
        </motion.div>
      </section>
    </>
  );
};

export default AboutUs;
