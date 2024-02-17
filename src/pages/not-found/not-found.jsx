import React from 'react'
import bgImg from '../../assets/images/404-bg.png'
import img from '../../assets/images/404.svg'
import { Button } from '../../components/ui/button'
import { RightArrow } from '../../assets/icons/right-arrow'
import { Link } from 'react-router-dom'

export const NotFound = () => {
    return (
        <section className=' py-[230px] bg-no-repeat bg-cover bg-center ' style={{ backgroundImage: `url(${bgImg})` }} >
            <div className="container">
                <div className=' w-[100%] flex items-center justify-end '>
                    <div className='flex flex-col max-w-[535px] w-[100%]'>
                        <img className='mb-[14px]' src={img} alt="" />
                        <h2 className=' text-center font-roboto font-extrabold  text-[70px] text-text-color mb-[10px] '>Page not found</h2>
                        <p className=' mb-[36px] font-openSans text-text-secondary font-semibold text-[18px] '>The page you are looking for doesn't exist or has been moved</p>
                        <Link to="/">
                            <Button className="bg-text-color w-[275px] text-white text" variant="primary">
                                <div className='flex items-center gap-[10px]'>
                                    Go to Homepage
                                    <RightArrow />
                                </div>
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
