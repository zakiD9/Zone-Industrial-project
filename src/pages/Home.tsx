'use client'
import { Button } from '@mui/material'
import Header from '../components/Home/Header'
import ServiceBox from '../components/Home/ServiceBox'
import { ArrowRight } from '@mui/icons-material'
import Footer from '../components/Home/Footer'
import Contact from '../components/Home/Contactus'

  const services = [
    {
      title: "Web Development",
      description: "Build fast, modern, and responsive websites.",
      image: "https://dummyimage.com/720x400",
      link: "#",
    },
    {
      title: "UI/UX Design",
      description: "Craft beautiful and user-friendly interfaces.",
      image: "https://dummyimage.com/721x401",
      link: "#",
    },
    {
      title: "SEO Optimization",
      description: "Improve your site's ranking on search engines.",
      image: "https://dummyimage.com/722x402",
      link: "#",
    },
  ];

export default function Home() {

  return (
    <div className="bg-white">
      <Header />
      <div id='home' className="relative isolate px-6 pt-14 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75"
          />
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">
              Data to enrich your online business
            </h1>
            <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
              fugiat veniam occaecat.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-3">
              <Button variant="contained">Get Started</Button>
              <Button
                size="small"
                endIcon={<ArrowRight />}
                onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
              >Our services</Button>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-288.75"
          />
        </div>
      </div>
      <div id="services" className='flex flex-col items-center py-5'>
        <h1 className='text-3xl font-semibold'>Our Services</h1>
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4">
              {services.map((service, index)=>(<ServiceBox key={index} service={service}/>))}
              
            </div>
          </div>
        </section>
      </div>
      <Contact />
      <Footer />
    </div>
  )
}
