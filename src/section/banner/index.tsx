import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Autoplay } from "swiper/modules";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import DataList from "../../assets/data";
import { Box, Image, Text } from "@chakra-ui/react";
import theme from "../../theme";

const Banner: React.FC = () => {
  const { BannerList } = DataList;
  const { pxToVw } = theme;

  return (
    <Swiper
      spaceBetween={30}
      effect={"fade"}
      navigation={true}
      loop={true}
      speed={1000}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[EffectFade, Navigation, Autoplay]}
      className="banner"
    >
      {BannerList?.map((banner: any, index: number) => (
        <SwiperSlide key={index}>
          <Box
            position={"relative"}
            pt={"calc(220/390*100%)"}
            _before={{
              content: "''",
              position: "absolute",
              backgroundColor: "black",
              opacity: 0.4,
              zIndex: 10,
              width: "100%",
              height: "100%",
              top: 0,
              left: 0,
              bottom: 0,
            }}
          >
            <Image
              src={banner.url}
              alt={banner.alt}
              position={"absolute"}
              w={"full"}
              h={"full"}
              inset={"0"}
            />
            <Text
              fontSize={pxToVw(24)}
              position={"absolute"}
              top={"50%"}
              left={"50%"}
              transform={"translate(-50%, -50%)"}
              zIndex={"20"}
              color={"white"}
              display={"block"}
              w={"full"}
              textAlign={"center"}
              fontWeight={"medium"}
              p={`${pxToVw(20)} ${pxToVw(32)}`}
            >
              Welcome to ICD VIETNAM
            </Text>
          </Box>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Banner;
