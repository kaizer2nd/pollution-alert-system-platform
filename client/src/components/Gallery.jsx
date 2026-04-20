import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { motion, AnimatePresence } from "framer-motion";
import { galleryImages } from "../data/mockData";
import Reveal from "./Reveal";

const Gallery = () => {
  const [activeImage, setActiveImage] = useState(null);

  return (
    <div className="mx-auto max-w-6xl px-4">
      <Reveal>
        <div className="max-w-2xl">
          <h2 className="section-title">Awareness gallery</h2>
          <p className="section-subtitle mt-3">
            Visual stories and cleanup missions inspired by community action.
          </p>
        </div>
      </Reveal>

      <Reveal delay={0.1} className="mt-10">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 3500 }}
          pagination={{ clickable: true }}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
        >
          {galleryImages.map((image) => (
            <SwiperSlide key={image.url}>
              <button
                onClick={() => setActiveImage(image)}
                className="group relative h-72 w-full overflow-hidden rounded-3xl"
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent" />
                <div className="absolute bottom-4 left-4 text-left text-white">
                  <p className="text-lg font-semibold">{image.title}</p>
                  <p className="text-xs uppercase tracking-[0.3em] text-white/70">Awareness</p>
                </div>
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      </Reveal>

      <AnimatePresence>
        {activeImage && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveImage(null)}
          >
            <motion.div
              className="max-w-3xl overflow-hidden rounded-3xl bg-white"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              onClick={(event) => event.stopPropagation()}
            >
              <img src={activeImage.url} alt={activeImage.title} className="h-full w-full" />
              <div className="p-4">
                <p className="text-lg font-semibold text-slate-900">{activeImage.title}</p>
                <p className="text-sm text-slate-500">Community-driven awareness spotlight.</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
