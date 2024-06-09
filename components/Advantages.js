import React from 'react'
import AdvantagesData from '@/data/advantages'
import { motion, useInView } from 'framer-motion'

const Advantages = () => {
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
        hidden: { opacity: 0, scale: 0.8, rotate: 10 },
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
            {AdvantagesData.map((item) => (
                <motion.div
                    className={`w-full flex ${item.id === 1 ? 'flex-row ' : 'flex-row-reverse'} items-center gap-4`}
                    key={item.id}
                    variants={itemVariants}
                >
                    <motion.div className='w-[52%] flex flex-col items-start -mt-[200px]' variants={itemVariants}>
                        <div className={`leading-[40px] mb-4 ${item.id === 1 ? 'block' : 'hidden'}`}>
                            <motion.span className='text-[#FF5555] font-medium' variants={itemVariants}>
                                ADVANTAGES
                            </motion.span>
                            <motion.h1 className='text-[48px] font-bold' variants={itemVariants}>
                                Why Choose Uifry?
                            </motion.h1>
                        </div>
                        <motion.div className='flex flex-col items-start gap-4' id={item.id} variants={itemVariants}>
                            <div className='flex flex-row items-center gap-2'>
                                <img src={item.iconUrl} alt={item.advantageName} />
                                <h1 className='text-[20px] font-bold'>{item.advantageName}</h1>
                            </div>
                            <p className='text-gray-700'>{item.description}</p>
                        </motion.div>
                    </motion.div>
                    <motion.div className='w-[48%] relative' variants={itemVariants}>
                        <motion.img src="/assets/backdrop.png" alt="Backdrop" className='-mt-[50px] ml-10' variants={itemVariants} />
                        <motion.img src={item.imageUrl} alt={item.advantageName} className='-mt-[530px]' variants={itemVariants} />
                    </motion.div>
                </motion.div>
            ))}
        </motion.div>
    )
}

export default Advantages
