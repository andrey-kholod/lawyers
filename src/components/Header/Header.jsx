import { useState } from 'react'
import styles from './Header.module.css'
import { Link } from 'react-router-dom'

const Header = () => {
   const [isBurger, setIsBurger] = useState(false)
   return (
      <header className='relative'>
         <nav className='justify-between px-6 md:p-0 gap-6 h-20 py-3 border-b-2 flex items-center md:justify-center'>
            <div className='lg:w-1/4  lg:flex items-center justify-end gap-3'>
               <div className='inline-block text-black font-bold text-3xl'>URNEFP</div>
               <p className={`text-sm for-ad hidden ${styles.header} lg:inline-block font-normal leading-4 xl:text-base xl:leading-4`}>Управление по развитию новых экономических форм производства</p>
            </div>
            <ul className='hidden md:flex gap-3'>
               <li className='transition-link'><Link to="/">Главная</Link></li>
               <li className='transition-link'><a href="#">Наша команда</a></li>
               <li className='transition-link'><a href="#">Контакты</a></li>
            </ul>
            <div className='hidden md:flex px-7 items-center gap-2'>
               <div className='leading-5 '>
                  <p>Есть вопросы?</p>
                  <a href='#' className='transition-link font-bold'>Мы онлайн</a>
               </div>
               <div>
                  <img src="/1.svg" alt="" />
               </div>
            </div>
            <div className='for-ad'>
               <span className='font-bold text-2xl leading-6'>+7 (495) 639-15-63</span>
               <span className='leading-5 text-base'>г. Москва, ул. Милашенкова, д.10</span>
               <a className='leading-5 underline text-base' href="#">urist.mos.help@yandex.ru</a>
            </div>
            <button className={`burger md:hidden ${isBurger ? 'active' : ''}`} onClick={() => setIsBurger(!isBurger)}>
               <div></div>
               <div></div>
               <div></div>
            </button>
         </nav>
         <div className={`${isBurger ? 'visible' : 'opacity-0 invisible'}  transition-all duration-300 absolute top-20 w-full bg-white flex flex-col z-20 items-center py-4 border-b-2 bs-x`}>
            <Link onClick={() => setIsBurger(false)} to='/' className='transition-colors ease-in-out duration-200 py-3 hover:bg-slate-200 w-full text-center'>Главная</Link>
            <div className='transition-colors ease-in-out duration-200 py-3 hover:bg-slate-200 w-full text-center'>Наша команда</div>
            <div className='transition-colors ease-in-out duration-200 py-3 hover:bg-slate-200 w-full text-center'>Контакты</div>
            <div className='transition-colors ease-in-out duration-200 py-3 hover:bg-slate-200 w-full text-center flex flex-col items-center'>
               <p>Есть вопросы? <span className='font-bold'>Мы онлайн</span></p>
               <img src="/1.svg" alt="" />
            </div>
            <p className='transition-colors ease-in-out duration-200 py-3 hover:bg-slate-200 w-full text-center font-bold text-2xl leading-6'>+7 (495) 639-15-63</p>
            <div className='transition-colors ease-in-out duration-200 py-3 hover:bg-slate-200 w-full text-center'>г. Москва, ул. Милашенкова, д.10</div>
            <a className='transition-colors ease-in-out duration-200 py-3 hover:bg-slate-200 w-full text-center underline'>urist.mos.help@yandex.ru</a>
         </div>
      </header>
   )
}

export default Header