import React, { useState } from 'react'
import { data } from './data'
import Radios from './Radios'
import Inputs from './Inputs'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'

const Quiz = () => {

   const [currentQuestion, setCurrentQuestion] = useState(1)
   const [answers, setAnswers] = useState({ 1: '1', 2: '1', 3: '1', 4: '', 5: '1', 6: '' })


   const nextQuestion = () => {
      setCurrentQuestion(prev => prev + 1)
      // console.log(currentQuestion)
      // setAnswers(prev => {...prev, })
   }

   const setCheckedValueToResult = (checked) => {
      setAnswers(prev => ({...prev, [currentQuestion]: checked }))
      console.log(answers)
   }

   const previousQuestion = () => {
      setCurrentQuestion(prev => prev - 1)
      console.log(currentQuestion)
   }

   const sendAnswers = () => {
      console.log(answers)
   }

   const skipQuestion = () => {
      setAnswers(prev => ({...prev, [currentQuestion]: 'Пропущено'}))
      console.log(answers)
      if (currentQuestion < 6) {
         nextQuestion()
      }
   }

   return (
      <>
      <section className='mx-auto max-w-screen-lg px-4 pb-14'>
         <div className="flex flex-col mt-16 justify-between md:mt-24 md:flex-row items-center">
            <div className='w-3/5 '>
               <div style={{ marginLeft: `${currentQuestion * 7}%` }} className='mb-3 text-base'>{currentQuestion}/6</div>
               <div className='mb-12 h-1.5 w-full bg-gray-200 rounded-md overflow-hidden'><div style={{ width: `${currentQuestion * 16.67}%` }} className='h-1.5 transition-all bg-green-600'></div></div>
               <h3 className='font-bold text-3xl mb-8 md:text-left text-center'>{data[currentQuestion - 1].title}</h3>
               {/* RADIO BUTTONS */}
                  {currentQuestion === 4 || currentQuestion === 6 ? <Inputs answers={data[currentQuestion - 1].inputs}/> : <Radios answers={data[currentQuestion - 1].answers} setCheckedValueToResult={setCheckedValueToResult}/>}
               <div className='flex items-center gap-4 md:justify-start justify-center'>
                  {currentQuestion > 1 && <button onClick={previousQuestion} className='border border-green-600 rounded p-3 hover:bg-gray-200 transition-colors'>
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
                     </svg>
                  </button>}
                  {currentQuestion === 6 ? <Link to="/congratulations" className='transition-colors hover:bg-green-900 text-white bg-green-700 rounded p-3 px-3.5' onClick={sendAnswers}>Готово!</Link> : <button className='transition-colors hover:bg-green-900 text-white bg-green-700 rounded p-3 px-3.5' onClick={nextQuestion}>Далее</button>}
                  <button className='text-gray-400  rounded p-3 px-3.5 transition-colors hover:text-gray-600' onClick={skipQuestion}>Пропустить</button>
               </div>
            </div>
            <div className='flex flex-col gap-4 mt-10 md:mt-20'>
               <div className='p-5 py-4 border rounded border-gray-300'>
                  <svg className='inline-block' xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                     <path d="M16.25 11.875H18.125V13.125H16.25V11.875Z" fill="black" />
                     <path d="M21.875 11.875H23.75V13.125H21.875V11.875Z" fill="black" />
                     <path d="M20.0301 16.0851L20.4268 16.2173L20.8221 15.0314L20.4254 14.8991C20.3366 14.8696 20.2556 14.8204 20.1884 14.7553C20.1211 14.6902 20.0693 14.6109 20.0368 14.5231C20.0044 14.4353 19.992 14.3414 20.0007 14.2482C20.0094 14.155 20.0389 14.0649 20.0871 13.9847L21.1604 12.1959L20.0885 11.5527L19.0153 13.3415C18.8708 13.5823 18.7823 13.8524 18.7562 14.132C18.7301 14.4116 18.7671 14.6934 18.8645 14.9568C18.9619 15.2201 19.1172 15.4582 19.319 15.6535C19.5207 15.8488 19.7638 15.9963 20.0301 16.0851Z" fill="black" />
                     <path d="M17.9199 18.7379C18.5354 19.1498 19.2594 19.3697 20 19.3697C20.7406 19.3697 21.4646 19.1498 22.0801 18.7379L22.2217 18.6436L21.5283 17.6035L21.3868 17.6979C20.9764 17.9725 20.4938 18.1191 20 18.1191C19.5062 18.1191 19.0236 17.9725 18.6132 17.6979L18.4717 17.6035L17.7783 18.6436L17.9199 18.7379Z" fill="black" />
                     <path d="M9.99414 38.6738L10.619 33.6752L11.859 33.8302L11.2341 38.8288L9.99414 38.6738Z" fill="black" />
                     <path d="M36.8748 26.2494H33.7498V24.3744C33.7492 23.8773 33.5515 23.4007 33.2 23.0492C32.8485 22.6977 32.3719 22.5 31.8748 22.4994H29.3748C28.8777 22.5 28.4011 22.6977 28.0496 23.0492C27.6981 23.4007 27.5003 23.8773 27.4998 24.3744V24.6962L26.0287 24.2365C25.6972 24.1339 25.4008 23.941 25.1729 23.6793C24.945 23.4176 24.7945 23.0975 24.7385 22.7551L24.3743 20.5696C25.0784 19.7967 25.6131 18.885 25.944 17.8932L26.7802 15.3845C27.1314 15.1004 27.3979 14.7255 27.551 14.3006C27.7041 13.8757 27.7379 13.4169 27.6487 12.9742L28.5993 11.0729C28.6727 10.9259 28.7324 10.7725 28.7776 10.6146L29.5683 7.84724C29.7243 7.30583 29.7036 6.72878 29.5092 6.19993C29.3148 5.67109 28.9569 5.21802 28.4873 4.90656L28.1847 4.70492C28.03 4.60197 27.8973 4.46929 27.7944 4.3146L27.373 3.68258C27.1308 3.31829 26.8021 3.0196 26.4164 2.81316C26.0306 2.60672 25.5998 2.49893 25.1623 2.49941H23.1771C22.8727 2.49878 22.5767 2.40008 22.3329 2.21797L22.1516 2.08201C21.526 1.6095 20.7804 1.32173 19.9996 1.25133C19.2187 1.18092 18.4338 1.3307 17.7337 1.68368L16.3993 2.35087C16.2039 2.44831 15.9885 2.49915 15.7701 2.49941H14.4271C13.8524 2.50061 13.2934 2.68694 12.8329 3.0308L11.9541 3.6899C11.5353 4.00312 11.2184 4.43321 11.0434 4.92607C10.8684 5.41893 10.8431 5.95254 10.9707 6.45976L11.0504 6.77897C11.0978 6.96917 11.105 7.16715 11.0715 7.36028C11.0381 7.55341 10.9647 7.73745 10.8562 7.90064C10.5643 8.33674 10.4085 8.84967 10.4085 9.37441C10.4085 9.89916 10.5643 10.4121 10.8562 10.8482L11.2846 11.4907C11.3169 11.5393 11.3462 11.5899 11.3723 11.6421C11.3846 11.6666 11.3985 11.6903 11.4139 11.7131L12.3335 13.0707C12.2645 13.5002 12.31 13.9404 12.4655 14.3466C12.6211 14.7529 12.8811 15.1109 13.2193 15.3845L14.0556 17.8931C14.3865 18.8849 14.9212 19.7966 15.6253 20.5696L15.261 22.7551C15.205 23.0975 15.0546 23.4176 14.8267 23.6793C14.5988 23.941 14.3024 24.1339 13.9708 24.2365L8.89069 25.824C7.73739 26.1862 6.69965 26.8454 5.8816 27.7355C5.06355 28.6255 4.49397 29.715 4.23001 30.8946L2.51465 38.6138L3.73489 38.885L5.45025 31.1658C5.66622 30.2006 6.13224 29.3092 6.80155 28.581C7.47087 27.8528 8.31993 27.3135 9.26353 27.0171L11.206 26.4101L15.218 29.849C15.3313 29.946 15.4756 29.9994 15.6248 29.9994C15.774 29.9994 15.9182 29.946 16.0315 29.849L17.6819 28.4344C17.7742 28.6625 17.8997 28.8756 18.0543 29.0671L16.2605 38.6342L17.4891 38.8646L19.1775 29.8598C19.7837 30.0715 20.4483 30.0415 21.0331 29.7761C21.6178 29.5107 22.0779 29.0302 22.3177 28.4344L22.4998 28.5905V36.8744C22.5003 37.3715 22.6981 37.8481 23.0496 38.1996C23.4011 38.5511 23.8777 38.7488 24.3748 38.7494H36.8748C37.3719 38.7488 37.8485 38.5511 38.2 38.1996C38.5515 37.8481 38.7492 37.3715 38.7498 36.8744V28.1244C38.7492 27.6273 38.5515 27.1507 38.2 26.7992C37.8485 26.4477 37.3719 26.25 36.8748 26.2494ZM37.4998 28.1244V29.9994H23.7498V28.1244C23.75 27.9587 23.8159 27.7998 23.933 27.6827C24.0502 27.5655 24.2091 27.4996 24.3748 27.4994H36.8748C37.0405 27.4996 37.1993 27.5655 37.3165 27.6827C37.4337 27.7998 37.4996 27.9587 37.4998 28.1244ZM29.3748 23.7494H31.8748C32.0405 23.7496 32.1993 23.8155 32.3165 23.9327C32.4337 24.0498 32.4996 24.2087 32.4998 24.3744V26.2494H28.7498V24.3744C28.75 24.2087 28.8159 24.0498 28.933 23.9327C29.0502 23.8155 29.2091 23.7496 29.3748 23.7494ZM25.6559 25.4296L27.4998 26.0058V26.2494H24.3748C24.0493 26.2496 23.7295 26.3345 23.4468 26.4958C23.1641 26.657 22.9282 26.8891 22.7623 27.1691L21.4748 26.0655C22.2176 25.8808 22.9188 25.5575 23.5417 25.1126L24.2968 24.5732C24.6674 24.9723 25.1359 25.2676 25.6559 25.4296ZM16.494 22.9606L16.7271 21.5622C17.1892 21.9026 17.6888 22.1888 18.2163 22.415L19.7536 23.0739C19.8314 23.1072 19.9151 23.1244 19.9998 23.1244C20.0844 23.1244 20.1682 23.1072 20.246 23.0739L21.7833 22.415C22.3107 22.1888 22.8104 21.9026 23.2725 21.5622L23.5055 22.9606C23.5367 23.1446 23.5841 23.3254 23.6473 23.501L22.8151 24.0954C21.9936 24.6821 21.0093 24.9975 19.9998 24.9975C18.9902 24.9975 18.0059 24.6821 17.1844 24.0954L16.3523 23.501C16.4154 23.3254 16.4628 23.1446 16.494 22.9606ZM12.4704 11.0439C12.4262 10.9592 12.3776 10.8769 12.3246 10.7974L11.8962 10.1548C11.7417 9.92389 11.6592 9.65228 11.6592 9.37441C11.6592 9.09654 11.7417 8.82493 11.8962 8.594C12.1013 8.28584 12.2398 7.93831 12.303 7.5736C12.3661 7.20889 12.3526 6.83502 12.2631 6.47585L12.1833 6.15664C12.1158 5.88806 12.1292 5.60551 12.2218 5.34453C12.3145 5.08355 12.4823 4.85581 12.7041 4.68997L13.583 4.03079C13.8268 3.84872 14.1228 3.75005 14.4271 3.74941H15.7701C16.1825 3.74893 16.5892 3.65291 16.9583 3.46888L18.2927 2.80169C18.7853 2.55328 19.3378 2.44787 19.8873 2.49743C20.4368 2.54699 20.9614 2.74952 21.4017 3.08207L21.5829 3.21795C22.0434 3.56186 22.6024 3.74823 23.1771 3.74941H25.1623C25.394 3.74917 25.6221 3.80625 25.8264 3.91556C26.0306 4.02488 26.2047 4.18304 26.333 4.37594L26.7543 5.00796C26.9486 5.30007 27.1992 5.5506 27.4913 5.74496L27.794 5.94668C28.0426 6.1116 28.2321 6.35151 28.3351 6.63155C28.438 6.91158 28.449 7.21715 28.3664 7.50384L27.5757 10.271C27.5518 10.3547 27.5202 10.4359 27.4813 10.5138L26.9119 11.6526L26.796 11.5368L26.2177 9.80173C26.1762 9.67729 26.0966 9.56906 25.9902 9.49237C25.8838 9.41568 25.7559 9.37441 25.6248 9.37441C25.0112 9.37641 24.4113 9.1935 23.9033 8.84953C23.3952 8.50555 23.0026 8.01648 22.7766 7.44608L22.4551 6.64233C22.4205 6.55598 22.3672 6.47842 22.2988 6.41532C22.2305 6.35221 22.149 6.30515 22.0602 6.27756C21.9713 6.24998 21.8775 6.24256 21.7854 6.25585C21.6934 6.26914 21.6055 6.30281 21.5281 6.35439L20.5978 6.97459C20.0847 7.31734 19.4814 7.5 18.8644 7.49941H18.5385C17.7455 7.49945 16.9675 7.71495 16.2876 8.12289L15.2427 8.74979C14.3474 9.28729 13.6736 10.1272 13.3432 11.1178L13.2035 11.5368L13.0263 11.714C13.0058 11.7344 12.9865 11.7557 12.9668 11.7768L12.4704 11.0439ZM14.3427 14.8017C14.2988 14.6699 14.2121 14.5565 14.0964 14.4794C13.946 14.3791 13.8196 14.2466 13.7265 14.0916C13.6334 13.9365 13.5759 13.7627 13.558 13.5827C13.5402 13.4028 13.5626 13.2211 13.6234 13.0508C13.6843 12.8805 13.7822 12.7258 13.9101 12.5979L14.1917 12.3164C14.2603 12.2478 14.312 12.1641 14.3427 12.072L14.529 11.5131C14.7651 10.8055 15.2463 10.2056 15.8858 9.82165L16.9307 9.19474C17.4164 8.90338 17.9721 8.74946 18.5385 8.74941H18.8644C19.7282 8.75027 20.5729 8.49453 21.2912 8.01463L21.5805 7.82168L21.616 7.91033C21.9052 8.64056 22.3891 9.27749 23.015 9.75182C23.641 10.2262 24.3851 10.5197 25.1663 10.6005L25.6569 12.0721C25.6875 12.1641 25.7392 12.2478 25.8079 12.3164L26.0894 12.5979C26.2173 12.7258 26.3152 12.8805 26.3761 13.0508C26.437 13.2211 26.4593 13.4028 26.4415 13.5827C26.4237 13.7627 26.3661 13.9365 26.273 14.0916C26.1799 14.2466 26.0536 14.3791 25.9031 14.4794C25.7874 14.5565 25.7008 14.6699 25.6569 14.8017L24.7581 17.4979C24.4788 18.3351 24.0254 19.1036 23.4278 19.7531C22.8302 20.4025 22.1019 20.9181 21.2909 21.266L19.9998 21.8194L18.7087 21.266C17.8976 20.9181 17.1693 20.4025 16.5717 19.753C15.9741 19.1036 15.5208 18.335 15.2414 17.4978L14.3427 14.8017ZM15.6248 28.5512L12.6136 25.9702L14.3437 25.4296C14.8637 25.2676 15.3322 24.9723 15.7027 24.5732L16.4579 25.1126C17.0807 25.5575 17.7819 25.8808 18.5247 26.0655L15.6248 28.5512ZM19.9998 28.7494C19.6717 28.749 19.357 28.6197 19.1234 28.3894C18.8897 28.1591 18.7559 27.8462 18.7507 27.5182L19.9998 26.4476L21.2488 27.5183C21.2436 27.8463 21.1098 28.1591 20.8762 28.3894C20.6425 28.6197 20.3278 28.749 19.9998 28.7494ZM36.8748 37.4994H24.3748C24.2091 37.4992 24.0502 37.4333 23.933 37.3161C23.8159 37.199 23.75 37.0401 23.7498 36.8744V31.2494H37.4998V36.8744C37.4996 37.0401 37.4337 37.199 37.3165 37.3161C37.1993 37.4333 37.0405 37.4992 36.8748 37.4994Z" fill="black" />
                  </svg>
                  <span className='ml-5'>Опыт работы 30 лет</span>
               </div>
               <div className='p-6 py-4 border rounded border-gray-300'>
                  <svg className='inline-block' xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                     <path d="M39.9916 12.2966C39.9912 11.6127 39.7223 11.0095 39.2137 10.5524L33.1337 5.08711C32.3774 4.4075 31.4239 3.71289 30.0833 3.71289C30.0829 3.71289 30.0823 3.71289 30.0819 3.71289C28.7404 3.71336 27.7868 4.40891 27.0309 5.0893L20.9548 10.5588C20.4465 11.0163 20.178 11.6197 20.1782 12.3037L20.181 19.3232H16.1458C16.8761 17.8066 17.3848 15.4108 16.8135 13.6168C16.4115 12.3542 15.5261 11.5219 14.2531 11.2097C14.0906 11.1698 13.919 11.1968 13.7766 11.2845C13.6341 11.3722 13.5328 11.5134 13.4952 11.6764C13.4259 11.9774 13.3618 12.2596 13.3016 12.5248C12.5509 15.8306 12.4544 16.2555 10.3809 17.6107C8.91602 18.5681 8.81203 18.6917 7.90102 20.0208C7.80797 20.1566 7.70531 20.3063 7.59039 20.4725C7.22148 21.0061 6.74953 21.2467 6.06367 21.2527L6.01078 21.2529V21.1032C6.01078 20.3248 5.3775 19.6915 4.59898 19.6915H1.41172C0.633281 19.6915 0 20.3248 0 21.1032V34.8738C0 35.6523 0.633281 36.2855 1.41172 36.2855H4.59906C5.3775 36.2855 6.01086 35.6523 6.01086 34.8738V34.2331C6.29258 34.3314 6.57422 34.4362 6.86422 34.5445C8.28414 35.0748 9.89344 35.6759 12.2829 35.6759H20.5795C20.9331 35.6759 21.2697 35.6021 21.5752 35.4697C21.8752 35.6046 22.2002 35.6759 22.5334 35.6759H22.534L37.6543 35.6707C38.9482 35.6702 40.0005 34.6171 39.9999 33.3232L39.9916 12.2966ZM4.76086 34.8738C4.76086 34.9615 4.6868 35.0355 4.59906 35.0355H1.41172C1.32406 35.0355 1.25 34.9615 1.25 34.8738V21.1032C1.25 21.0155 1.32406 20.9415 1.41172 20.9415H4.59906C4.6868 20.9415 4.76086 21.0155 4.76086 21.1032V34.8738ZM12.2829 34.4259C10.1193 34.4259 8.68688 33.8909 7.30164 33.3735C6.88344 33.2173 6.45461 33.0572 6.01094 32.9142V22.5029L6.07117 22.5027C7.16297 22.4932 8.02016 22.0492 8.61875 21.1832C8.73469 21.0155 8.8382 20.8645 8.93211 20.7275C9.77227 19.5018 9.77227 19.5018 11.0648 18.657C13.5615 17.0252 13.7455 16.2143 14.5205 12.8016C14.532 12.751 14.5437 12.6996 14.5555 12.6477C15.0705 12.9211 15.422 13.3666 15.6225 13.996C16.2122 15.8479 15.2823 18.6989 14.5547 19.539C14.3945 19.7239 14.357 19.9853 14.4587 20.2079C14.5604 20.4305 14.7825 20.5732 15.0272 20.5732H22.1725C22.8688 20.5732 23.4353 21.1397 23.4353 21.836C23.4353 22.5323 22.8688 23.0989 22.1725 23.0989H17.2463C16.9012 23.0989 16.6213 23.3787 16.6213 23.7239C16.6213 24.0691 16.9012 24.3489 17.2463 24.3489H23.2048C23.9012 24.3489 24.4677 24.9154 24.4677 25.6117C24.4677 26.308 23.9012 26.8746 23.2048 26.8746H17.2463C16.9012 26.8746 16.6213 27.1545 16.6213 27.4996C16.6213 27.8448 16.9012 28.1246 17.2463 28.1246H22.5559C23.2523 28.1246 23.8188 28.6911 23.8188 29.3874C23.8188 30.0837 23.2523 30.6502 22.5559 30.6502H17.2463C16.9012 30.6502 16.6213 30.9301 16.6213 31.2752C16.6213 31.6204 16.9012 31.9002 17.2463 31.9002H20.5795C21.2759 31.9002 21.8424 32.4668 21.8424 33.1631C21.8424 33.8595 21.2759 34.4259 20.5795 34.4259H12.2829ZM37.6538 34.4207L22.7506 34.4259C22.9674 34.0545 23.0923 33.6233 23.0923 33.1631C23.0923 32.7001 22.9665 32.2659 22.7472 31.893C24.0438 31.7949 25.0688 30.7086 25.0688 29.3874C25.0688 28.7744 24.848 28.2119 24.482 27.7752C25.221 27.3373 25.7177 26.5313 25.7177 25.6117C25.7177 24.5826 25.0957 23.696 24.208 23.3079C24.5082 22.8939 24.6853 22.3853 24.6853 21.836C24.6853 20.4505 23.558 19.3232 22.1725 19.3232H21.4311L21.4283 12.3033C21.4282 11.9745 21.5469 11.7078 21.7912 11.4879L27.8673 6.01836C28.6998 5.26891 29.3416 4.9632 30.0824 4.96289H30.0834C30.8235 4.96289 31.4654 5.26828 32.2982 6.01672L38.3782 11.482C38.6227 11.7018 38.7416 11.9684 38.7417 12.2972L38.75 33.3237C38.7502 33.9284 38.2585 34.4205 37.6538 34.4207ZM33.837 25.9627C33.9285 26.717 33.7263 27.4054 33.2523 27.9534C32.6948 28.598 31.7684 29.0301 30.7141 29.1513V29.9463C30.7141 30.2915 30.4343 30.5713 30.0891 30.5713C29.744 30.5713 29.4641 30.2915 29.4641 29.9463V29.1423C27.9029 28.9277 26.6893 27.9405 26.338 26.5313C26.2545 26.1964 26.4583 25.8572 26.7932 25.7737C27.1284 25.6907 27.4673 25.8941 27.5509 26.2289C27.8746 27.5273 29.1812 27.9605 30.2023 27.935C31.079 27.9141 31.9051 27.6005 32.307 27.1358C32.5509 26.8538 32.6455 26.5193 32.5962 26.1133C32.4795 25.1523 31.6779 24.6008 29.9969 24.3248C27.3216 23.8855 26.6986 22.5287 26.6472 21.4679C26.5758 19.998 27.6048 18.7659 29.2079 18.4023C29.292 18.3834 29.3775 18.3669 29.4643 18.3532V17.5403C29.4643 17.1952 29.7441 16.9153 30.0893 16.9153C30.4345 16.9153 30.7143 17.1952 30.7143 17.5403V18.3479C31.8586 18.5173 32.9874 19.1802 33.5514 20.5236C33.685 20.8418 33.5354 21.2082 33.2171 21.3418C32.8988 21.4755 32.5325 21.3258 32.3989 21.0075C31.8568 19.7164 30.5445 19.3811 29.4844 19.6216C28.6833 19.8032 27.8452 20.3678 27.8958 21.4074C27.9116 21.733 27.9596 22.7237 30.1995 23.0914C31.0293 23.2275 33.5553 23.6423 33.837 25.9627ZM30.084 12.0936C31.3113 12.0936 32.3098 11.0952 32.3098 9.86781C32.3098 8.64047 31.3113 7.64203 30.084 7.64203C28.8566 7.64203 27.8581 8.64047 27.8581 9.86781C27.8581 11.0952 28.8566 12.0936 30.084 12.0936ZM30.084 8.89195C30.622 8.89195 31.0598 9.32977 31.0598 9.86773C31.0598 10.4057 30.622 10.8435 30.084 10.8435C29.5459 10.8435 29.1081 10.4057 29.1081 9.86773C29.1081 9.32977 29.5459 8.89195 30.084 8.89195Z" fill="black" />
                  </svg>
                  <span className='ml-5'>Разумная стоимость</span>
               </div>
               <div className='p-5 py-4 border rounded border-gray-300'>
                  <svg className='inline-block' xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                     <g clip-path="url(#clip0_2022_21)">
                        <path d="M0.453369 37.3419L0.971888 38.509L19.5784 30.7939L22.8199 31.183L23.9868 34.7487L22.4309 36.24C21.8475 36.7585 21.6531 37.6011 21.9773 38.3792L22.6256 40L33.3872 35.786L32.8038 34.2301C32.5445 33.452 31.8313 32.9984 30.9887 32.9984H28.8491L27.6822 30.2105L30.5347 28.7844C31.4423 28.3305 31.8313 27.2931 31.5072 26.3856L27.812 16.4666C27.423 15.4293 26.3207 14.9753 25.2834 15.2995C25.2834 15.2995 25.2188 15.2995 25.2188 15.3644L22.4958 16.5312L22.1067 15.5587L23.598 13.8085C24.6351 12.6413 25.2834 11.2153 25.4781 9.65939L27.3581 7.39032C28.5898 5.96392 28.3306 3.82463 26.9042 2.5926C26.6449 2.39823 26.3856 2.20387 26.1264 2.07408C25.4132 1.74993 24.7 1.68503 23.9222 1.87972L23.7275 1.29599C23.4034 0.258949 22.2365 -0.259886 21.2641 0.129161L7.58474 5.05635C6.54739 5.4454 6.02887 6.54733 6.41792 7.51979V7.58469L6.74207 8.42736C5.05641 9.20545 4.27831 11.1504 4.86173 12.836C5.31567 14.1326 6.48249 15.0402 7.844 15.2346L10.8912 15.5587C12.1229 16.4666 13.6139 17.05 15.1052 17.1795L17.2444 17.3742L17.6335 18.3466C17.1796 18.6059 16.8554 19.0598 16.7259 19.6432L16.272 21.8474L0.453369 28.2656L0.90731 29.4973L9.9836 25.8671L12.1878 32.4796L0.453369 37.3419ZM31.5072 34.6192L31.637 35.0079L23.3385 38.3144L23.1441 37.9253C23.0792 37.666 23.1441 37.4068 23.2739 37.2124L25.4781 35.1377L28.2657 34.2301H30.8589C31.183 34.2301 31.3777 34.3596 31.5072 34.6192ZM27.423 33.063L25.089 33.8411L24.2463 31.3777C24.6351 31.4422 24.9592 31.3777 25.2834 31.183L26.3856 30.6645L27.423 33.063ZM25.6724 16.3368C25.9966 16.207 26.3856 16.3368 26.5154 16.661L27.0339 18.0225L23.8573 19.0598L24.2463 20.2916L27.423 19.2542L28.2008 21.3289L25.1539 22.3659L25.543 23.598L28.6547 22.5606L29.4328 24.635L26.4505 25.6075L26.8396 26.8395L29.8864 25.8022L30.2106 26.6448C30.3404 26.969 30.2106 27.2931 29.8864 27.4229L24.7649 29.9513C24.6351 30.0162 24.5056 30.0162 24.3758 30.0162L19.9675 29.4973L17.5686 22.3014L18.0225 19.9025C18.0874 19.7081 18.2169 19.5135 18.4116 19.4486L25.6724 16.3368ZM25.6075 3.24091C26.6449 3.69485 27.1637 4.92657 26.7098 6.02881C26.6449 6.22318 26.5154 6.35297 26.3856 6.54733L25.6075 7.51979C25.543 6.87149 25.4132 6.28807 25.2188 5.63977L24.3758 3.11143C24.8298 3.04654 25.2188 3.11143 25.6075 3.24091ZM6.15834 12.5119C5.76961 11.4096 6.22323 10.2428 7.26059 9.72397L8.16815 11.9285C8.49231 12.7062 8.94625 13.4843 9.46477 14.1326L8.10326 14.0029C7.19569 13.938 6.41792 13.3546 6.15834 12.5119ZM15.3644 15.9478C12.7063 15.6885 10.3723 14.0029 9.39987 11.4745L7.71453 7.19564C7.58474 6.87149 7.71453 6.48244 8.03868 6.35297L21.7177 1.42577C21.9124 1.36088 22.0419 1.36088 22.2365 1.42577C22.366 1.49067 22.4958 1.62014 22.5607 1.81482L23.9868 6.09371C24.7649 8.49225 24.2463 11.0855 22.6256 12.9655L20.6158 15.2995L21.1992 16.8553L18.8652 17.8278L18.2169 16.207L15.3644 15.9478ZM11.2153 25.3482L12.7063 24.7648L14.3271 29.692L15.5588 29.303L13.8734 24.2463L16.4667 23.2089L18.6708 29.7569L13.4195 31.9611L11.2153 25.3482Z" fill="black" />
                        <path d="M32.4798 11.344V11.9923H33.7764V11.344C33.7764 9.52887 35.2028 8.10247 37.018 8.10247V6.80585C35.2028 6.80585 33.7764 5.37977 33.7764 3.56432V2.91602H32.4798V3.56432C32.4798 5.37977 31.0537 6.80585 29.2383 6.80585V8.10247C31.0537 8.10247 32.4798 9.52887 32.4798 11.344ZM33.1281 5.89829C33.5172 6.5466 34.0357 7.06543 34.684 7.45416C34.0357 7.84321 33.5172 8.36204 33.1281 9.01035C32.7391 8.36204 32.2206 7.84321 31.5722 7.45416C32.2206 7.06543 32.7391 6.5466 33.1281 5.89829Z" fill="black" />
                        <path d="M3.95442 24.3108V24.9591H5.25104V24.3108C5.25104 22.4957 6.67744 21.0693 8.49257 21.0693V19.7727C6.67744 19.7727 5.25104 18.3466 5.25104 16.5311V15.8828H3.95442V16.5311C3.95442 18.3466 2.52834 19.7727 0.712891 19.7727V21.0693C2.52834 21.0693 3.95442 22.4957 3.95442 24.3108ZM4.60273 18.8651C4.99178 19.5134 5.5103 20.0322 6.1586 20.421C5.5103 20.81 4.99178 21.3288 4.60273 21.9771C4.21368 21.3288 3.69516 20.81 3.04686 20.421C3.69516 20.0322 4.21368 19.5134 4.60273 18.8651Z" fill="black" />
                        <path d="M36.3694 16.5312V15.8829H35.0728V16.5312C35.0728 18.3467 33.6467 19.7728 31.8313 19.7728V21.0694C33.6467 21.0694 35.0728 22.4958 35.0728 24.3109V24.9592H36.3694V24.3109C36.3694 22.4958 37.7958 21.0694 39.611 21.0694V19.7728C37.7958 19.7728 36.3694 18.3467 36.3694 16.5312ZM35.7211 21.9773C35.3321 21.329 34.8136 20.8101 34.1653 20.4211C34.8136 20.0323 35.3321 19.5135 35.7211 18.8652C36.1102 19.5135 36.6287 20.0323 37.277 20.4211C36.6287 20.8101 36.1102 21.329 35.7211 21.9773Z" fill="black" />
                        <path d="M19.7079 11.5387L20.6155 12.4463C24.1812 8.88063 20.8747 3.43492 20.6804 3.24023L19.5781 3.95343C19.643 3.95343 22.5604 8.68626 19.7079 11.5387Z" fill="black" />
                     </g>
                     <defs>
                        <clipPath id="clip0_2022_21">
                           <rect width="40" height="40" fill="white" />
                        </clipPath>
                     </defs>
                  </svg>
                  <span className='ml-5'>Работает под ключ</span>
               </div>
            </div>
         </div>
      </section >
      <Footer />
      </>
   )
}

export default Quiz