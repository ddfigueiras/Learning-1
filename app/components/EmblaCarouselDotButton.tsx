import React, { ComponentPropsWithRef, useCallback, useEffect, useState } from 'react';
import { EmblaCarouselType } from 'embla-carousel';

// botões de ponto
export const useDotButton = (
  emblaApi: EmblaCarouselType | undefined,
  onButtonClick?: (emblaApi: EmblaCarouselType) => void
) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  // clique
  const handleDotButtonClick = useCallback(
    (index: number) => {
      if (emblaApi) {
        emblaApi.scrollTo(index);
        onButtonClick?.(emblaApi);
      }
    },
    [emblaApi, onButtonClick]
  );

  // pontos de pequenos
  const initialize = useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  // Atualiza o índice
  const updateSelectedIndex = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    initialize(emblaApi);
    updateSelectedIndex(emblaApi);

    emblaApi.on('reInit', initialize).on('reInit', updateSelectedIndex).on('select', updateSelectedIndex);

    return () => {
      emblaApi.off('reInit', initialize).off('reInit', updateSelectedIndex).off('select', updateSelectedIndex);
    };
  }, [emblaApi, initialize, updateSelectedIndex]);

  return {
    selectedIndex,
    scrollSnaps,
    onDotButtonClick: handleDotButtonClick
  };
};

//  botão de ponto
export const DotButton: React.FC<ComponentPropsWithRef<'button'>> = (props) => (
  <button type="button" {...props} />
);