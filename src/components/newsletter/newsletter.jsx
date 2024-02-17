import React from 'react'
import img from '../../assets/images/newsletter.jpeg'
import { Input } from '../ui/input'
import { Button } from '../ui/button'

export const Newsletter = () => {
    return (
        <div>
            <div className="container">
                <div className='py-[105px] rounded-2xl px-[70px] flex items-center justify-between' style={{ backgroundImage: `url(${img})` }}>
                    <h2 className='w-[357px] font-roboto font-extrabold text-[50px] text-white'>
                        Subscribe to
                        our Newsletter
                    </h2>
                    <div className='flex items-center gap-[6px] w-[575px]'>
                        <Input type="email" className="flex-grow-1 w-[349px] font-roboto text-[18px] rounded-2xl" variant="primary" placeholder="Your Email Address" />
                        <Button variant="primary" className="bg-text-color text-white">
                            Subscribe
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
