import React from "react";
import Image from "next/image";
import SlickSlider from "react-slick";

const URLS = [
  "001",
  "002",
  "003",
  "004",
  "005",
  "006",
  "007",
  "008",
  "009",
  "010",
  "011",
  "012",
  "013",
  "014",
  "015",
  "016",
  "017",
  "018",
  "019",
  "020",
  "021",
  "022",
  "023",
  "024",
  "025",
  "026",
  "027",
  "028",
  "029",
  "030",
  "031",
  "032",
  "033",
  "034",
  "035",
  "036",
  "037",
  "038",
  "039",
  "040",
  "041",
  "042",
  "043",
];
const BG_COLORS = [
  "#daff5c",
  "#605cff",
  "#fff700",
  "#00a1ff",
  "#af0000",
  "#5cff96",
  "#605cff",
  "#fff700",
  "#605cff",
  "#5e5b0b",
  "#ff5c82",
  "#daff5c",
  "#5cff96",
];
const Slider = ({ afterChange }) => {
  const handleChange = (i) => afterChange(BG_COLORS[i]);
  return (
    <SlickSlider afterChange={handleChange} {...settings}>
      {URLS.map((number) => (
        <Image
          height="250px"
          width="250px"
          src={`/koala_${number}.png`}
          alt={`koala ${number}`}
          quality="70"
          key={number}
        />
      ))}
    </SlickSlider>
  );
};

export default Slider;

const settings = {
  slidesToShow: 3,
  centerMode: true,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
  infinite: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {},
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};
