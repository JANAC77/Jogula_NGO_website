import React from "react";
import image1 from "../../assets/Images/Gallery/image1.jpg";
import image2 from "../../assets/Images/Gallery/image2.jpg";
import image3 from "../../assets/Images/Gallery/image3.jpg";
import image4 from "../../assets/Images/Gallery/image4.jpg";
import image5 from "../../assets/Images/Gallery/image5.jpg";
import image6 from "../../assets/Images/Gallery/image6.jpg";
import image7 from "../../assets/Images/Gallery/image7.jpg";
import image8 from "../../assets/Images/Gallery/image8.jpg";
import image9 from "../../assets/Images/Gallery/image13.jpg";
import image10 from "../../assets/Images/Gallery/image14.png";
import image11 from "../../assets/Images/Gallery/image15.jpg";
import image12 from "../../assets/Images/Gallery/image16.webp";
import image13 from "../../assets/Images/Gallery/image17.jpg";
import image14 from "../../assets/Images/Gallery/image14.jpeg";
import image18 from "../../assets/Images/Gallery/image18.jpeg";
import image19 from "../../assets/Images/Gallery/image19.jpeg";
import image20 from "../../assets/Images/Gallery/image20.jpeg";
import image21 from "../../assets/Images/Gallery/image21.jpeg";
import image22 from "../../assets/Images/Gallery/image22.jpeg";
import image23 from "../../assets/Images/Gallery/image23.jpeg";
import image24 from "../../assets/Images/Gallery/image24.jpeg";
import image25 from "../../assets/Images/Gallery/image25.jpeg";
import image26 from "../../assets/Images/Gallery/image26.jpeg";
import image27 from "../../assets/Images/Gallery/image27.jpeg";
import image28 from "../../assets/Images/Gallery/image28.jpeg";
import image29 from "../../assets/Images/Gallery/image29.jpeg";
import image30 from "../../assets/Images/Gallery/image30.jpeg";
import image31 from "../../assets/Images/Gallery/image31.jpeg";
import image32 from "../../assets/Images/Gallery/image32.jpeg";
import image33 from "../../assets/Images/Gallery/image33.jpeg";
import image34 from "../../assets/Images/Gallery/image34.jpeg";
import image35 from "../../assets/Images/Gallery/image39.jpeg";
import image36 from "../../assets/Images/Gallery/image35.jpeg";
import image37 from "../../assets/Images/Gallery/image36.jpeg";
import image38 from "../../assets/Images/Gallery/image37.jpeg";
import image39 from "../../assets/Images/Gallery/image39.jpeg";
import image40 from "../../assets/Images/Gallery/image40.png";
import image41 from "../../assets/Images/Gallery/image41.png";
import image43 from "../../assets/Images/Gallery/image43.png";
import image44 from "../../assets/Images/Gallery/image44.png";
import image45 from "../../assets/Images/Gallery/image45.png";
import image46 from "../../assets/Images/Gallery/image46.png";
import image47 from "../../assets/Images/Gallery/image47.png";
import image48 from "../../assets/Images/Gallery/image48.jpg";
import image49 from "../../assets/Images/Gallery/image49.jpg";
import image50 from "../../assets/Images/Gallery/image50.jpg";
import image51 from "../../assets/Images/Gallery/image51.jpg";
import image52 from "../../assets/Images/Gallery/image52.jpg";
import image53 from "../../assets/Images/Gallery/image53.jpg";
import image54 from "../../assets/Images/Gallery/image54.jpg";
import image55 from "../../assets/Images/Gallery/image55.jpg";
import image56 from "../../assets/Images/Gallery/image56.jpg";
import image57 from "../../assets/Images/Gallery/image57.jpg";
import image58 from "../../assets/Images/Gallery/image58.jpg";
import image59 from "../../assets/Images/Gallery/image59.jpg";
import image60 from "../../assets/Images/Gallery/image60.jpg";
import image61 from "../../assets/Images/Gallery/image61.jpg";
import image62 from "../../assets/Images/Gallery/image62.jpg";
import image63 from "../../assets/Images/Gallery/image63.jpg";
import image100 from "../../assets/Images/Gallery/image100.jpeg";
import image101 from "../../assets/Images/Gallery/image101.jpeg";
import image102 from "../../assets/Images/Gallery/image102.jpeg";
import image103 from "../../assets/Images/Gallery/image103.jpeg";
import image104 from "../../assets/Images/Gallery/image104.jpeg";
import image105 from "../../assets/Images/Gallery/image105.jpeg";
import image106 from "../../assets/Images/Gallery/image106.jpeg";
import image107 from "../../assets/Images/Gallery/image107.jpeg";
import image108 from "../../assets/Images/Gallery/image108.jpeg";
import image109 from "../../assets/Images/Gallery/image109.jpeg";
import image110 from "../../assets/Images/Gallery/image110.jpeg";
import image111 from "../../assets/Images/Gallery/image111.jpeg";
import image112 from "../../assets/Images/Gallery/image112.jpeg";
import image113 from "../../assets/Images/Gallery/image113.jpeg";
import image114 from "../../assets/Images/Gallery/image114.jpeg";
import image115 from "../../assets/Images/Gallery/image115.jpeg";
import image116 from "../../assets/Images/Gallery/image116.jpeg";
import image117 from "../../assets/Images/Gallery/image117.jpeg";
import image118 from "../../assets/Images/Gallery/image118.jpeg";
import image119 from "../../assets/Images/Gallery/image119.jpeg";
import image120 from "../../assets/Images/Gallery/image120.jpeg";
import image121 from "../../assets/Images/Gallery/image121.jpeg";
import image122 from "../../assets/Images/Gallery/image122.jpeg";
import image123 from "../../assets/Images/Gallery/image123.jpeg";
import image124 from "../../assets/Images/Gallery/image124.jpeg";
import image125 from "../../assets/Images/Gallery/image125.jpeg";
import image126 from "../../assets/Images/Gallery/image126.jpeg";
import image127 from "../../assets/Images/Gallery/image127.jpeg";
import image128 from "../../assets/Images/Gallery/image128.jpeg";
import image129 from "../../assets/Images/Gallery/image129.jpeg";
import image130 from "../../assets/Images/Gallery/image130.jpeg";
import image131 from "../../assets/Images/Gallery/image131.jpeg";

