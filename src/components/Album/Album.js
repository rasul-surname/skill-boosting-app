import React from "react";

import { Box, Heading, Center, Image } from '@chakra-ui/react'

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Navigation } from "swiper";

const Album = () => {

    return (
        <Box>
            <Center>
                <Heading>
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
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide style={{border: '1px solid #ccc', borderRadius: '8px', overflow:"hidden", height: '250px', width: '300px'}}>
                    <Image
                        src="https://img1.goodfon.ru/wallpaper/nbig/4/5f/priroda-les-gory-ozero.jpg"
                        objectFit="cover"
                        width="100%"
                        height="100%"
                    />
                </SwiperSlide>
                <SwiperSlide style={{border: '1px solid #ccc', borderRadius: '8px', overflow:"hidden", height: '250px', width: '300px'}}>
                    <Image
                        src="https://bipbap.ru/wp-content/uploads/2017/04/priroda_kartinki_foto_03.jpg"
                        objectFit="cover"
                        width="100%"
                        height="100%"
                    />
                </SwiperSlide>
                <SwiperSlide style={{border: '1px solid #ccc', borderRadius: '8px', overflow:"hidden", height: '250px', width: '300px'}}>
                    <Image
                        src="https://n1s2.hsmedia.ru/60/b5/cc/60b5cc5266a98b966e2f35c57ed388c8/690x380_0x0a330c2a_12567029551616070388.jpeg"
                        objectFit="cover"
                        width="100%"
                        height="100%"
                    />
                </SwiperSlide>
                <SwiperSlide style={{border: '1px solid #ccc', borderRadius: '8px', overflow:"hidden", height: '250px', width: '300px'}}>
                    <Image
                        src="https://icocnews.ru/wp-content/uploads/2015/09/priroda.jpg"
                        objectFit="cover"
                        width="100%"
                        height="100%"
                    />
                </SwiperSlide>
                <SwiperSlide style={{border: '1px solid #ccc', borderRadius: '8px', overflow:"hidden", height: '250px', width: '300px'}}>
                    <Image
                        src="https://img1.goodfon.ru/wallpaper/nbig/4/5f/priroda-les-gory-ozero.jpg"
                        objectFit="cover"
                        width="100%"
                        height="100%"
                    />
                </SwiperSlide>
                <SwiperSlide style={{border: '1px solid #ccc', borderRadius: '8px', overflow:"hidden", height: '250px', width: '300px'}}>
                    <Image
                        src="https://bipbap.ru/wp-content/uploads/2017/04/priroda_kartinki_foto_03.jpg"
                        objectFit="cover"
                        width="100%"
                        height="100%"
                    />
                </SwiperSlide>
                <SwiperSlide style={{border: '1px solid #ccc', borderRadius: '8px', overflow:"hidden", height: '250px', width: '300px'}}>
                    <Image
                        src="https://n1s2.hsmedia.ru/60/b5/cc/60b5cc5266a98b966e2f35c57ed388c8/690x380_0x0a330c2a_12567029551616070388.jpeg"
                        objectFit="cover"
                        width="100%"
                        height="100%"
                    />
                </SwiperSlide>
                <SwiperSlide style={{border: '1px solid #ccc', borderRadius: '8px', overflow:"hidden", height: '250px', width: '300px'}}>
                    <Image
                        src="https://icocnews.ru/wp-content/uploads/2015/09/priroda.jpg"
                        objectFit="cover"
                        width="100%"
                        height="100%"
                    />
                </SwiperSlide>
            </Swiper>
        </Box>
    )
}

export default Album;