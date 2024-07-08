import { useContext, useEffect, useState } from 'react'
import './ContactUs.css'
import { ContextTheme } from '../../context/contextTheme'
export default function ContactUs(){
    const  { theme, handleTheme } = useContext(ContextTheme)
    const [val2,setVal2] = useState(0)
    const [val,setVal] = useState('item')
    useEffect(() => {
        setVal2(val2+1)
        handleTheme()
      }, [val]);
    return(
        <main>
            <div className='container_text'>
                <h1 className='title-contact'>Contact Us</h1>
                <div className='content_text'>
                    <p>Have a question about our streaming or fan-merch policies? Want to pledge money? Looking to intern? We have some answers to frequently asked questions in our new FAQ section!</p>
                    <p><strong>Please use <strong style={{color:'hsla(352.82608696,80%,54.90196078%,1)'}}>this form</strong> to report bugs</strong></p>
                    <p>For other questions, or if you just want to chat, use the contact form below.</p>
                    <ul>
                        PLEASE NOTE: 
                        <li>
                        We are not sending out any game previews, reaching out to fans, or requesting media partnerships at this time.
                        </li>
                        <li>
                        There have been several reports of scam emails being sent to fans and media, pretending to be Team Cherry. If you have received an email from someone CLAIMING TO BE TEAM CHERRY, please be cautious.
                        </li>
                    </ul>
                </div>
            </div>
            <div className='form-container'>
                <label className='input-label'>
                   {theme}
                </label>
                <label className='input-label'>
                   {val2}
                </label>
                <label className='input-label'>
                   {val }
                </label>
                <input type='text' value={val} onChange={(e)=>setVal(e.target.value)}/>
            </div>
        </main>
    )
}