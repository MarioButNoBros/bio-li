import { motion } from "framer-motion";
import { aboutUs } from "../constants"


function AboutUs() {
    return (
        <div className="relative my-20 ">
            <motion.h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20  bg-gradient-to-r from-[#6B8E23] to-[#9ACD32] text-transparent bg-clip-text"
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}>
                Nosotros
            </motion.h2>
            <div className="flex flex-wrap justify-center gap-16">
                {aboutUs.map((about, index) => (
                    <motion.div
                        key={index}
                        className="w-full sm:w-1/2 lg:w-1/2 xl:w-1/2 max-w-md flex flex-col items-center gap-12 transition-all duration-500 p-4 m-6 bg-white shadow-lg rounded-lg"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <div className="w-48 h-48 lg:w-56 lg:h-56">
                            <img src={about.image} alt={about.name} className="rounded-full h-full w-full object-cover mx-auto lg:mx-0" />
                        </div>
                        <div className="text-left lg:text-center lg:max-w-2xl flex-1">
                            <div className="mb-5 pb-5 border-b border-solid border-gray-300">
                                <h6 className="text-2xl text-neutral-600 font-semibold mb-2">{about.name}</h6>
                                <p className="text-md text-neutral-600">{about.profile}</p>
                            </div>
                            <p className="text-neutral-500 leading-relaxed mb-7 lg:mb-10 lg:mt-5">
                                {about.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export { AboutUs };