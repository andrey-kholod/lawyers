const Contacts = () => {
   return (
      <div className='w-full overflow-hidden px-3'>
         <div className='pb-12 mx-auto max-w-screen-lg lg:pb-28 relative px-3'>
            <img className='absolute bottom-0 -left-96' src="/bgc-1.png" alt="" />
            {/* <img className='absolute bottom-0 -right-96' src="/bgc-1.png" alt="" /> */}
            <img className='absolute bottom-0 -right-96' src="/bgc-2.png" alt="" />
            <div className="flex-col items-center flex justify-between relative lg:flex-row">
               <div className='items-center flex flex-col lg:items-start gap-6'>
                  <h4 className='font-bold text-4xl'>Контакты</h4>
                  <div>
                     <p className='text-lg mb-2'>Телефоны:</p>
                     <div className='flex gap-3 items-center mb-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                           <path d="M18.3706 14.6C17.8244 14.1419 14.6206 12.1131 14.0881 12.2063C13.8381 12.2506 13.6469 12.4638 13.135 13.0744C12.8983 13.3749 12.6383 13.6564 12.3575 13.9163C11.843 13.792 11.345 13.6074 10.8738 13.3663C9.0258 12.4666 7.53289 10.9732 6.63375 9.125C6.39265 8.65379 6.20804 8.15576 6.08375 7.64125C6.34358 7.36044 6.62507 7.10047 6.92563 6.86375C7.53562 6.35188 7.74938 6.16187 7.79375 5.91062C7.88688 5.37687 5.85625 2.17437 5.4 1.62813C5.20875 1.40188 5.035 1.25 4.8125 1.25C4.1675 1.25 1.25 4.8575 1.25 5.325C1.25 5.36313 1.3125 9.11875 6.05562 13.9444C10.8813 18.6875 14.6369 18.75 14.675 18.75C15.1425 18.75 18.75 15.8325 18.75 15.1875C18.75 14.965 18.5981 14.7913 18.3706 14.6Z" fill="#1E8E31" />
                           <path d="M14.375 9.375H15.625C15.6235 8.04937 15.0962 6.77847 14.1589 5.84111C13.2215 4.90375 11.9506 4.37649 10.625 4.375V5.625C11.6193 5.62599 12.5725 6.0214 13.2756 6.72445C13.9786 7.42749 14.374 8.38074 14.375 9.375Z" fill="#1E8E31" />
                           <path d="M17.5 9.375H18.75C18.7475 7.22088 17.8907 5.15569 16.3675 3.6325C14.8443 2.1093 12.7791 1.25248 10.625 1.25V2.5C12.4477 2.50215 14.1951 3.22717 15.484 4.51602C16.7728 5.80486 17.4978 7.5523 17.5 9.375Z" fill="#1E8E31" />
                        </svg>
                        <p className='font-bold text-3xl'>+7 (495) 639-15-63</p>
                     </div>
                     <div className='flex gap-3 items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                           <path d="M18.3706 14.6C17.8244 14.1419 14.6206 12.1131 14.0881 12.2063C13.8381 12.2506 13.6469 12.4638 13.135 13.0744C12.8983 13.3749 12.6383 13.6564 12.3575 13.9163C11.843 13.792 11.345 13.6074 10.8738 13.3663C9.0258 12.4666 7.53289 10.9732 6.63375 9.125C6.39265 8.65379 6.20804 8.15576 6.08375 7.64125C6.34358 7.36044 6.62507 7.10047 6.92563 6.86375C7.53562 6.35188 7.74938 6.16187 7.79375 5.91062C7.88688 5.37687 5.85625 2.17437 5.4 1.62813C5.20875 1.40188 5.035 1.25 4.8125 1.25C4.1675 1.25 1.25 4.8575 1.25 5.325C1.25 5.36313 1.3125 9.11875 6.05562 13.9444C10.8813 18.6875 14.6369 18.75 14.675 18.75C15.1425 18.75 18.75 15.8325 18.75 15.1875C18.75 14.965 18.5981 14.7913 18.3706 14.6Z" fill="#1E8E31" />
                           <path d="M14.375 9.375H15.625C15.6235 8.04937 15.0962 6.77847 14.1589 5.84111C13.2215 4.90375 11.9506 4.37649 10.625 4.375V5.625C11.6193 5.62599 12.5725 6.0214 13.2756 6.72445C13.9786 7.42749 14.374 8.38074 14.375 9.375Z" fill="#1E8E31" />
                           <path d="M17.5 9.375H18.75C18.7475 7.22088 17.8907 5.15569 16.3675 3.6325C14.8443 2.1093 12.7791 1.25248 10.625 1.25V2.5C12.4477 2.50215 14.1951 3.22717 15.484 4.51602C16.7728 5.80486 17.4978 7.5523 17.5 9.375Z" fill="#1E8E31" />
                        </svg>
                        <p className='font-bold text-3xl'>+7 (925) 838-47-97</p>
                     </div>
                  </div>
                  <div className='w-96'>
                     <p className='text-lg'>Адрес:</p>
                     <p className='text-lg leading-6'><span className='text-lg leading-6 font-bold'>г. Москва, ул. Милашенкова, д. 10, оф. 96</span> вход со стороны улицы, коричневое крыльцо с вывеской “Юридическая консультация”</p>
                  </div>
                  <ul className='rounded bg-gray-100 p-6 pl-11 leading-4 list'>
                     <li className='relative item salad text-base lg:text-lg leading-6'>Фонвизинская</li>
                     <li className='relative item orange text-base lg:text-lg leading-6'>Тимирязевская</li>
                     <li className='relative item gray text-base lg:text-lg leading-6'>Петровско-Разумовская</li>
                     <li className='relative item red text-base lg:text-lg leading-6'>ул. Милашенкова (станция монорельса)</li>
                  </ul>
                  <div>
                     <p className='text-lg'>E-mail:</p>
                     <a className='leading-5 underline text-lg font-bold' href="#">urist.mos.help@yandex.ru</a>
                  </div>
                  <div className='mb-8 flex-col flex lg:flex-row lg:mb-0 lg:gap-0 gap-3'>
                     <div className='gap-4 flex'>
                        <img className='inline-block' src="/telegram.svg" alt="" />
                        <p className='inline-block w-48 leading-5 text-lg text-blue-400'>Свяжитесь с нами в Telegram</p>
                     </div>
                     <div className='gap-4 flex'>
                        <img className='inline-block' src="/whatsapp.svg" alt="" />
                        <p className='inline-block w-48 leading-5 text-lg text-green-400'>Свяжитесь с нами в WhatsApp</p>
                     </div>
                  </div>
               </div>
               <img className='map relative' src="/map.jpg" alt="Map" />
               <p className='mt-4 lg:mt-0 map-desc lg:absolute -bottom-6 right-0 text-center text-lg'>ЗАО «Управление по развитию новых экономических форм производства»  ИНН: 7715021611 </p>
            </div>
         </div>
      </div>
   )
}

export default Contacts