import React from 'react'
import FeaturesData from '@/data/features'
import { motion, useInView } from 'framer-motion'

const Features = () => {
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

    const imageVariants = {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0 }
    }

    const textVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: { opacity: 1, scale: 1 }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    }

    return (
        <motion.div
            className='mt-12 mb-40 2xl:mb-12 mx-28 2xl:mx-0'
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
        >
            <div className='w-full flex flex-row items-start gap-4'>
                <motion.div className='w-[48%] relative' variants={imageVariants}>
                    <motion.img src="/assets/backdrop.png" alt="Backdrop" className='mt-[70px] -ml-10' variants={imageVariants} />
                    <motion.img src="/assets/features-img.png" alt="Features" className='-mt-[530px]' variants={imageVariants} />
                </motion.div>
                <motion.div className='w-[52%] flex flex-col items-start' variants={textVariants}>
                    <div className='leading-[40px]'>
                        <motion.span className='text-[#FF5555] font-medium' variants={textVariants}>
                            FEATURES
                        </motion.span>
                        <motion.h1 className='text-[48px] font-bold' variants={textVariants}>
                            Uifry Premium
                        </motion.h1>
                    </div>
                    <div className='flex flex-col gap-6 mt-6'>
                        {FeaturesData.map((item) => (
                            <motion.div
                                className='flex flex-col items-start gap-4'
                                id={item.id}
                                key={item.id}
                                variants={itemVariants}
                            >
                                <div className='flex flex-row items-center gap-2'>
                                    <img src={item.iconUrl} alt={item.featureName} />
                                    <h1 className='text-[20px] font-bold'>{item.featureName}</h1>
                                </div>
                                <p className='text-gray-700'>{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </motion.div>
    )
}

export default Features
