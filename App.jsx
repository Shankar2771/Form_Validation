// import React, { useState } from 'react'

// const App = () => {

//   let[formData,setFormData]=useState({
//     required:"",
//     minlength:"",
//     maxlength:"",
//     valuelength:"",
//     minrange:"",
//     maxrange:"",
//     rangeval:"",
//     password:"",
//     confirmpass:""
//   })

//   let{required,minlength,maxlength,valuelength,minrange,maxrange,rangeval,password,confirmpass}=formData;

//   // ! store all errors
//   let [errors,setErrors]=useState({})

//   let handleChange=(e)=>{
//     let{name,value}=e.target
//     setFormData({
//       ...formData,
//       [name]:value
//     })

//   }

//   let handleSubmit=(e)=>{
//     e.preventDefault();

//     let validate = {} // store error

//     // ! 1st input
//     if(required===""){
//       validate.required="Thi field is mandatory ! ! !"
//     }

//     // ! 2nd input
//     if(minlength===""){
//       validate.minlength="please fill the data"
//     }else if(minlength.length<6){
//       validate.minlength="Length of the data should be minimum 6 characters"
//     }

//     // ! 3rd input
//     if(maxlength===""){
//       validate.maxlength="please fill the data"
//     }else if(maxlength.length>6){
//       validate.maxlength="Length of the data should be maximum 6 characters"
//     }

//     // ! 4th input field
//     if(valuelength===""){
//       validate.valuelength="Please fill the data";
//     }else if(valuelength.length<6 || valuelength.length >12){
//       validate.valuelength="Length of the data should be in between 6 to 12 characters"
//     }

//     // ! minimum range
//     if(minrange===""){
//       validate.minrange="Please fill the data"
//     }else if(minrange<6){
//       validate.minrange="Range should be above or equal to 6"
//     }

//     // ! maximum range
//     if(maxrange===""){
//       validate.maxrange="Please fill the data"
//     }else if(maxrange>6){
//       validate.maxrange="Range should be below or equal to 6"
//     }

//     // ! range val
//     if(rangeval===""){
//       validate.rangeval="Please fill the data"
//     }else if(rangeval <6 || rangeval > 12){
//       validate.rangeval="Range should be between 6 to 12"
//     }

//     // ! password
//     if(password===""){
//       validate.password="Please enter a password"
//     }

//     // ! confirm password
//     if(confirmpass===""){
//       validate.confirmpass="Please confirm the password"
//     }else if(password!==confirmpass){
//       validate.confirmpass="Password is not matching"
//     }
//     setErrors(validate)   // ? transfering error into state variable
//   }


