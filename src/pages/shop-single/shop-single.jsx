import React from 'react';
import { products } from '../../data/shop-data';
import { useParams } from 'react-router-dom';
import { SingleCard } from './components/single-card';
import { Hero } from '../../components/hero';
import heroImg from '../../assets/images/shop-single-hero.png';
import { Stars } from '../../assets/icons/stars';
import { Input } from '../../components/ui/input';
import { Button } from '../../components/ui/button';
import { RightArrow } from '../../assets/icons/right-arrow';
import { ProductCard } from '../../components/product-card';
import { Newsletter } from '../../components/newsletter';

import { useCart } from '../../context/cart-context/cart-context';

export const ShopSingle = () => {
  const { state, dispatch } = useCart(); 

  const handleAddToCart = () => {
    const existingItemIndex = state.items.findIndex(item => item.id === product.id);
    if (existingItemIndex !== -1) {
      dispatch({ type: 'INCREMENT_ITEM', payload: product.id });
    } else {
      dispatch({ type: 'ADD_TO_CART', payload: { ...product, quantity: input } });
    }
  };

  const { id } = useParams();
  const ID = parseInt(id);
  const product = products.find(item => item.id === ID);

  const [input, setInput] = React.useState(1);

  const handleIncrease = () => {
    setInput(prevValue => prevValue + 1);
  };

  const handleDecrease = () => {
    if (input > 1) {
      setInput(prevValue => prevValue - 1);
    }
  };

  return (
    <div>
      <section>
        <Hero img={heroImg} title="" />
      </section>
      <section className='py-[140px]'>
        <div className="container">
          <div className='flex items-center justify-center mb-[90px] gap-[80px]'>
            <SingleCard img={product.img} type={product.type} />
            <div>
              <h3 className='font-roboto font-semibold text-text-color text-[40px] mb-[10px] '>{product.name}</h3>
              <div className='mb-[13px]'>
                <Stars />
              </div>
              <div className='flex items-center gap-[10px] mb-[27px] '>
                <p className='font-openSans font-semibold line-through text-fortress-grey '>{product.oldPrice}</p>
                <p className='font-roboto font-bold text-[25px] text-text-color '>{product.price}</p>
              </div>
              <p className='font-openSans w-[658px] mb-[35px] text-[18px] text-text-secondary '>Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
              <div className='flex items-center gap-[20px]'>
                <div className='flex items-center  gap-[22px]'>
                  <span className=' inline-block font-roboto font-bold text-[20px] text-text-color '>
                    Quantity :
                  </span>
                  <div className=' relative flex items-center justify-center w-[134px] '>
                    <Input value={input} variant="primary" className="py-[24px] px-[61px] text-[20px] font-roboto font-bold border-2 rounded-full w-[100%] border-text-color" />
                    <div className=' absolute flex items-center gap-2 right-2 '>
                      <Button variant="circle" className="p-2  text-[20px] top-[50%] bg-rain rounded-full w-[30px] flex items-center justify-center h-[30px]" onClick={handleIncrease}>
                        +
                      </Button>
                      <Button variant="circle" className="p-2  text-[20px] top-[50%] bg-rain rounded-full w-[30px] flex items-center justify-center h-[30px]" onClick={handleDecrease}>
                        -
                      </Button>
                    </div>
                  </div>
                </div>
                <Button onClick={handleAddToCart} variant="primary" className="bg-text-color text-white">
                  <div className='flex items-center gap-[10px]'>
                    Add To Cart
                    <RightArrow />
                  </div>
                </Button>
                <div>

                </div>
              </div>
            </div>
          </div>
          <div>
            <div className='w-[700px] ml-auto mr-auto flex justify-center gap-[20px] mb-[27px] '>
              <Button variant="primary" className="bg-text-color text-white px-[57px] py-[23px]">
                Product Description
              </Button>
              <Button variant="primary" className="bg-rain px-[57px] py-[23px] text-text-color">
                Additional Info
              </Button>
            </div>
            <p className="font-openSans text-[18px] text-center w-[1137px] ml-auto mr-auto text-text-secondary">
              Welcome to the world of natural and organic. Here you can discover the bounty of nature. We have grown on the principles of health, ecology, and care. We aim to give our customers a healthy chemical-free meal for perfect nutrition. It offers about 8–10% carbs. Simple sugars — such as glucose and fructose — make up 70% and 80% of the carbs in raw.
            </p>
          </div>
        </div>
      </section>
      <section className='pb-[140px]'>
        <div className="container">
          <h2 className=' font-roboto font-extrabold text-text-color text-[50px] mb-10 text-center '>Related Products</h2>
          <div className='flex justify-between'>
            {products.slice(4,8).map((item) => (
              <ProductCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      </section>
      <section className='pb-[100px]'>
        <Newsletter/>
      </section>
    </div>
  );
};