import "tailwindcss/tailwind.css"; 
import { Link } from "react-router-dom";
import AnimatedImage from "../common/AnimatedImage";
import { StaggerContainer, StaggerItem, SlideUp } from "../common/AnimationWrappers";

const Gallery = () => {
  const images = [
    { src: image1, alt: "Gallery 1" },
    { src: image2, alt: "Gallery 2" },
    { src: image3, alt: "Gallery 3" },
    { src: image4, alt: "Gallery 4" },
    { src: image5, alt: "Gallery 5" },
    { src: image6, alt: "Gallery 6" },
    { src: image7, alt: "Gallery 7" },
    { src: image8, alt: "Gallery 8" },
    { src: image9, alt: "Gallery 9" },
    { src: image10, alt: "Gallery 10" },
    { src: image11, alt: "Gallery 11" },
    { src: image12, alt: "Gallery 12" },
    { src: image13, alt: "Gallery 13" },
    { src: image14, alt: "Gallery 14" },
    { src: image18, alt: "Gallery 15" },
    { src: image19, alt: "Gallery 16" },
    { src: image20, alt: "Gallery 17" },
    { src: image21, alt: "Gallery 18" },
    { src: image22, alt: "Gallery 19" },
    { src: image23, alt: "Gallery 20" },
    { src: image24, alt: "Gallery 21" },
    { src: image25, alt: "Gallery 22" },
    { src: image26, alt: "Gallery 23" },
    { src: image27, alt: "Gallery 24" },
    { src: image28, alt: "Gallery 25" },
    { src: image29, alt: "Gallery 26" },
    { src: image30, alt: "Gallery 27" },
    { src: image31, alt: "Gallery 28" },
    { src: image32, alt: "Gallery 29" },
    { src: image33, alt: "Gallery 30" },
    { src: image34, alt: "Gallery 31" },
    { src: image35, alt: "Gallery 32" },
    { src: image36, alt: "Gallery 33" },
    { src: image37, alt: "Gallery 34" },
    { src: image38, alt: "Gallery 35" },
    { src: image39, alt: "Gallery 36" },
    { src: image40, alt: "Gallery 37" },
    { src: image41, alt: "Gallery 38" },
    { src: image43, alt: "Gallery 39" },
    { src: image44, alt: "Gallery 40" },
    { src: image45, alt: "Gallery 41" },
    { src: image46, alt: "Gallery 42" },
    { src: image47, alt: "Gallery 43" },
    { src: image48, alt: "Gallery 44" },
    { src: image49, alt: "Gallery 45" },
    { src: image50, alt: "Gallery 46" },
    { src: image51, alt: "Gallery 47" },
    { src: image52, alt: "Gallery 48" },
    { src: image53, alt: "Gallery 49" },
    { src: image54, alt: "Gallery 50" },
    { src: image55, alt: "Gallery 51" },
    { src: image56, alt: "Gallery 52" },
    { src: image57, alt: "Gallery 53" },
    { src: image58, alt: "Gallery 54" },
    { src: image59, alt: "Gallery 55" },
    { src: image60, alt: "Gallery 56" },
    { src: image61, alt: "Gallery 57" },
    { src: image62, alt: "Gallery 58" },
    { src: image63, alt: "Gallery 59" },
    { src: image100, alt: "Gallery 100" },
    { src: image101, alt: "Gallery 101" },
    { src: image102, alt: "Gallery 102" },
    { src: image103, alt: "Gallery 103" },
    { src: image104, alt: "Gallery 104" },
    { src: image105, alt: "Gallery 105" },
    { src: image106, alt: "Gallery 106" },
    { src: image107, alt: "Gallery 107" },
    { src: image108, alt: "Gallery 108" },
    { src: image109, alt: "Gallery 109" },
    { src: image110, alt: "Gallery 110" },
    { src: image111, alt: "Gallery 111" },
    { src: image112, alt: "Gallery 112" },
    { src: image113, alt: "Gallery 113" },
    { src: image114, alt: "Gallery 114" },
    { src: image115, alt: "Gallery 115" },
    { src: image116, alt: "Gallery 116" },
    { src: image117, alt: "Gallery 117" },
    { src: image118, alt: "Gallery 118" },
    { src: image119, alt: "Gallery 119" },
    { src: image120, alt: "Gallery 120" },
    { src: image121, alt: "Gallery 121" },
    { src: image122, alt: "Gallery 122" },
    { src: image123, alt: "Gallery 123" },
    { src: image124, alt: "Gallery 124" },
    { src: image125, alt: "Gallery 125" },
    { src: image126, alt: "Gallery 126" },
    { src: image127, alt: "Gallery 127" },
    { src: image128, alt: "Gallery 128" },
    { src: image129, alt: "Gallery 129" },
    { src: image130, alt: "Gallery 130" },
    { src: image131, alt: "Gallery 131" },
  ];

  return (
    <div className="container mx-auto p-4">
      <SlideUp className="text-center mb-8">
        <h1 className="text-3xl font-bold">IMAGE GALLERY</h1>
      </SlideUp>
      <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" staggerDelay={0.05}>
        {images.map((image, index) => (
          <StaggerItem key={index} className="gallery-item h-64 overflow-hidden rounded-lg shadow-md" yOffset={20}>
            <AnimatedImage
              src={image.src}
              alt={image.alt}
              className="w-full h-64 object-cover transform transition-transform duration-500 hover:scale-110"
              animationType="fade"
            />
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  );
};

export default Gallery;