//   return (
//     <>
//     <section className='h-max w-1/3 border-2 border-red-800 absolute top-2 left-96 flex justify-center align-middle rounded-3xl'>
//         <form onSubmit={handleSubmit}>
//           <h1 className='text-4xl text-orange-600 border-b-2 border-violet-500'>Form Validation</h1><br/>
//           <section>
//             <label htmlFor="req">Required Field: </label>
//             <div>
//             <input className='outline-none caret-red-600 border-b-2 border-green-600 placeholder-blue-300 w-64 text-xs'
//             type="text" 
//             id="req" 
//             placeholder='This field is required' 
//             value={required} 
//             name='required'
//             onChange={handleChange}/>
//             <div className='text-red-500 text-xs'>{errors.required && <span>{errors.required}</span>}</div>
//             </div>
//             </section>
//           <section>
//             <label htmlFor="minLen">Minimum Length: </label>
//             <div>
//             <input className='outline-none caret-red-600 border-b-2 border-green-600 placeholder-blue-300 w-64 text-xs'
//             type="text" 
//             id='minLen' 
//             placeholder='Enter minimum of 6 characters' 
//             value={minlength} 
//             name='minlength'
//             onChange={handleChange}/>
//             </div>
//             <div className='text-red-500 text-xs'>{errors.minlength && <span>{errors.minlength}</span>}</div>
//           </section>
//           <section>
//             <label htmlFor="maxLen">Maximum Length: </label>
//             <div>
//             <input className='outline-none caret-red-600 border-b-2 border-green-600 placeholder-blue-300 w-64 text-xs'
//             type="text" 
//             id='maxLen' 
//             placeholder='Enter maximum of 6 characters' 
//             value={maxlength} 
//             name='maxlength'
//             onChange={handleChange}/>
//             </div>
//             <div className='text-red-500 text-xs'>{errors.maxlength && <span>{errors.maxlength}</span>}</div>
//             </section>
//             <section>
//               <label htmlFor="valuele">ValueLength:</label>
//               <div>
//               <input className='outline-none caret-red-600 border-b-2 border-green-600 placeholder-blue-300 w-64 text-xs'
//               type="text" 
//               id='valuelen' 
//               placeholder='Enter characters in between 6 to 12'
//               value={valuelength}
//               name='valuelength'
//               onChange={handleChange} />
//               </div>
//               <div className='text-red-500 text-xs'>{errors.valuelength && <span>{errors.valuelength}</span>}</div>
//             </section>
//             <section>
//               <label htmlFor="minRan">Minimum Range:</label>
//               <div>
//                 <input className='outline-none caret-red-600 border-b-2 border-green-600 placeholder-blue-300 w-64 text-xs'
//                 type="number" 
//                 id='minRan' 
//                 value={minrange} 
//                 name='minrange' 
//                 onChange={handleChange}/>
//               </div>
//               <div className='text-red-500 text-xs'>{errors.minrange && <span>{errors.minrange}</span>}</div>
//             </section>
//             <section>
//               <label htmlFor="maxRan">Maximum Range:</label>
//               <div>
//                 <input className='outline-none caret-red-600 border-b-2 border-green-600 placeholder-blue-300 w-64 text-xs'
//                 type="number" 
//                 id='maxRan' 
//                 value={maxrange} 
//                 name='maxrange' 
//                 onChange={handleChange}/>
//               </div>
//               <div className='text-red-500 text-xs'>{errors.maxrange && <span>{errors.maxrange}</span>}</div>
//             </section>
//             <section>
//               <label htmlFor="ranVal">Range Value:</label>
//               <div>
//                 <input className='outline-none caret-red-600 border-b-2 border-green-600 placeholder-blue-300 w-64 text-xs'
//                 type="number" 
//                 id='ranVal' 
//                 value={rangeval} 
//                 name='rangeval' 
//                 onChange={handleChange} />
//               </div>
//               <div className='text-red-500 text-xs'>{errors.rangeval && <span>{errors.rangeval}</span>}</div>
//             </section>
//             <section>
//               <label htmlFor="">Password:</label>
//               <div>
//                 <input className='outline-none caret-red-600 border-b-2 border-green-600 placeholder-blue-300 w-64 text-xs'
//                 type="password" 
//                 placeholder='Enter Your Password' 
//                 value={password}
//                 name='password'
//                 onChange={handleChange}
//                 />
//               </div>
//               <div className='text-red-500 text-xs'>{errors.password && <span>{errors.password}</span>}</div>
//               <div>
//                 <input className='outline-none caret-red-600 border-b-2 border-green-600 placeholder-blue-300 w-64 text-xs'
//                 type="password" 
//                 placeholder='Confirm Password'
//                 value={confirmpass}
//                 name='confirmpass'
//                 onChange={handleChange}
//                 />
//               </div>
//               <div className='text-red-500 text-xs'>{errors.confirmpass && <span>{errors.confirmpass}</span>}</div>
//             </section>
//             <div>
//               <button className='border-2 border-blue-300 bg-slate-300 rounded-md m-3 ml-20'>Submit</button>
//             </div>
//         </form>
//         </section>    
//     </>
//   )
// }

// export default App

// ! form validation by regular expression

import React from 'react'
import { useState } from 'react';

