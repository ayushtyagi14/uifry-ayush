import FaqData from '@/data/faq'
import React from 'react'
import { motion, useInView } from 'framer-motion'

const Faq = () => {
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
        hidden: { opacity: 0, scale: 0.8, rotate: -10 },
        visible: { opacity: 1, scale: 1, rotate: 0 }
    }

    return (
        <motion.div
            className='my-12 mx-28 2xl:mx-0'
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
        >
            <div className='leading-[40px] w-1/2 ml-4 mb-6'>
                <motion.span className='text-[#FF5555] font-medium' variants={itemVariants}>
                    FAQ
                </motion.span>
                <motion.h1 className='text-[48px] font-bold' variants={itemVariants}>
                    Frequently Asked Questions
                </motion.h1>
            </div>
            <div className='grid grid-cols-2 gap-4'>
                {FaqData.map((item) => (
                    <motion.div
                        key={item.id}
                        className={`
                            ${[1, 4, 5].includes(item.id) ? 'bg-[#FF5555] text-white' : 'bg-white text-black'} 
                            m-2 rounded-[4px] p-4 flex flex-col gap-2
                        `}
                        variants={itemVariants}
                    >
                        <h1 className='text-[28px] font-semibold leading-none'>{item.faqName}</h1>
                        <p>{item.faqAnswer}</p>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    )
}

export default Faq
