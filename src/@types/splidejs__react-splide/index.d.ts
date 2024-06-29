declare module '@splidejs/react-splide' {
    import { ComponentType, ReactNode } from 'react';
  
    export interface SplideProps {
      options?: Record<string, any>;
      hasTrack?: boolean;
      tag?: string;
      id?: string;
      className?: string;
      children?: ReactNode;
    }
  
    export interface SplideSlideProps {
      children?: ReactNode;
    }
  
    export const Splide: ComponentType<SplideProps>;
    export const SplideSlide: ComponentType<SplideSlideProps>;
  }
  