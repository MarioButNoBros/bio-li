import { motion } from "framer-motion"
import Player from '@madzadev/audio-player'
import '@madzadev/audio-player/dist/index.css'
import { tracks } from "../constants"

function Testimonials() {
    return (
        <section className="mt-10 border-b border-neutral-800 min-h-[600px]">

            <motion.div className="text-center items-center my-20"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}>
                <div className="flex items-center justify-center mb-4">
                    <h2
                        className="text-3xl sm:text-5xl lg:text-6xl text-neutral-500 tracking-wide
                        bg-gradient-to-r from-[#6B8E23] to-[#9ACD32] text-transparent bg-clip-text"
                    >
                        Testimonio
                    </h2>
                </div>
                <p className="mt-20">
                    <Player
                        trackList={tracks}
                        includeTags={false}
                        includeSearch={false}
                        showPlaylist={false}
                        sortTracks={false}
                        autoPlayNextTrack={false}
                    />
                </p>
            </motion.div>
        </section>
    )
}

export { Testimonials }