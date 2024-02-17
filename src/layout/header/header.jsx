import React from 'react'
import {Logo} from '../../assets/icons/logo'
import { links } from '../../data/header-data'
import { NavLink } from 'react-router-dom'
import { nanoid } from 'nanoid'
import { Searchbox } from './components/searchbox'
import { CartBlock } from './components/cart-block/cart-block'

export const Header = () => {
  return (
    <header className=' py-[70px] px-[70px] '>
      <div className="container">
        <div className=' flex items-center justify-between '>
          <div>
            <a className='flex items-center gap-2' href="#">
              <Logo/>
              <h1 className=' font-roboto font-bold text-[38px] text-text-color '>Organick</h1>
            </a>
          </div>
          <nav>
            <ul className='flex items-center gap-[40px]'>
              {links.map((item) => (
                <li className=' text-text-color font-roboto font-bold text-[20px] ' key={nanoid()}>
                  <NavLink to={item.path}>
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <div className=' flex items-center gap-[18px] '>
                <Searchbox/>
                <CartBlock/>
          </div>
        </div>
      </div>
    </header>
  )
}
