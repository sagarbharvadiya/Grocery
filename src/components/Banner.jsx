import React from 'react';
import Slider from 'react-slick';
import LazyLoad from 'react-lazyload';
import dataJson from '../Data/data.json';

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section className='banner'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-8'>
            <Slider {...settings}>
              {dataJson.banner.map(({ id, img, subTitle, title, title2, dec, button }) => (
                <React.Fragment key={id}>
                  <div className='banner_wrapper'>
                    {/* <LazyLoad>
                      <img src={img} alt='' />
                    </LazyLoad> */}
                    <div className='b_details'>
                      <h6>{subTitle}</h6>
                      <h1>
                        {title}
                        <p>{title2}</p>
                      </h1>
                      <p>{dec}</p>
                      <button className='btn'>{button}</button>
                    </div>
                  </div>
                </React.Fragment>
              ))}
            </Slider>
          </div>
          <div className='col-lg-4'>
            {dataJson.bannerRight.map(({ id, img, subTitle, title, title2 }) => (
              <React.Fragment key={id}>
                <div className='right_banner'>
                  <LazyLoad>
                    <img src={img} alt='' />
                  </LazyLoad>
                  <div className='RB_details'>
                    <h6>{subTitle}</h6>
                    <h1>
                      {title}
                      <p>{title2}</p>
                    </h1>
                  </div>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
