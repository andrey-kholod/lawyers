import React from 'react'

const Congratulations = () => {
   return (
      <div className='mx-auto max-w-screen-lg px-4 pb-14 flex-col flex justify-center gap-10'>
         <h2 className='mt-20 md:mt-32 text-center text-4xl font-bold'>Ответы приняты в обработку, мы свяжемся с вами в течение одного рабочего дня</h2>
         <p className='text-center text-base'>Пока мы анализируем вашу ситуацию, переходите в наш ТГ канал</p>
         <div className='flex justify-center'>
            <button className='rounded bg-blue-500 text-white p-5 font-semibold inline pt-5 px-4 hover:bg-blue-700 transition-colors'>Перейти в наш ТГ канал и посмотреть кейсы</button>
         </div>
      </div>
   )
}

export default Congratulations