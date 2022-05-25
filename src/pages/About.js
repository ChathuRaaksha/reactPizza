import React from 'react'
import MultiplePizza from '../assets/multiplePizzas.jpeg';
import '../styles/About.css';
function About() {
  return (
    <div className='about'>
      <div className='aboutTop'style={{backgroundImage:`url(${MultiplePizza})`}}></div>
      <div className='aboutBottom'>
        <h1>ABOUT US</h1>
        <p>
        Pizza Hut, a subsidiary of Yum! Brands, is the world's largest pizza company and home of Pan Pizza. Pizza Hut began 60 years ago in Wichita, Kansas, and today is an iconic global brand that delivers more pizza, pasta and wings than any other restaurant in the world.


Since its inception in 1993, Pizza Hut has fast become a household name across Sri Lanka. With its first restaurant at Union Place, Colombo 2, Pizza Hut became the first international restaurant chain to begin operations in Sri Lanka. Pizza Hut is a brand name belonging to global restaurant chain Yum Brands Incorporated which is based in USA. It is the world's largest restaurant company which also owns KFC & Taco Bell.
        </p>
      </div>
    </div>
  )
}

export default About