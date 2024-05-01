import { Link } from 'react-router-dom'

export function LogoNav () {
  return (

    <div className='flex items-center gap-5'>
      <Link to='/' className='tracking-[5px]'>SABATA</Link>
      <div className='w-[2px] h-[15px] bg-white  ' />
      <p className='tracking-[5px] text-[14px] '>INICIO</p>
    </div>

  )
}
