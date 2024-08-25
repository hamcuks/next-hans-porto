import FeatherIcon from 'feather-icons-react'
import Link from 'next/link'
import React from 'react'

export default async function Hero() {
  return (
    <section className="px-4 py-16 md:px-32 md:h-5/6 md:w-10/12 flex flex-col justify-center">
        <div>
            <div className="pb-14">
                <div className="flex flex-col md:flex-row mb-8">
                    <div className="md:flex-auto md:w-64 md:mr-16 order-2 md:order-1">
                        <h1 className="text-2xl md:text-5xl font-bold md:leading-snug">Hi 👋</h1>
                        <h1 className="text-2xl md:text-5xl font-bold md:leading-snug pb-6">Lifelong Learner, a professional mobile app developer, iOS & Flutter enthusiast.</h1>
                    </div>
                    <img className="w-32 mb-4 md:w-64 md:h-64 order-1 self-center" src="/assets/memoji.png" alt="" />
                </div>
                
                <div className="flex flex-row">
                     {/* px-4 py-2 */}
                    <Link href={''}>
                        <div className="flex flex-row items-center rounded-full">
                            <FeatherIcon icon='linkedin' />
                            <p className='ml-4 hidden'>Connect with Me</p>
                        </div>
                    </Link>
                    <Link href={''} className='px-6'>
                        <div className="flex flex-row items-center rounded-full">
                            <FeatherIcon icon='github' />
                            <p className='ml-4 hidden'>Follow on GitHub</p>
                        </div>
                    </Link>
                    <Link href={''}>
                        <div className="flex flex-row items-center rounded-full">
                            <FeatherIcon icon='file-text' />
                            <p className='ml-4 hidden'>Download CV</p>
                        </div>
                    </Link>
                </div>
            </div>
    
            <div className="flex flex-row items-center">
                <FeatherIcon icon='chevrons-down' className='opacity-50 mr-2'/>
                <p className="font-semibold text-sm md:text-xl opacity-50">Scroll down to know more about me!</p>                
            </div>
        </div>
    </section>
  )
}