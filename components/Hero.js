import React from 'react'
import { motion, useInView } from 'framer-motion'

const Hero = () => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: false });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delay: 0.2,
                when: "beforeChildren",
                staggerChildren: 0.3
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    }

    return (
        <motion.div
            className='my-12 mx-28 2xl:mx-0'
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
        >
            <div className='w-full flex flex-row items-start'>
                <motion.div className='w-[52%] relative' variants={itemVariants}>
                    <motion.img src="/assets/backdrop.png" alt="Backdrop" className='-mt-[120px] ml-10' variants={itemVariants} />
                    <div className='flex flex-col items-start gap-4 -mt-[300px]'>
                        <motion.h1 className='font-bold text-[48px] xl:text-[64px] leading-[64px]' variants={itemVariants}>
                            Make The Best <br /> Financial Decisions
                        </motion.h1>
                        <motion.p className='text-gray-700' variants={itemVariants}>
                            dolor sit amet consectetur adipisicing elit. Maxime odio voluptate reprehenderit dignissimos! Quibusdam libero velit iure deserunt? Quod, magnam.
                        </motion.p>
                        <motion.div className='flex flex-row items-center gap-4' variants={itemVariants}>
                            <motion.button className='flex flex-row items-center gap-2 px-6 py-3 text-white bg-black rounded-[4px]' variants={itemVariants}>
                                Get Started <img src="/assets/arrow.png" alt="Arrow" />
                            </motion.button>
                            <motion.button className='flex flex-row items-center gap-2 px-6 py-3' variants={itemVariants}>
                                <img src="/assets/video.png" alt="Video" /> Watch Video
                            </motion.button>
                        </motion.div>
                        <motion.img src="/assets/hero-img2.png" alt="Hero Image 2" width={500} className='-mt-[40px]' variants={itemVariants} />
                    </div>
                </motion.div>
                <motion.div className='w-[48%] -mt-12' variants={itemVariants}>
                    <motion.img src="/assets/hero-img.png" alt="Hero Image" width={550} variants={itemVariants} />
                </motion.div>
            </div>
        </motion.div>
    )
}

export default Hero
