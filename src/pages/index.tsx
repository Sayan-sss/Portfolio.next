import Head from 'next/head'
import Header from '../../components/Header'
import Hero from '../../components/Hero'
import { NextPage } from 'next'
import About from '../../components/About'

const Home: NextPage = () => {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0'>
      <Head>
        <title>Sayan's Portfolio</title>
      </Head>
      
      <Header/>

      <section id='hero' className='snap-start'>
        <Hero />
      </section>

      {/* About */}
      <section id='about' className='snap-center'>
        <About />
      </section>

      {/* Skills */}

      {/* Projects */}

      {/* Contact Me */}
    </div>
  )
}

export default Home;