// components/EmblaCarousel.tsx
"use client";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { PrevButton, NextButton } from "./EmblaCarouselArrowButtons";

type SlideType = {
  src: string;
  title: string;
  description: string;
};

const slides: SlideType[] = [
    {
      src: "/images/1200px-Castelo_da_Vidigueira_-_Portugal_(3654902030).png",
      title: "Apoio extraordinário à Associação Humanitária dos Bombeiros",
      description: "SABER MAIS",
    },
    {
      src: "/images/7212563.png", 
      title: "Outro Título",
      description: "MAIS INFORMAÇÕES",
    },
  ];

const EmblaCarousel: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel();

  return (
    <div className="embla">
      <div className="emblaViewport" ref={emblaRef}>
        <div className="emblaContainer">
          {slides.map((slide, index) => (
            <div className="emblaSlide" key={index}>
              <div className="emblaSlideInner">
                <Image
                  className="emblaSlideImg"
                  src={slide.src}
                  alt={slide.title}
                  width={800}
                  height={500}
                  layout="responsive"
                  objectFit="cover"
                />
                <div className="emblaSlideText">
                  <h2>{slide.title}</h2>
                  <p>{slide.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="emblaButtons">
        <PrevButton onClick={() => emblaApi && emblaApi.scrollPrev()} />
        <NextButton onClick={() => emblaApi && emblaApi.scrollNext()} />
      </div>
    </div>
  );
};

export default EmblaCarousel;
