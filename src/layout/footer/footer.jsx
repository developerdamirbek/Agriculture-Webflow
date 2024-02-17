import React from 'react'
import { Logo } from '../../assets/icons/logo'
import { InstagramIcon } from '../../assets/icons/instagram-icon'
import { FacebookIcon } from '../../assets/icons/facebook-icon'
import { TwitterIcon } from '../../assets/icons/twitter-icon'
import { PinterestIcon } from '../../assets/icons/pinterest-icon'
import { footerPages } from '../../data/footer-data'
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <footer>
      <div className='pb-[106px] pt-[50px]'>
        <div className='container'>
          <div className='flex h-[100%] items-start justify-center gap-[50px]'>
            <div className=' text-end border-r border-r-1 border-r-border-color pr-[50px]'>
              <h3 className=' font-roboto text-text-color mb-8 font-bold text-[30px] '>Contact Us</h3>
              <ul className='flex flex-col gap-[30px]'>
                <li>
                  <span className=' font-openSans text-[18px] text-text-secondary font-bold '>Email</span>
                  <p className=' font-openSans text-[18px] text-text-secondary'>needhelp@Organia.com</p>
                </li>
                <li>
                  <span className=' font-openSans text-[18px] text-text-secondary font-bold'>Phone</span>
                  <p className=' font-openSans text-[18px] text-text-secondary'>666 888 888</p>
                </li>
                <li>
                  <span className=' font-openSans text-[18px] text-text-secondary font-bold'>Address</span>
                  <p className=' font-openSans text-[18px] text-text-secondary'>88 road, borklyn street, USA</p>
                </li>
              </ul>
            </div>
            <div className=' text-center  h-[100%] '>
              <a className='flex items-center justify-center gap-2 mb-[23px]' href="#">
                <Logo />
                <h1 className=' font-roboto font-bold text-[38px] text-text-color '>Organick</h1>
              </a>
              <p className=' text-text-secondary font-openSans mb-[49px] text-[18px] w-[543px] ml-auto mr-auto '>
                Simply dummy text of the printing and typesetting industry.
                Lorem Ipsum simply dummy text of the printing
              </p>
              <div className='flex items-center justify-center gap-[15px]'>
                <a target='blank' href='https://instagram.com/damirbekx' className=' bg-heavy-sugar p-[20px] rounded-full flex items-center justify-center '>
                  <InstagramIcon />
                </a>
                <a target='blank' href='https://instagram.com/damirbekx' className=' bg-heavy-sugar p-[20px] rounded-full flex items-center justify-center '>
                  <FacebookIcon />
                </a>
                <a target='blank' href='https://twitter.com/damirbekx' className=' bg-heavy-sugar p-[20px] rounded-full flex items-center justify-center '>
                  <TwitterIcon />
                </a>
                <a target='blank' href='https://instagram.com/damirbekx' className=' bg-heavy-sugar p-[20px] rounded-full flex items-center justify-center '>
                  <PinterestIcon />
                </a>

              </div>
            </div>
            <div className=' pl-[50px] border-l border-l-1 border-l-border-color '>
              <h3 className=' font-roboto text-text-color mb-8 font-bold text-[30px] '>Utility Pages</h3>
              <ul className='flex flex-col gap-[20px]'>
                {footerPages.map((item) => (
                  <li className=' font-openSans text-[18px] hover:text-text-color text-text-secondary ' key={item.id}>
                    <Link>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className='py-[18px] border border-t-1 border-disco-ball'>
        <div className="container">
          <p className='text-center text-text-secondary font-openSans text-[18px]'>Copyright © <span className=' text-text-secondary font-bold '>Organick</span> | Designed by <span className=' text-text-secondary font-bold '>VictorFlow</span> Templates - Powered by <span className=' text-text-secondary font-bold '>Webflow</span></p>
        </div>
      </div>
    </footer>
  )
}
