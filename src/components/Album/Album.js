import React from "react";

import {motion} from "framer-motion";

import {Box, Heading, Center, Image} from '@chakra-ui/react'

import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import {Pagination} from "swiper";

const images = [
    "https://bipbap.ru/wp-content/uploads/2017/04/priroda_kartinki_foto_03.jpg",
    "https://n1s2.hsmedia.ru/60/b5/cc/60b5cc5266a98b966e2f35c57ed388c8/690x380_0x0a330c2a_12567029551616070388.jpeg",
    "https://icocnews.ru/wp-content/uploads/2015/09/priroda.jpg",
    "https://img1.goodfon.ru/wallpaper/nbig/4/5f/priroda-les-gory-ozero.jpg",
    "https://bipbap.ru/wp-content/uploads/2017/04/priroda_kartinki_foto_03.jpg",
    "https://n1s2.hsmedia.ru/60/b5/cc/60b5cc5266a98b966e2f35c57ed388c8/690x380_0x0a330c2a_12567029551616070388.jpeg",
    "https://icocnews.ru/wp-content/uploads/2015/09/priroda.jpg"
]

const Album = () => {

    return (
        <Box>
            <Center>
                <Heading size="md" as={motion.div} animate={{scale: 1.5}} transition={{duration: 3}}>
                    Командные фоточки
                </Heading>
            </Center>
            <Swiper
                style={{height: "300px", marginTop: '30px'}}
                slidesPerView="auto"
                spaceBetween={25}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {images.map(img => {
                    return (
                        <SwiperSlide style={{
                            border: '1px solid #ccc',
                            borderRadius: '8px',
                            overflow: "hidden",
                            height: '250px',
                            width: '300px'
                        }}>
                            <Image
                                as={motion.img}
                                whileHover={{scale: 1.1}}
                                src={img}
                                objectFit="cover"
                                width="100%"
                                height="100%"
                            />
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </Box>
    )
}

export default Album;