
import { motion } from 'framer-motion';
import { styles } from '../styles'
// import { ComputersCanvas } from './canvas';


const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`} >
         <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]"/>
          <div className="w-1 sm:h-80 h-40 violet-gradient "/>
         </div>
        <div >
          <h1 className={`${styles.heroHeadText}
          text-white`}>
            Hi, I'm <span className="text-[#915eff]">Bhumi Bhatt</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
          Bridging the Digital Cosmos,<br className="sm:block hidden"/>Where Code Meets Cognition
          </p>
          <div className="mt-10 flex flex-wrap gap-4 text-white-100 text-[16px] leading-[28px] max-w-lg">
  <span className="bg-[#915eff33] px-3 py-1 rounded-full">Full-Stack Developer</span>
  <span className="bg-[#915eff33] px-3 py-1 rounded-full">GGSIPU Distinction Holder(94%)</span>
  <span className="bg-[#915eff33] px-3 py-1 rounded-full">Data Engineer</span>
  <span className="bg-[#915eff33] px-3 py-1 rounded-full">Back-End Engineer</span>
  <span className="bg-[#915eff33] px-3 py-1 rounded-full">Web Designer</span>
</div>


        </div>
        
      </div>
      
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.dev
            animate={{
              y:[0, 24, 0]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatTime: 'loop'

            }}
            className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>

      </div>
      
    </section>
  )
}

export default Hero