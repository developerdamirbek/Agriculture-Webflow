import React from 'react'
import { Input } from '../../../../components/ui/input'
import { Button } from '../../../../components/ui/button/button'
import {SearchIcon} from '../../../../assets/icons/search-icon'

export const Searchbox = () => {
  return (
    <div className=' w-[376px] relative '>
        <Input className="bg-dr-white pt-[18px] pb-[18px] w-[100%] text-[20px] border-1 border-transparent focus:border-text-secondary text-text-color font-openSans font-medium  " variant="rounded"/>
        <Button className=" absolute  right-[5px] top-[50%] translate-y-[-50%] bg-padua" variant="circle">
            <SearchIcon/>
        </Button>
    </div>
  )
}