const App = () => {

  let[formData,setFormData]=useState({
    email:"",
    url:"",
    digit:"",
    number:"",
    alphanum:""
  })

  let{email,url,digit,number,alphanum}=formData

  // ! to store error

  let [error,setError]=useState({})

  let handleChange=(e)=>{
    console.log(e)
    let{name,value}=e.target
    setFormData({...formData,[name]:value})
  }

  let handleSubmit=(e)=>{
    e.preventDefault()

    let validate={}

    // ! email validation
    let emailRegex=/\S+@\S+\.\S+/
    if(email===""){
      validate.email="please fill the data"
    }else if(!emailRegex.test(email)){
      validate.email="Email Pattern is not matching"
    }

    // ! url validation
    let urlRegex=/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/
    if(url===""){
      validate.url="Please fill the data"
    }else if(!urlRegex.test(url)){
      validate.url="Url pattern is not matching"
    }

    // ! digit validation
    let digitRegex=/^[0-9]+$/
    if(digit===""){
      validate.digit="please fill the data"
    }else if(!digitRegex.test(digit)){
      validate.digit="digit pattern is not matching, Only whole number"
    }

    // ! Number Validation
    let numRegex= /^-?\d+(?:\.\d+)?$/
    if(number===""){
      validate.number="Please fill the field"
    }else if(!numRegex.test(number)){
      validate.number="Number pattern is not matching"
    }

    // ! Alpha Numeric
    let alphaNumericRegex=/^[a-zA-Z0-9\s]+$/
    if(alphanum===""){
      validate.alphanum="please fill the field"
    }else if(!alphaNumericRegex.test(alphanum)){
      validate.alphanum="Alpha Numeric pattern is not matching"
    }


    setError(validate)   // passing error to store at state
  }

  let handleReset=(e)=>{
    e.preventDefault()
    setFormData({
      email:"",
      url:"",
      digit:"",
      number:"",
      alphanum:""
    })
  }

  return (
    <>
    <section className='h-max w-1/3 border-2 border-red-800 absolute top-2 left-96 flex justify-center align-middle rounded-3xl'>
    <form>
      <h1 className='text-2xl text-orange-600 border-b-2 border-violet-500'>Form Validation Using Regex</h1>
      <br />
      <section >
        <label htmlFor="em">EMAIL:</label>
        <input type="text" className='outline-none caret-red-600 border-b-2 border-green-600'
        id='em'
        value={email}
        name='email'
        onChange={handleChange} />
        <div className='text-red-500 text-xs'>{error.email && <span>{error.email}</span>}</div>
      </section>
      <section>
        <label htmlFor="ur">URL:</label>
        <input type="text" className='outline-none caret-red-600 border-b-2 border-green-600'
        id='ur'
        value={url}
        name='url'
        onChange={handleChange} />
        <div className='text-red-500 text-xs'>{error.url && <span>{error.url}</span>}</div>
      </section>
      <section>
        <label htmlFor="dig">Digits:</label>
        <input type="text" className='outline-none caret-red-600 border-b-2 border-green-600'
        id='dig'
        value={digit}
        name='digit'
        onChange={handleChange}/>
        <div className='text-red-500 text-xs'>{error.digit && <span>{error.digit}</span>}</div>
      </section>
      <section>
        <label htmlFor="num">Numbers:</label>
        <input type="text" className='outline-none caret-red-600 border-b-2 border-green-600'
        id='num'
        value={number}
        name='number'
        onChange={handleChange}/>
        <div className='text-red-500 text-xs'>{error.number && <span>{error.number}</span>}</div>
      </section>
      <section>
        <label htmlFor="alpha">Alpha Numeric:</label>
        <input type="text" className='outline-none caret-red-600 border-b-2 border-green-600'
        id='alpha'
        value={alphanum}
        name='alphanum'
        onChange={handleChange}/>
        <div className='text-red-500 text-xs'>{error.alphanum && <span>{error.alphanum}</span>}</div>
      </section>
      <br />
      <section>
        <button className='border-2 border-blue-300 bg-slate-300 rounded-md m-3 ml-20' onClick={handleSubmit}>Submit</button>
        <button className='border-2 border-blue-300 bg-slate-300 rounded-md m-3 ml-20' onClick={handleReset}>Reset</button>
      </section>
    </form>
    </section>
    </>
    
  )
}

export default App

