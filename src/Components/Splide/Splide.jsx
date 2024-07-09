import React from 'react';
import '@splidejs/react-splide/css';
import { Splide as SplideComponent, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';
import '@splidejs/react-splide/css/core';

const ImageSlider = () => {
  return (
    <div>
      <SplideComponent aria-label="My Favorite Images">
        <SplideSlide>
          <img className='ml-8' src="https://images.uzum.uz/cq2hk6b6eisq2rkegn50/main_page_banner.jpg" alt="Image 1" />
        </SplideSlide>
        <SplideSlide>
          <img className='ml-8' src="https://images.uzum.uz/cpv9gs36eisq2rkdu350/main_page_banner.jpg" alt="Image 2" />
        </SplideSlide>
        <SplideSlide>
          <img className='ml-8' src="https://images.uzum.uz/cq1uu8j6eisq2rked9vg/main_page_banner.jpg" alt="Image 2" />
        </SplideSlide>
        <SplideSlide>
          <img className='ml-8' src="https://images.uzum.uz/cq1uv5b5qt1gj8ddqd2g/main_page_banner.jpg" alt="Image 2" />
        </SplideSlide>
        <SplideSlide>
          <img className='ml-8' src="https://images.uzum.uz/cq17tkr6eisq2rke8dd0/main_page_banner.jpg" alt="Image 2" />
        </SplideSlide>
        <SplideSlide>
          <img className='ml-8' src="https://images.uzum.uz/cpv9a2osarnfdo99n360/main_page_banner.jpg" alt="Image 2" />
        </SplideSlide>
        <SplideSlide>
          <img className='ml-8' src="https://images.uzum.uz/cq2016j6eisq2rkedn9g/main_page_banner.jpg" alt="Image 2" />
        </SplideSlide>
      </SplideComponent>
    </div>
  );
}

export default ImageSlider;
