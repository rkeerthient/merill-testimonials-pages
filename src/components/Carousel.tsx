import * as React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Image } from "@yext/pages/components";

const Carousel = (props: any) => {
  const { data } = props;
  // console.log(JSON.stringify(data));

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: props.slidesToShow,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="m-8 ">
        <Slider {...settings}>
          {data.c_specialtyList &&
            data.c_specialtyList.map((item: any, index: any) => (
              <div key={index} className="border flex flex-row p-2">
                <div
                  className="mb-4 flex text-center items-center justify-center"
                  style={{ height: "200px", color: "#0052c2" }}
                >
                  <Image image={item.image} className="h-full w-full" />
                </div>
                <div className="px-6" style={{ height: "280px" }}>
                  <div className=" text-xl font-bold">{item.name}</div>
                  <div className="mt-2 text-lg font-light">
                    <div>{item.description}</div>
                  </div>
                </div>
              </div>
            ))}
        </Slider>
      </div>
    </>
  );
};

export default Carousel;
