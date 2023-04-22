import React from 'react';
import dataJson from '../Data/data.json';
import LeftSideBar from './LeftSideBar';

const Products = () => {
  return (
    <>
      <section className='products'>
        <div className='products_wrapper container'>
          <div className='row'>
            <LeftSideBar />
            <div className='col-lg-9'>
              <div className='row'>
                {dataJson.products.map(({ id, img, item, cat, newPrice, oldPrice }) => (
                  <React.Fragment key={id}>
                    <div className='col-lg-4'>
                      <div className='item_box'>
                        <span className='dis'>25% OFF</span>
                        <div className='image'>
                          <img src={img} alt={item} />
                        </div>
                        <div className='details'>
                          <p className='cat'>{cat}</p>
                          <h6>{item}</h6>
                          <p className='price'>{newPrice}<span>{oldPrice}</span></p>
                        </div>
                        <button>Add to Cart</button>
                      </div>
                    </div>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
