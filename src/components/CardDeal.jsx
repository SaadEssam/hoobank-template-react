import React from 'react'
import { card } from '../assets'
import styles, { layout } from '../style'
import Button from './Button'

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>Find a better card deal <br className="sm:block hidden" /> in few easy steps.</h2>
      <p className={`${styles.paragraph} max-w-[550px] mt-5`}>- Check your credit. <br /> - Identify which type of credit card you need. <br /> - Narrow your choices by asking the right questions. <br /> - Apply for the card that offers you the highest overall value.</p>
      <Button props="mt-5" />
    </div>
    
    <div className={layout.sectionImg}>
      <img src={card} alt="card" className="w-[100%] h-[100%]" />
    </div>
  </section>
)

export default CardDeal