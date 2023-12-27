import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {ReactNode} from "react";

const RESPONSIVE_SIZES = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 512, min: 0 },
    items: 1
  }
};

interface Props {
  children: ReactNode[];
}

export function ItemCarousel({ children }: Props) {
  return (
    <Carousel responsive={RESPONSIVE_SIZES} renderButtonGroupOutside>
      {children}
    </Carousel>
  );
}