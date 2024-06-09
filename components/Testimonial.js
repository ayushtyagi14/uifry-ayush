import React from 'react'
import { motion, useInView } from 'framer-motion'

const Testimonial = () => {
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
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 }
    }

    const imageVariants = {
        hidden: { opacity: 0, y: 100 },
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
            <motion.div className={`leading-[40px] mb-4 flex flex-col items-center justify-center text-center`} variants={textVariants}>
                <span className='text-gray-800 font-medium'>TESTIMONIAL</span>
                <h1 className='text-[48px] font-bold'>Why Our Users <br /> Say About Us?</h1>
            </motion.div>
            <div className='w-full flex flex-row items-center gap-4 mt-16'>
                <motion.div className='w-[50%] relative' variants={imageVariants}>
                    <motion.img src="/assets/review-backdrop.png" alt="Backdrop" className='ml-4' variants={imageVariants} />
                    <motion.img src="/assets/reviews-img.png" alt="Features" className='-mt-[530px]' variants={imageVariants} />
                </motion.div>
                <motion.div className='w-[50%] flex flex-col items-start gap-6 -mt-[80px]' variants={textVariants}>
                    <motion.h1 className='text-[38px] font-bold leading-none' variants={textVariants}>
                        The Best Financial Accounting App Ever!
                    </motion.h1>
                    <motion.p className='text-gray-400 font-medium w-[70%]' variants={textVariants}>
                        &quot;Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.&quot;
                    </motion.p>
                    <motion.img src="/assets/man1.png" alt="Man Testimonial" width={40} variants={imageVariants} />
                    <motion.span className='text-[18px] font-bold' variants={textVariants}>Nick Jonas</motion.span>
                </motion.div>
            </div>
        </motion.div>
    )
}

export default Testimonial
