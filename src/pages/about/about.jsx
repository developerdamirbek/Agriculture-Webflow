import React from 'react'
import { Hero } from '../../components/hero'
import heroImg from '../../assets/images/about-hero.png'
import { InfoCard } from '../home/components/info-card/info-card'
import { Button } from '../../components/ui/button'
import { RightArrow } from '../../assets/icons/right-arrow'
import { aboutInfos, aboutServices, offerProducts } from '../../data/about-data'
import aboutImg from '../../assets/images/about-img1.png'
import aboutImg2 from '../../assets/images/about-img2.png'
import { CircleIcon } from '../../assets/icons/circle-icon'
import { ServiceCard } from './components/service-card'
import { TeamCard } from './components/team-card'
import { experts } from '../../data/experts'
import { OfferCard } from './components/offer-card/offer-card'
import { Newsletter } from '../../components/newsletter'
import { Link } from 'react-router-dom'

export const About = () => {
  return (
    <div>
      <section>
        <Hero img={heroImg} title="About Us" />
      </section>
      <section className='pt-[113px] pb-[113px]'>
        <div className="container">
          <div className=' flex items-center gap-10 justify-center '>
            <div className='w-[910px] overflow-hidden'>
              <img className='w-[100%] object-cover' src={aboutImg} alt="" />
            </div>
            <div>
              <h3 className='title text-sea-lettuce'>About Us</h3>
              <h2 className=' font-roboto font-extrabold text-[50px] text-text-color w-[500px] mb-[14px] leading-normal '>
                We do Creative
                Things for Success
              </h2>
              <p className=' font-openSans text-[18px] text-text-secondary w-[690px] mb-[46px] '>
                Simply dummy text of the printing and typesetting industry. Lorem had ceased to
                been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.
              </p>
              <p className=' font-openSans text-[18px] text-text-secondary w-[690px] mb-[46px] '>
                Simply dummy text of the printing and typesetting industry. Lorem had ceased to
                been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.
              </p>
              <div className='flex gap-[30px] mb-[46px] '>
                {aboutInfos.slice(2, 4).map((item) => (
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
      <section className='bg-doctor pt-[190px] pb-[190px]'>
        <div className="container">
          <div className='flex items-center mb-[90px] gap-[50px] justify-between'>
            <div>
              <h3 className='title text-sea-lettuce'>About Us</h3>
              <h2 className=' font-roboto font-extrabold text-[50px] text-text-color w-[524px] mb-[25px] leading-normal '>
                We do not buy from the
                open market & traders.
              </h2>
              <p className=' font-openSans text-[18px] text-text-secondary w-[700px] mb-[36px] '>
                Simply dummy text of the printing and typesetting industry. Lorem had ceased to
                been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.
              </p>
              <div className='flex flex-col gap-6'>
                <div>
                  <div className=' bg-coronation flex items-center gap-[7px] mb-3 w-[340px] rounded-full p-[29px] '>
                    <CircleIcon />
                    <p className=' font-roboto font-medium text-text-color'>100% Natural Product</p>
                  </div>
                  <p className='w-[444px] ml-[60px] font-openSans text-[18px] text-text-secondary '>Simply dummy text of the printing and typesetting industry Lorem Ipsum</p>
                </div>
                <div>
                  <div className=' bg-coronation flex items-center gap-[7px] mb-3 w-[340px] rounded-full p-[29px] '>
                    <CircleIcon />
                    <p className=' font-roboto font-medium text-text-color'>100% Natural Product</p>
                  </div>
                  <p className='w-[444px] ml-[60px] font-openSans text-[18px] text-text-secondary '>Simply dummy text of the printing and typesetting industry Lorem Ipsum</p>
                </div>
              </div>
            </div>
            <div>
              <img src={aboutImg2} alt="About Image" />
            </div>
          </div>
          <div className=' w-[1118px] flex items-center gap-[30px] justify-between ml-auto mr-auto '>
            {aboutServices.map((item) => (
              <ServiceCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      </section>
      <section className=' py-[177px] '>
        <div className="container">
          <h3 className='title text-center text-sea-lettuce'>Team</h3>
          <h2 className=' font-roboto font-extrabold text-[50px] text-center text-text-color mb-[18px] '>Our Organic Experts</h2>
          <p className='mb-[42px] text-center font-openSans text-[18px] w-[852px] ml-auto mr-auto '>Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
          <div className='flex items-center justify-between'>
            {experts.map((item) => (
              <TeamCard {...item} />
            ))}
          </div>
        </div>
      </section>
      <section className=' bg-text-color py-[188px] '>
        <div className="container">
          <h2 className='title text-sea-lettuce text-center'>About Us</h2>
          <h3 className=' text-center mb-[33px] font-roboto font-extrabold text-white text-[50px] '>What We Offer for You</h3>
          <div className='flex justify-between'>
            {offerProducts.map((item) => (
              <OfferCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      </section>
      <section className='py-[141px]'>
        <Newsletter />
      </section>
    </div>
  )
}
