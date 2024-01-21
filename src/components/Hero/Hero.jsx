import { Link } from "react-router-dom"

const Hero = () => {
   return (
      <div className='hero-main'>
         <img className='img' src="/hero.jpg" alt="Study" />
         <div className='text-adaptive'>
            <div className='con-responsive'>
               <div className='flex flex-col'>
                  <h2 className='title'>Получите анализ и процент успешности дела в Арбитражном суде
                     уже сейчас!</h2>
                  <img className='img-responsive' src="/hero.jpg" alt="Study" />
                  <p className='py-5 lg:py-9 text-xl font-semibold'>Ответьте на <span className='text-xl font-semibold text-green-700'>6 вопросов</span> в квизе и мы подготовим:</p>
                  <ul className='ul-list'>
                     <li className='flex gap-5 w-96'>
                        <span className='text-green-700 font-normal text-5xl'>01</span>
                        <p className='text-sm inline-block lg:text-base'>Юридическое заключение,
                           включающее в себя анализ и оценку ситуации по Арбитражному делу</p>
                     </li>
                     <li className='flex gap-5 w-96'>
                        <span className='text-green-700 font-normal text-5xl'>02</span>
                        <p className='text-sm inline-block lg:text-base'>Стратегию решения и возможные исходы дела,
                           включающие в себя услуги медиатора или адвоката, учитывая ваши потребности</p>
                     </li>
                     <li className='flex gap-5 w-96'>
                        <span className='text-green-700 font-normal text-5xl'>03</span>
                        <p className='text-sm inline-block lg:text-base'>Проведем расчёт стоимости наших услуг и основных расходов по делу</p>
                     </li>
                  </ul>
                  
                  <Link className='circle-question' to='/quiz'>
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-white">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                     </svg>

                     <p>Ответить на вопросы</p>
                  </Link>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Hero