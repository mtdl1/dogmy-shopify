'use client'

import Image from "next/image";
import Link from "next/link";
import { useCallback } from 'react';

import useEmblaCarousel from 'embla-carousel-react';

import { ArrowLongLeftIcon, ArrowLongRightIcon } from '@heroicons/react/24/outline';

export default function Banner() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <div className="embla relative">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          <div className="embla__slide">
            <Link href="/search/todos-os-produtos">
              <Image src="/banner-principal/banner-1.jpg" alt="Banner" className='hidden md:block' width={2720} height={1275} />
              <Image src="/banner-principal/banner-mobile-1.jpg" alt="Banner" className='block md:hidden' width={2720} height={1275} />
            </Link>
          </div>
          <div className="embla__slide">
            <Link href="/search/todos-os-produtos">
              <Image src="/banner-principal/banner-2.jpg" alt="Banner" className='hidden md:block' width={2720} height={1275} />
              <Image src="/banner-principal/banner-mobile-2.jpg" alt="Banner" className='block md:hidden' width={2720} height={1275} />
            </Link>
          </div>
          <div className="embla__slide">
            <Link href="/search/todos-os-produtos">
              <Image src="/banner-principal/banner-3.jpg" alt="Banner" className='hidden md:block' width={2720} height={1275} />
              <Image src="/banner-principal/banner-mobile-3.jpg" alt="Banner" className='block md:hidden' width={2720} height={1275} />
            </Link>
          </div>
        </div>
      </div>
      <div className="prev absolute" onClick={scrollPrev}>
        <ArrowLongLeftIcon className="h-6 w-6" />
      </div>
      <div className="next absolute" onClick={scrollNext}>
        <ArrowLongRightIcon className="h-6 w-6" />
      </div>
    </div>
  );
}