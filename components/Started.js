import React from 'react'
import { motion, useInView } from 'framer-motion'

const Started = () => {
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

    const textVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 }
    }

    const buttonVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 }
    }

    const imageVariants = {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0 }
    }

    return (
        <motion.div
            className='mt-28 mb-20 mx-28 2xl:mx-0 bg-black rounded-[8px]'
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
        >
            <div className='flex flex-row items-center w-full h-full justify-between'>
                <motion.div
                    className='text-white flex flex-col items-start gap-3 ml-20'
                    variants={textVariants}
                >
                    <motion.h1 className='text-[40px] font-bold' variants={textVariants}>
                        Ready To Get Started?
                    </motion.h1>
                    <motion.p variants={textVariants}>
                        Risus habitant leo egestas mauris diam eget morbi tempus vulputate.
                    </motion.p>
                    <motion.button
                        className='flex flex-row items-center gap-2 px-6 py-3 text-black font-medium bg-white rounded-[4px]'
                        variants={buttonVariants}
                    >
                        Download App <img src="/assets/apple-logo.png" alt="Apple Logo" width={20} />
                    </motion.button>
                </motion.div>
                <motion.img
                    src="/assets/started-img.png"
                    alt="Get Started"
                    variants={imageVariants}
                />
            </div>
        </motion.div>
    )
}

export default Started
