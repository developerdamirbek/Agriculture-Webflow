import React from 'react'
import { Hero } from '../../components/hero'
import heroImg from '../../assets/images/shop-hero.png'
import { Newsletter } from '../../components/newsletter'
import { products } from '../../data/shop-data'
import { ProductCard } from '../../components/product-card'

export const Shop = () => {
  return (
    <div>
      <section>
        <Hero img={heroImg} title="Shop" />
      </section>
      <section className='pt-[90px] pb-[140px]'>
        <div className="container">
          <div className='grid w-[100%] grid-cols-4 gap-10'>
            {products.map((item) => (
              <ProductCard key={item.id} {...item}/>
            ))}
          </div>
        </div>
      </section>
      <section className='pb-[120px]'>
        <Newsletter/>
      </section>
    </div>
  )
}
