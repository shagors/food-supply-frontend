import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import SectionTitle from "@/components/shared/SectionTitle";
import { motion } from "framer-motion";

const Gallery = () => {
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  return (
    <motion.div
      variants={fadeIn}
      initial="hidden"
      animate="visible"
      transition={{ duration: 4 }}
      className="mb-20"
    >
      <SectionTitle heading="Gallery" />
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-24"
      >
        <SwiperSlide>
          <img
            src="https://images.unsplash.com/photo-1648141499246-97a0eb56c2fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGVnZyUyMGZhcm18ZW58MHx8MHx8fDA%3D"
            alt="slider"
            className="h-[380px]"
          />
          <h3 className="text-4xl uppercase text-center -mt-16 text-white">
            Eggs Farm
          </h3>
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2Fycm90fGVufDB8fDB8fHww"
            alt="slider"
            className="h-[380px]"
          />
          <h3 className="text-4xl uppercase text-center -mt-16 text-white">
            Carrot
          </h3>
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="https://images.unsplash.com/photo-1522120378538-41fb9564bc75?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y29mZmVlJTIwc2VlZHxlbnwwfHwwfHx8MA%3D%3D"
            alt="slider"
            className="h-[380px]"
          />
          <h3 className="text-4xl uppercase text-center -mt-16 text-white">
            Coffee
          </h3>
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="https://plus.unsplash.com/premium_photo-1664476943513-6344ab8edbe6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fG1hbmdvfGVufDB8fDB8fHww"
            alt="slider"
            className="h-[380px]"
          />
          <h3 className="text-4xl uppercase text-center -mt-16 text-white">
            Mango
          </h3>
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="https://images.unsplash.com/photo-1596626233681-39f5eb87d501?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8amFja2ZydWl0fGVufDB8fDB8fHww"
            alt="slider"
            className="h-[380px]"
          />
          <h3 className="text-4xl uppercase text-center -mt-16 text-white">
            jackfruit
          </h3>
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="https://images.unsplash.com/photo-1588165171080-c89acfa5ee83?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3RyYXdiZXJyeXxlbnwwfHwwfHx8MA%3D%3D"
            alt="slider"
            className="h-[380px]"
          />
          <h3 className="text-4xl uppercase text-center -mt-16 text-white">
            strawberry
          </h3>
        </SwiperSlide>
      </Swiper>
    </motion.div>
  );
};

export default Gallery;
