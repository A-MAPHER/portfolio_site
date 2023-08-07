'use client'
import Image from 'next/image'
import { BsFillMoonStarsFill, BsSun } from 'react-icons/bs';
import { AiFillLinkedin, AiFillTwitterCircle, AiFillYoutube, AiFillHeart } from 'react-icons/ai'
import profile from "../../public/profile.png"
import programming from '../../public/programming_pic.jpg'
import designer from '../../public/designer_pic.jpg'
import security from '../../public/security_pic.jpg'
import { useState } from 'react'
import Lottie from 'lottie-react'
import nextAnimation from '../../public/animation_nextjs.json'
import fullStack from '../../public/animation_fullstack.json'
import nodejs from '../../public/animation_nodejs.json'
import reactAnimation from '../../public/animation_react.json'
export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [darkToggel, setdarkToggle] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      < main className=' bg-white dark:bg-gray-900 px-10  text-black md:px-12' >
        <section className=''>
          <nav className='py-6 mb-8 flex justify-between'>
            <h1 className='font-burtons dark:text-white text-xl'>Ahmed</h1>
            <ul className='flex items-center'>
              <li>
                {
                  darkMode ?

                    <BsSun className='text-lg font-bold text-white cursor-pointer' onClick={() => { setDarkMode(!darkMode); setdarkToggle(!darkToggel) }} />
                    :
                    <BsFillMoonStarsFill className="cursor-pointer text-lg" onClick={() => { setDarkMode(!darkMode); setdarkToggle(!darkToggel) }} />
                }
              </li>

              <li><a href="#" className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8 cursor-pointer'>Resume</a></li>
            </ul>
          </nav>
          <div className='relative mx-auto w-80 h-80 bg-gradient-to-b from-cyan-500 rounded-full overflow-hidden'>
            <Image src={profile} alt='Picture of Author' layout='fill' />
          </div>
          <div className='text-center p-8 dark:text-white'>
            <h2 className='text-5xl py-2 text-cyan-600 font-medium md:text-6xl' >Ahmed Hussain</h2>
            <h3 className='text-2xl py-2 md:text-3xl'>Web Developer and Tester</h3>
            <p className='text-md py-2 leading-8 md:text-xl'>Crafting digital experiences through code and creativity. Explore a showcase of my web development and design journey, where innovation meets aesthetics to bring ideas to life.</p>
          </div>
          <div className='text-4xl flex justify-center gap-16 py-2 text-gray-600'>
            <a href="https://twitter.com/ahmedmapher7">
              <AiFillTwitterCircle className="cursor-pointer dark:text-white" />
            </a>
            <AiFillYoutube className="cursor-pointer dark:text-white" />
            <a href="https://www.linkedin.com/in/ahmed-hussain-74804a19b/">
              <AiFillLinkedin className="cursor-pointer dark:text-white" />
            </a>
          </div>
        </section>
        <section className='my-6'>
          <div className='dark:text-white text-center'>
            <h3 className='text-3xl py-1 font-burtons'>Services</h3>
            <p className='text-md py-2 leading-8'>Transforming Visions into Digital Experiences: With a skillful fusion of cutting-edge web development and eye-catching design, I create immersive online landscapes. From responsive layouts to intuitive user interfaces, my services bring ideas to life, one pixel at a time.</p>
            <p className='text-md py-2 leading-8 text-gray-800'>I offer from a wide range of service, including programming and teaching.</p>
          </div>
          {/* Cards section starts from here */}
          <div className='flex gap-10 md:gap-2 lg:gap-8 text-white dark:text-black flex-wrap'>
            <div className="mx-auto card w-96 bg-gray-900 shadow-xl my-2 overflow-hidden dark:bg-cyan-500">
              <div className='h-1/2'>
                <Image src={programming} className='h-full block' alt="Programming Pic" />
              </div>
              <div className="card-body h-1/2">
                <h2 className="card-title ">
                  Programming
                </h2>
                <p>Logic and Innovation Unleashed: Explore elegant JavaScript solutions and robust C++ systems—where every code line ignites boundless possibilities.</p>
              </div>
            </div>
            <div className="mx-auto card w-96 bg-gray-900 shadow-xl my-2 overflow-hidden dark:bg-cyan-500">
              <div className='h-1/2'>
                <Image src={designer} className='h-full block' alt="Designer" />
              </div>
              <div className="card-body h-1/2">
                <h2 className="card-title ">
                  Design UI/UX
                </h2>
                <p>Elevating Design: Discover the fusion of creativity and efficiency in Tailwind CSS and DaisyUI. Watch as I craft captivating, seamless user interfaces—turning concepts into reality</p>
              </div>
            </div>
            <div className="mx-auto card w-96 bg-gray-900 shadow-xl my-2 overflow-hidden dark:bg-cyan-500">
              <div className='h-1/2'>
                <Image src={security} className='h-full block' alt="Shoes" />
                </div>
              <div className="card-body">
                <h2 className="card-title ">
                  Security
                </h2>
                <p>Digital Guardianship: Armed with Burp Suite and meticulous testing, I uncover vulnerabilities, reinforce defenses, and ensure ironclad protection for your valuable digital assets.</p>
              </div>
            </div>
          </div>
        </section>
        <section className=' mx-6'>
          <div className='text-center dark:text-white'>
            <h3 className='text-3xl py-1 font-burtons'>Skills</h3>

            <p className='text-md py-2 leading-8'>With expertise spanning Next.js, Node.js, TypeScript, and React, I effortlessly blend robust backend development with sleek frontend innovation. My mastery of Tailwind CSS ensures visually striking designs that harmonize seamlessly with functional code. Crafting immersive digital experiences is my passion, and I thrive on pushing the boundaries of what`&apos;`s possible in the ever-evolving world of web development.</p>
          </div>

          <div className='md:flex md:gap-4  flex flex-wrap'>
            <div className="bg-white mx-auto  card w-96 shadow-xl my-2 overflow-hidden">
              <div className="card-body">
                <h2 className="card-title text-center">NEXTJS</h2>
                <Lottie animationData={nextAnimation} />
              </div>
            </div>
            <div className="bg-white  mx-auto card w-96 shadow-xl my-2 overflow-hidden">
              <div className="card-body text-center">
                <h2 className="card-title ">Full-Stack</h2>
                <Lottie animationData={fullStack} />
              </div>
            </div>
            <div className="bg-white mx-auto card w-96 shadow-xl my-2 overflow-hidden">
              <div className="card-body text-center">
                <h2 className="card-title ">NodeJs</h2>
                <Lottie animationData={nodejs} />
              </div>
            </div>
            <div className="bg-white mx-auto card w-96 shadow-xl my-2 overflow-hidden">
              <div className="card-body text-center">
                <h2 className="card-title ">React</h2>
                <Lottie animationData={reactAnimation} />
              </div>
            </div>
          </div>
        </section>
        <footer>
          <div className='text-center flex gap-2 py-4 items-center justify-center dark:text-white'>

            <h3 className=''>Copyright 2023 | made by Ahmed with</h3>
            <span>
              <AiFillHeart className=' text-pink-600 text-xl' />
            </span>
          </div>
        </footer>
      </ main>
    </div >
  )
}