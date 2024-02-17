import React from 'react'
import heroImg from '../../assets/images/home-bg.jpeg'
import aboutImg from '../../assets/images/home-about.png'
import testimonialImg from '../../assets/images/testimonial-bg.png'
import ecoImg from '../../assets/images/eco-friendly.png'
import { Button } from '../../components/ui/button'
import { RightArrow } from '../../assets/icons/right-arrow'
import { Newsletter } from '../../components/newsletter'
import { bannerData } from '../../data/home-data'
import { Banner } from './components/banner'
import { aboutInfos } from '../../data/about-data'
import { InfoCard } from './components/info-card/info-card'
import { products } from '../../data/shop-data'
import { ProductCard } from '../../components/product-card'
import { Slider } from './components/slider'
import { statistics } from '../../data/testimonial-data'
import { StatisticCard } from './components/statistic-card'
import { nanoid } from 'nanoid'
import { ecoData } from '../../data/eco-friendly'
import { organicData } from '../../data/organic-data'
import { OrganicCard } from './components/organic-card/organic-card'
import { newsData } from '../../data/news-data'
import { NewsCard } from './components/news-card/news-card'
import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <div>
      <section className=' pt-[247px] pb-[247px] bg-no-repeat bg-cover bg-center' style={{ backgroundImage: `url(${heroImg})` }}>
        <div className="container">
          <div className=' ml-[60px] max-w-[510px] w-[100%] '>
            <h2 className='title text-sea-lettuce'>100% Natural Food</h2>
            <h1 className=' text-[70px] font-roboto font-bold text-text-color '>
              Choose the best
              healthier way
              of life
            </h1>
            <Button className=" bg-funky-yellow rounded-xl font-roboto font-semibold text-[20px] text-text-color " variant="primary">
              <div className='flex items-center gap-[10px]'>
                Explore Now
                <RightArrow />
              </div>
            </Button>
          </div>
        </div>
      </section>
      <section className='pt-[145px] pb-[190px]'>
        <div className='container'>
          <div className='flex items-center justify-center gap-[36px]'>
            {bannerData.map((item) => (
              <Banner key={item.id} {...item} />
            ))}
          </div>
        </div>
      </section>
      <section className='pt-[113px] pb-[113px] bg-doctor'>
        <div className="container">
          <div className=' flex items-center justify-center '>
            <div className='w-[834px] overflow-hidden'>
              <img className='w-[100%] object-cover' src={aboutImg} alt="" />
            </div>
            <div>
              <h3 className='title text-sea-lettuce'>About Us</h3>
              <h2 className=' font-roboto font-extrabold text-[50px] text-text-color w-[700px] mb-[14px] leading-normal '>
                We Believe in Working
                Accredited Farmers
              </h2>
              <p className=' font-openSans text-[18px] text-text-secondary w-[690px] mb-[46px] '>
                Simply dummy text of the printing and typesetting industry. Lorem had ceased to
                been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.
              </p>
              <div className='flex flex-col gap-[30px] mb-[46px] '>
                {aboutInfos.slice(0, 2).map((item) => (
                  <InfoCard key={item.title} {...item} />
                ))}
              </div>
              <Link to="/shop">
                <Button className="bg-text-color rounded-3xl text-white" variant="primary" >
                  <div className='flex items-center gap-[10px]'>
                    Shop Now
                    <RightArrow />
                  </div>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className='pt-[176px] pb-[200px] '>
        <h3 className='title text-center text-sea-lettuce'>Categories </h3>
        <h2 className='text-center text-[50px] text-text-color font-extrabold font-roboto mb-10 '>Our Products</h2>
        <div className="container">
          <div className=' w-[100%] grid gap-5 grid-cols-4 mb-[122px] '>
            {products.slice(0, 8).map((item) => (
              <ProductCard key={item.id} {...item} />
            ))}
          </div>
          <div className='flex justify-center'>
            <Link to="/shop">
              <Button className="bg-text-color rounded-3xl text-white" variant="primary">
                <div className='flex items-center gap-[10px]'>
                  Load More
                  <RightArrow />
                </div>
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <section className=' bg-no-repeat bg-cover py-[164px] ' style={{ backgroundImage: `url(${testimonialImg})` }}>
        <div className="container">
          <h3 className='title text-sea-lettuce text-center'>Testimonial</h3>
          <h2 className='text-center text-[50px] text-text-color font-extrabold font-roboto mb-[50px] '>What Our Customer Saying?</h2>
          <div className='pb-[100px]'>
            <div className='w-[1000px] ml-auto mr-auto'>
              <Slider />
            </div>
          </div>
          <div className=' flex items-center w-[1030px] ml-auto gap-[60px] pt-[102px] border-t border-t-1 border-t-border-color mr-auto '>
            {statistics.map((item) => (
              <StatisticCard key={nanoid()} {...item} />
            ))}
          </div>
        </div>
      </section>
      <section className=' pt-[200px] pb-[200px] bg-text-color '>
        <div className="container">
          <div className='flex items-end justify-between  mb-[50px]'>
            <div>
              <h3 className='title text-sea-lettuce'>Offer</h3>
              <h2 className=' font-roboto font-extrabold text-[50px] text-white '>We Offer Organic For You</h2>
            </div>
            <div>
              <Link to="/shop">
                <Button className="bg-funky-yellow" variant="primary">
                  <div className='flex items-center gap-[10px]'>
                    View All Product
                    <RightArrow />
                  </div>
                </Button>
              </Link>
            </div>
          </div>
          <div className='flex justify-between'>
            {products.slice(12, 16).map((item) => (
              <ProductCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      </section>
      <section className=' w-[100%] flex h-[100%] '>
        <div className='w-[50%]'>
          <img className='' src={ecoImg} alt="" />
        </div>
        <div className='w-[50%] py-[100px]'>
          <div className='bg-white rounded-3xl py-[57px] pl-[90px] ml-[-75px] '>
            <h3 className='title text-sea-lettuce'>Eco Friendly</h3>
            <h2 className=' font-roboto font-extrabold text-[50px] text-text-color mb-[35px] w-[600px] '>
              Econis is a Friendly
              Organic Store
            </h2>
            <ul className='flex flex-col gap-[35px] w-[635px]'>
              {ecoData.map((item) => (
                <li key={item.id}>
                  <h3 className=' font-roboto font-medium text-[25px] text-text-color mb-[7px] '>{item.title}</h3>
                  <p className=' font-openSans text-[18px] text-text-secondary '>{item.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className='bg-rain py-[187px]'>
        <div className='w-[100%] flex items-center justify-between'>
          {organicData.map((item) => (
            <OrganicCard key={item.id} {...item} />
          ))}
        </div>
      </section>
      <section className='pt-[177px] pb-[100px]'>
        <div className="container">
          <div className='flex items-end justify-between mb-[45px]'>
            <div>
              <h3 className='title text-sea-lettuce'>News</h3>
              <h2 className='w-[702px] font-roboto font-extrabold text-[50px] text-text-color'>
                Discover weekly content about organic food, & more
              </h2>
            </div>
            <Link to="/news">
              <Button className="py-[30px] px-[45px] font-roboto font-bold text-[20px] text-text-color" variant="outlined">
                <div className='flex items-center gap-[10px]'>
                  More News
                  <RightArrow />
                </div>
              </Button>
            </Link>
          </div>
          <div className='flex items-center justify-between'>
            {newsData.map((item) => (
              <NewsCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      </section>
      <section className='py-[110px]'>
        <Newsletter />
      </section>
    </div>
  )
}
