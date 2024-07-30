import { motion } from "framer-motion"
import { myv } from "../constants"


function MissionAndVision() {
    return (
        <div className="relative mt-40 border-b border-neutral-800 min-h-[600px]">
            {myv.map((myv, index) => (
                <motion.div key={index} className="text-center flex flex-col items-center my-20"
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}>
                    <div className="flex items-center justify-center mb-4">
                        <div className="h-12 w-12 p-3 text-[#708871]">
                            {myv.icon}
                        </div>
                        <h2
                            className="text-3xl sm:text-5xl lg:text-6xl text-neutral-500 tracking-wide
                        bg-gradient-to-r from-[#6B8E23] to-[#9ACD32] text-transparent bg-clip-text"
                        >
                            {myv.label}
                        </h2>
                    </div>
                    <p className="text-xl m-8 text-center text-neutral-500">
                        {myv.description}
                    </p>
                </motion.div>
            ))}
        </div>


    )
}

export { MissionAndVision }