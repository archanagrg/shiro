import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>

      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'> 
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p> At Shiro, we believe fashion is more than just clothing, it’s a way to express who you are. Founded with a passion for style, quality, and individuality, Shiro creates collections that let you feel confident, comfortable, and unique. Every piece is thoughtfully designed to combine trend-forward aesthetics with everyday wearability, so you can stand out effortlessly. Our mission is to inspire self-expression and build a community of fashion enthusiasts who value creativity, authenticity, and style.</p>
          <p>Born from a passion for fashion and self-expression, Shiro is committed to building a community where everyone can celebrate their uniqueness. From bold statement pieces to everyday essentials, our goal is to inspire confidence, spark creativity, and make every outfit a reflection of your personality. With Shiro, fashion isn’t just what you wear—it’s who you are.</p>

          <b className='text-gray-800'>Our Mission</b>
          <p>Our mission at Shiro is to empower individuals to express themselves through fashion. We strive to create stylish, high-quality clothing that blends creativity, comfort, and confidence, helping our community stand out and embrace their unique identity. With every collection, we aim to inspire self-expression, celebrate individuality, and make fashion a reflection of who you are.</p>

        
        </div>

      </div>
      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>

      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'> 
          <b>Quality Assurance</b>
          <p className='text-gray-600'>At Shiro, quality is our top priority. Every piece of clothing is carefully crafted with premium materials and attention to detail, ensuring durability, comfort, and style that lasts.</p>

        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'> 
          <b>Convenience</b>
          <p className='text-gray-600'>We make fashion easy for you. From effortless browsing to smooth ordering and fast delivery, Shiro is designed to give you a seamless shopping experience, so you can enjoy your favorite styles without any hassle.</p>

        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'> 
          <b>Exceptional Customer Service</b>
          <p className='text-gray-600'>Our customers are at the heart of everything we do. Shiro is committed to providing friendly, responsive, and personalized support, making sure your shopping journey is always enjoyable and satisfying.</p>

        </div>

      </div>
      <NewsletterBox/>
      
    </div>
  )
}

export default About
