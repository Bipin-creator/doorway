"use client"
import React from 'react'
import { motion } from 'framer-motion'

const SustainabilityIntro = () => {
  return (
    <section className='py-16 max-w-120 md:max-w-175 mx-auto'>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-black text-center font-helveticaNeue text-2xl md:text-3xl tracking-widest uppercase mb-6"
      >
        proud member of the UN global compact
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
        className='font-garamondlight tracking-wide text-sm [word-spacing:0.02rem] text-center font-medium'
      >
        Business ethics and conduct are at the heart of The Doorway’s mission. As a proud member of the UN Global Compact Nepal, we are committed to upholding the highest international standards in integrity, transparency, and accountability. Guided by principles enshrined in the UN Global Compact and the Sustainable Development Goals, we transcend conventional business goals to champion human rights, environmental stewardship, and anti-corruption efforts. For us, these are not just ideals—they are imperatives that drive us to build trust, foster impactful partnerships, and contribute to a sustainable and equitable future for all.
      </motion.p>
    </section>
  )
}

export default SustainabilityIntro
