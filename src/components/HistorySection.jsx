import { motion } from "framer-motion";
import logofondo from "../assets/logo-fondo.jpeg";
import { BookOpenText } from 'lucide-react';
const historia = "Bio-li nació de un sueño familiar en el Valle del Cauca, una región rica en caña de azúcar. Observamos cómo el bagazo de caña, a menudo desperdiciado o quemado, podía tener un segundo uso valioso. Inspirados por la biodiversidad y la naturaleza, descubrimos que este material podía transformarse en hilo para crear prendas de vestir.\nEl nombre Bio-li representa nuestro compromiso con la sostenibilidad. Creamos ropa ecológica de alta calidad que reduce el desperdicio y ofrece una alternativa duradera a las prendas convencionales. Diseñada para quienes valoran la calidad y el cuidado del planeta, nuestra ropa es resistente, cómoda y fácil de mantener. Únete a nosotros en la revolución de la moda sostenible y ayuda a proteger la naturaleza.";

function HistorySection() {
    const paragraphs = historia.split('\n').map((paragraph, index) => (
        <p key={index} className="mb-3">
            {paragraph}
        </p>
    ));
    return (
        <section className="items-center mb-20" id="history">
            <motion.div className="flex items-center justify-center mt-40 mb-20"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}>
                <div className="h-12 w-12 p-3 text-[#708871]">
                    <BookOpenText />
                </div>
                <h2
                    className="text-3xl sm:text-5xl lg:text-6xl text-neutral-500 tracking-wide
                        bg-gradient-to-r from-[#6B8E23] to-[#9ACD32] text-transparent bg-clip-text">
                    Nuestra Historia
                </h2>
            </motion.div>
            <div className="flex flex-wrap justify-center items-center">
                <motion.div className="w-full sm:w-1/2 lg:w-1/3 p-4"
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <img src={logofondo} alt="Image" className="rounded-lg w-full h-auto object-cover" />
                </motion.div>
                <motion.div className="items-center justify-center w-full sm:w-1/2 lg:w-2/3 p-4 text-center sm:text-left"
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <p className="text-xl text-gray-700 leading-relaxed">
                        {paragraphs}
                    </p>
                </motion.div>
            </div>
        </section>
    );
}

export { HistorySection }