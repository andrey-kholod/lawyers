import { useState } from 'react'

const Form = () => {
   const [formState, setFormState] = useState({
      phone: '',
      email: '',
      comment: ''
   })
   const [validateForm, setValidateForm] = useState({
      phone: true,
      email: true,
      comment: true
   })

   const logToConsole = () => {
      let isFormValid = true
      if (!formState.phone.trim().length) {
         setValidateForm(prev => ({ ...prev, phone: false }))
         isFormValid = false
      } else {
         setValidateForm((prev) => ({ ...prev, phone: true }))
         isFormValid
      }
      if (!formState.email.trim().length) {
         setValidateForm(prev => ({ ...prev, email: false }))
         isFormValid = false
      } else {
         setValidateForm((prev) => ({ ...prev, email: true }))
         isFormValid
      }
      if (!formState.comment.trim().length) {
         setValidateForm(prev => ({ ...prev, comment: false }))
         isFormValid = false
      } else {
         setValidateForm((prev) => ({ ...prev, comment: true }))
         isFormValid
      }
      if (!isFormValid) {
         console.log('Invalid form')
      } else {
         console.log(formState)
         setFormState({comment: '', phone: '', email: ''})
      }
   }

   return (
      <div className='form-main-con'>
         <img src="/background.jpg" alt="Form" className='bgc object-cover ' />
         <div className='double-con'>
            <div className='form-con'>
               <div className="form">
                  <img className='mb-5' src="/people-2.jpg" alt="" />
                  <p className='font-bold leading-4 text-lg'>Шебаров</p>
                  <p className='mb-4 font-bold text-lg'>Алексей Игоревич</p>
                  <p className='leading-4 mb-6'>Генеральный директор, доктор экономических наук</p>
                  <p className='font-bold mt-10'>
                     <svg className='inline-block mr-2' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M18.3706 14.6C17.8244 14.1419 14.6206 12.1131 14.0881 12.2063C13.8381 12.2506 13.6469 12.4638 13.135 13.0744C12.8983 13.3749 12.6383 13.6564 12.3575 13.9163C11.843 13.792 11.345 13.6074 10.8738 13.3663C9.0258 12.4666 7.53289 10.9732 6.63375 9.125C6.39265 8.65379 6.20804 8.15576 6.08375 7.64125C6.34358 7.36044 6.62507 7.10047 6.92563 6.86375C7.53562 6.35188 7.74938 6.16187 7.79375 5.91062C7.88688 5.37687 5.85625 2.17437 5.4 1.62813C5.20875 1.40188 5.035 1.25 4.8125 1.25C4.1675 1.25 1.25 4.8575 1.25 5.325C1.25 5.36313 1.3125 9.11875 6.05562 13.9444C10.8813 18.6875 14.6369 18.75 14.675 18.75C15.1425 18.75 18.75 15.8325 18.75 15.1875C18.75 14.965 18.5981 14.7913 18.3706 14.6Z" fill="#1E8E31" />
                        <path d="M14.375 9.375H15.625C15.6235 8.04937 15.0962 6.77847 14.1589 5.84111C13.2215 4.90375 11.9506 4.37649 10.625 4.375V5.625C11.6193 5.62599 12.5725 6.0214 13.2756 6.72445C13.9786 7.42749 14.374 8.38074 14.375 9.375Z" fill="#1E8E31" />
                        <path d="M17.5 9.375H18.75C18.7475 7.22088 17.8907 5.15569 16.3675 3.6325C14.8443 2.1093 12.7791 1.25248 10.625 1.25V2.5C12.4477 2.50215 14.1951 3.22717 15.484 4.51602C16.7728 5.80486 17.4978 7.5523 17.5 9.375Z" fill="#1E8E31" />
                     </svg>
                     +7 (495) 639-14-77</p>
               </div>
               <div className="form">
                  <img className='mb-5' src="/people-1.jpg" alt="" />
                  <p className='font-bold leading-4 text-lg'>Гаврилова</p>
                  <p className='mb-4 font-bold text-lg'>Евгения Владимировна</p>
                  <p className='leading-4 mb-6'>Заместитель генерального директора, начальник юридичсекого отдела</p>
                  <p className='font-bold mt-6'>
                     <svg className='inline-block mr-2' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M18.3706 14.6C17.8244 14.1419 14.6206 12.1131 14.0881 12.2063C13.8381 12.2506 13.6469 12.4638 13.135 13.0744C12.8983 13.3749 12.6383 13.6564 12.3575 13.9163C11.843 13.792 11.345 13.6074 10.8738 13.3663C9.0258 12.4666 7.53289 10.9732 6.63375 9.125C6.39265 8.65379 6.20804 8.15576 6.08375 7.64125C6.34358 7.36044 6.62507 7.10047 6.92563 6.86375C7.53562 6.35188 7.74938 6.16187 7.79375 5.91062C7.88688 5.37687 5.85625 2.17437 5.4 1.62813C5.20875 1.40188 5.035 1.25 4.8125 1.25C4.1675 1.25 1.25 4.8575 1.25 5.325C1.25 5.36313 1.3125 9.11875 6.05562 13.9444C10.8813 18.6875 14.6369 18.75 14.675 18.75C15.1425 18.75 18.75 15.8325 18.75 15.1875C18.75 14.965 18.5981 14.7913 18.3706 14.6Z" fill="#1E8E31" />
                        <path d="M14.375 9.375H15.625C15.6235 8.04937 15.0962 6.77847 14.1589 5.84111C13.2215 4.90375 11.9506 4.37649 10.625 4.375V5.625C11.6193 5.62599 12.5725 6.0214 13.2756 6.72445C13.9786 7.42749 14.374 8.38074 14.375 9.375Z" fill="#1E8E31" />
                        <path d="M17.5 9.375H18.75C18.7475 7.22088 17.8907 5.15569 16.3675 3.6325C14.8443 2.1093 12.7791 1.25248 10.625 1.25V2.5C12.4477 2.50215 14.1951 3.22717 15.484 4.51602C16.7728 5.80486 17.4978 7.5523 17.5 9.375Z" fill="#1E8E31" />
                     </svg>
                     +7 (495) 639-15-63</p>
               </div>
               <div className="form-input">
                  <p className='font-bold text-lg text-center mb-1.5'>Получите настоящую профессиональную помощь </p>
                  <label className='mb-1.5' htmlFor="phone-i">Телефон:</label>
                  <input className={`p-4 rounded border border-gray-400 outline-none mb-1.5 ${!validateForm.phone ? 'border-red-700' : ''}`} value={formState.phone} onChange={(e) => setFormState(prev => ({ ...prev, phone: e.target.value }))} type="tel" id='phone-i' placeholder='+7 (___) ___-__-__' />
                  {!validateForm.phone && (<span style={{ color: 'red' }}>Заполните телефон!</span>)}
                  <label className='mb-1.5' htmlFor="email-i">E-mail:</label>
                  <input className={`p-4 rounded border border-gray-400 outline-none mb-1.5 ${!validateForm.email ? 'border-red-700' : ''}`} value={formState.email} onChange={(e) => setFormState(prev => ({ ...prev, email: e.target.value }))} type="email" id='email-i' placeholder='Ваша почта' />
                  {!validateForm.email && (<span style={{ color: 'red' }}>Заполните e-mail!</span>)}
                  <label className='mb-1.5' htmlFor="comment-i">Ваш комментарий:</label>
                  <input className={`p-4 rounded border border-gray-400 outline-none mb-1.5 ${!validateForm.comment ? 'border-red-700' : ''}`} value={formState.comment} onChange={(e) => setFormState(prev => ({ ...prev, comment: e.target.value }))} type="email" id='comment-i' placeholder='Ваш комментарий' />
                  {!validateForm.comment && (<span style={{ color: 'red' }}>Заполните комментарий!</span>)}
                  <button className='transition-colors hover:bg-green-700 bg-green-600 p-4 rounded text-white font-bold outline-none' onClick={logToConsole}>Записаться на консультацию</button>
                  <p className='text-xs text-center mt-2'>Нажимая кнопку я даю своё согласие на обработку моих персональных данных</p>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Form