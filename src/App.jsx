import { useState,useEffect,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Landing from './components/landing'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
function App() {
  const [match, setmatch] = useState(null)
 const [toggle, settoggle] = useState(true)
 const [result, setresult] = useState()
 const [language, setlanguage] = useState('en-US')
 const li = useRef()
 const li1 = useRef()
 const li2 = useRef()
 const li3 = useRef()
  const resultfilter = (index) => {
    const selectedmatch = match[index]
    if (selectedmatch && selectedmatch.replacements.length >= 1) {
      
      setresult(selectedmatch.replacements.slice(0, 2));
    }
    //setresult(match.filter(match => match.replacements && match.replacements.length > 0))
   
    
   li.current.innerHTML=result[0]?.value || ""
  li1.current.innerHTML=result[1]?.value || ""
  li2.current.innerHTML=result[2]?.value || ""
  li3.current.innerHTML=result[2]?.value || ""
  } 
  
  const [text, settext] = useState("")
  const fetchdata = async () => {
    let a=  await fetch('https://api.languagetoolplus.com/v2/check', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        enabledCategories: "GRAMMAR,TYPOGRAPHY,STYLE,SPELLING,SEMANTICS",
        disabledCategories: "CASING",
          text: text,
          language: language,
          enabledRules: "MORPHOLOGY_RULE, COMMA_SPLICE, REDUNDANT_WORD, PASSIVE_VOICE, CLICHE, TYPOGRAPHY",
          
      }),
  })
  let data = await a.json()
  
 
 
setmatch(data.matches)

  }
  
  useEffect(() => {
   fetchdata();
   

  }, [])
  


const change = (e) => {
  settext(e.target.value);
  settoggle(false)
}


const add = async() => {
 fetchdata();
 settoggle(true) 
}
const options = (e) => {
 
  setlanguage(e.target.value)
  fetchdata();
}



  return (
    <>
   
    <Navbar/>
    <Landing/>
    <div className='options justify-center text-center bg-lime-100 pt-2 pb-8 mt-10'  >
      <h1 className='font-bold text-2xl mb-10 mt-8 bg-'> Choose Language</h1>
      <select className='border-black border rounded-lg' onChange={options}>
    <option value="en-US">English-US</option>
    <option value="en-GB">English-UK</option>
    <option value="fr">French</option>
    <option value="es">Spanish</option>
    <option value="ja-JP">Japanese</option>
    <option value="de">German</option>
    
    </select></div>
    <div className='container md:ml-12 mt-20 p-2 gap-8 w-full items-stretch  mx-auto   flex justify-between'>
    <div className='input md:flex-1 bg-teal-100   p-4 rounded-2xl  text-black'>
      <h1 className='font-bold text-2xl mb-12 ml-28'>Heading</h1>
      <textarea className='border border-black shadow-teal-500 w-[300px] h-40 pt-2 pl-1 rounded-3xl text-black  ' type='text'  value={text} onChange={change} placeholder='Enter your text here'></textarea>
      <button className='border-2 shadow-lg shadow-black border-teal-500  rounded-xl bg-white   text-black p-1 h-8  text-sm ' disabled={toggle} onClick={add}>Submit</button>
      </div><div className='bg-red-100 p-4 md:flex-1 rounded-2xl  text-wrap  '>
      <h1 className='font-bold text-2xl mb-8 ml-28'>Mistakes</h1>
      {match==undefined?console.log("started"):
   match.length==0 ?<div>No error</div>:
  <div>  <ul>
{match.map((item,index) =>{
  return(
    <>
      <br></br>
      <li className='list-decimal text-wrap whitespace-nowrap '>{item.message}</li>
      <button  onClick={()=>resultfilter(index)}><span className='text-blue-800 underline'>Double click for Suggetion </span></button>
      
     
     <p>
     
     </p>
      
            </>
    
  )
})}

    </ul></div>
    
    
 }</div>
 <div className=' bg-blue-100 md:flex-1 rounded-2xl p-4'  >
  <h1 className='font-bold text-2xl  mb-8 ml-28 '>Suggetions</h1>
  <ul className=''>
    <li className='mb-3' ref={li}> </li>
    <li  className='mb-3' ref={li1}> </li>
    <li  className='mb-3' ref={li2}> </li>
    <li className='mb-3' ref={li3}> </li>
  </ul>
 
 </div></div>
 <Footer/>
 
    </> 
  )
}

export default App
