import React from "react"
import { Title, TitleLogo } from "./common/Title"

const Banner = () => {
  return (
    <>
      <section className='banner'>
        <div className='container'>
          <div>
            <Title title='We are excited to be at your service' /> <br />
            <TitleLogo title='Let us take your business to the next level!' />
          </div>
          <div>
            <button className='button-primary'>Talk to Us</button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Banner
