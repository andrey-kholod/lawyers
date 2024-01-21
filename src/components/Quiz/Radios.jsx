import { useState } from "react"

const Radios = ({ answers, setCheckedValueToResult }) => {
   const [chechedValue, setCheckedValue] = useState('1')

   const clickToCheck = (e) => {
      setCheckedValue(e.target.value)
      console.log(chechedValue)
   }

   return (
      <div className='for-r mb-14'>
         {answers.map((e, i) => (<div key={i} className='mb-4'>
            <input type='radio' value={i + 1} name='radio' onChange={e => {
               clickToCheck(e)
               setCheckedValueToResult(e.target.value)
            }} checked={chechedValue == i + 1 ? true : false} />
            <label className={`${chechedValue == i + 1 ? 'font-bold' : ''}`}>{e}</label>
         </div>))}
      </div>
   )
}

export default Radios