import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";
import { motion } from "framer-motion";

function InitialSection() {
    return (
        <section className="flex flex-col items-center mt-4 lg:mt-8" id="init">
            <motion.div className="flex flex-col items-center"
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}>
                <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center text-neutral-500 tracking-wide">
                    BIO-LI
                    <br />
                    Hecho para los amantes de la
                    <br />
                    <span className="bg-gradient-to-r from-[#6B8E23] to-[#9ACD32]
                text-transparent bg-clip-text">moda sostenible </span>
                </h1>
                <p className="mt-10 text-lg text-center text-neutral-500 max-w-3xl">
                    Somos una empresa dedicada a proteger el medio ambiente y mejorar los hogares colombianos mediante la fabricación de prendas de vestir ecológicas de alta calidad a partir de bagazo de caña.
                </p>
            </motion.div>
            <div className="flex flex-col sm:flex-row sm:justify-center sm:gap-4 mt-20">
                <motion.video autoPlay loop muted
                    controlsList="nodownload"
                    className="rounded-lg w-full sm:w-1/2 border border-[#9ACD32] shadow-[#708871] mx-2 my-4"
                    initial={{ opacity: 0, y: 50, scale: 0.5 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, ease: "easeInOut", delay: 0.3 }}
                >
                    <source src={video1} type="video/mp4" />
                    Your browser does not support the video tag.
                </motion.video>
                <motion.video autoPlay loop muted
                    controlsList="nodownload"
                    className="rounded-lg w-full sm:w-1/2 border border-[#9ACD32] shadow-[#708871] mx-2 my-4"
                    initial={{ opacity: 0, y: 50, scale: 0.5 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, ease: "easeInOut", delay: 0.3 }}
                >
                    <source src={video2} type="video/mp4" />
                    Your browser does not support the video tag.
                </motion.video>
            </div>
        </section>
    )
}

export { InitialSection }