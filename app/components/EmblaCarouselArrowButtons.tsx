import React, { ComponentPropsWithRef, useCallback, useEffect, useState } from 'react';
import { EmblaCarouselType } from 'embla-carousel';

// botões de navegação
export const usePrevNextButtons = (
  emblaApi: EmblaCarouselType | undefined,
  onButtonClick?: (emblaApi: EmblaCarouselType) => void
) => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  // botão anterior
  const handlePrevButtonClick = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollPrev();
      onButtonClick?.(emblaApi);
    }
  }, [emblaApi, onButtonClick]);

  // botão seguinte
  const handleNextButtonClick = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollNext();
      onButtonClick?.(emblaApi);
    }
  }, [emblaApi, onButtonClick]);

  // botões com base na rolagem
  const updateButtonStates = useCallback(() => {
    if (emblaApi) {
      setPrevBtnDisabled(!emblaApi.canScrollPrev());
      setNextBtnDisabled(!emblaApi.canScrollNext());
    }
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    updateButtonStates();
    emblaApi.on('reInit', updateButtonStates).on('select', updateButtonStates);

    return () => {
      emblaApi.off('reInit', updateButtonStates).off('select', updateButtonStates);
    };
  }, [emblaApi, updateButtonStates]);

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick: handlePrevButtonClick,
    onNextButtonClick: handleNextButtonClick,
  };
};

// botão anterior
export const PrevButton: React.FC<ComponentPropsWithRef<'button'>> = (props) => (
  <button
    className="embla__button embla__button--prev"
    type="button"
    {...props}
  >
    <svg className="embla__button__svg" viewBox="0 0 532 532">
      <path
        fill="currentColor"
        d="M355.66 11.354c13.793-13.805 36.208-13.805 50.001 0 13.785 13.804 13.785 36.238 0 50.034L201.22 266l204.442 204.61c13.785 13.805 13.785 36.239 0 50.044-13.793 13.796-36.208 13.796-50.002 0a5994246.277 5994246.277 0 0 0-229.332-229.454 35.065 35.065 0 0 1-10.326-25.126c0-9.2 3.393-18.26 10.326-25.2C172.192 194.973 332.731 34.31 355.66 11.354Z"
      />
    </svg>
    {props.children}
  </button>
);

// botão seguinte
export const NextButton: React.FC<ComponentPropsWithRef<'button'>> = (props) => (
  <button
    className="embla__button embla__button--next"
    type="button"
    {...props}
  >
    <svg className="embla__button__svg" viewBox="0 0 532 532">
      <path
        fill="currentColor"
        d="M176.34 520.646c-13.793 13.805-36.208 13.805-50.001 0-13.785-13.804-13.785-36.238 0-50.034L330.78 266 126.34 61.391c-13.785-13.805-13.785-36.239 0-50.044 13.793-13.796 36.208-13.796 50.002 0 22.928 22.947 206.395 206.507 229.332 229.454a35.065 35.065 0 0 1 10.326 25.126c0 9.2-3.393 18.26-10.326 25.2-45.865 45.901-206.404 206.564-229.332 229.52Z"
      />
    </svg>
    {props.children}
  </button>
);
