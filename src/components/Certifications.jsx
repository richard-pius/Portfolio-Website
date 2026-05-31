import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { certifications } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const CertificationCard = ({ index, title, issuer, date }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.2, 0.75)}
    className='bg-black-100 p-6 rounded-3xl xs:w-[320px] w-full border border-secondary shadow-lg'
  >
    <div className='mt-1'>
      <span className="blue-text-gradient font-bold text-[14px] tracking-wider">{date}</span>
      <h3 className='text-white font-bold text-[20px] mt-2 leading-snug'>{title}</h3>
      <p className='mt-3 text-secondary text-[14px] font-medium'>Issued by: {issuer}</p>
    </div>
  </motion.div>
);

const Certifications = () => {
  return (
    <div className='mt-12 bg-primary rounded-[20px]'>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Verified Credentials</p>
        <h2 className={styles.sectionHeadText}>Certifications.</h2>
      </motion.div>
      <div className='mt-12 flex flex-wrap gap-7 justify-center'>
        {certifications.map((cert, index) => (
          <CertificationCard key={`cert-${index}`} index={index} {...cert} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Certifications, "certifications");