import { home } from "@/assets/data/dummydata"
import Banner from "@/components/Banner"
import Expertise from "@/components/Expertise"
import Testimonial from "@/components/Testimonial"
import { Title, TitleLogo, TitleSm } from "@/components/common/Title"
import {Brand } from "@/components/router"
import React from "react"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <TitleLogo title='Technologies' caption='Arctic' className='logobg' />
          <h1 className='hero-title'>LET'S BUILD YOUR SOFTWARE NEEDS</h1>

          <div className='sub-heading'>
            <TitleSm title='WEBSITE DEVELOPMENT' /> <span>.</span>
            <TitleSm title='APP DEVELOPMENT' /> <span>.</span>
            <TitleSm title='DIGITAL MARKETING' />
          </div>
        </div>
      </section>
      <section className='hero-sec'>
        <div className='container'>
          <div className='heading-title'>
            <Title title='The best digital agency at your service' />
            <p>Welcome to Arctic technologies, where innovation meets excellence in website and app development, alongside cutting-edge digital marketing solutions. As trailblazers in the industry, we take pride in delivering unparalleled services that transcend expectations and redefine success.</p>
          </div>
          <div className='hero-content grid-4'>
            {home.map((item, i) => (
              <div className='box' key={i}>
                <span className='green'>{item.icon}</span> <br />
                <br />
                <h3>{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Expertise />
      <Banner />
      <Testimonial />
      <Brand />

      <div className='text-center'>
        <Title title='News & articles' />
      </div>

    </>
  )
}

export default Hero
