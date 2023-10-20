import React from 'react'

export default function Header() {
  return (
    <div className='header'>

      <div className='sub-header-1'>
        <h1 className='main-header-text-1'>
          Let's Build Something amazing with GPT-3 OpenAi 
        </h1>
        <p className='header-paragraph'>
          Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise
          blessing. indulgence way everything joy alteration bosterous he attatchment. parth we years to order allow to asked of.
        </p>
        <div>
          <input type='text' placeholder='Your Email Address' className='header-input'/>
          <button className='header-btn'>Get Started</button>
          </div>
        <div>
          <img src='./Group 81.png' alt='people' className='people' />
          <p>1,500 people requested this in 24 hours</p>
        </div>
      </div>

      <div className='Gpt-pic-container'>
        <img src='./Illustration.png' alt='Gpt-pic' className='Gpt-pic' />
      </div>

    </div>
  )
}


