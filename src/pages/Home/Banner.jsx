import { motion } from "motion/react"
import teamImgOne from "../../assets/team/team-1.jpg"
import teamImgTwo from "../../assets/team/team-2.jpg"
import teamImgThree from "../../assets/team/team-3.jpg"

const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="flex-1">
                    <motion.img
                        src={teamImgOne}
                        animate={{y:[0, 50, 0]}}
                        transition={{duration: 10, repeat: Infinity}}
                        className="max-w-sm rounded-3xl shadow-2xl" />
                         <motion.img
                        src={teamImgTwo}
                        animate={{x:[0, 50, 0]}}
                        transition={{duration: 10, delay: 1, repeat: Infinity}}
                        className="max-w-sm rounded-3xl mt-10 shadow-2xl" />
                </div>
                <div className='flex-1'>
                    <motion.h1
                        animate={{ x: 50 }}
                        transition={{ duration: 1, delay: 1, ease: "linear", repeat: Infinity }}
                        className="text-5xl font-bold"
                    >Latest   
                    <motion.span 
                    animate={{color: ['#ff6e33','#00bdff']}}
                    transition={{duration: 1.5, repeat: Infinity}}
                    > Job </motion.span> 
                    for You!</motion.h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;