import React from 'react'

export default async function AboutMe() {
  return (
    <section className="px-4 py-16 md:px-32 md:flex  md:w-10/12  md:justify-between md:items-center">
        <div className="mb-4 relative px-4 md:flex-auto md:w-8 md:order-2">
            <div className="absolute bottom-0 left-o right-0 w-full h-full bg-[url('/assets/dots.png')]"></div>
            <img src="/assets/profile.webp" className="z-10 relative" alt="" />
            <div className="absolute z-10 bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-white-200"></div>
        </div>
        <div className="md:flex-auto md:w-64 md:mr-24">
            <h1 className="text-2xl md:text-4xl font-bold mb-4">🧑‍🎓</h1>
            <h1 className="text-2xl md:text-4xl font-bold pb-6">About Me</h1>
            
            <p className="font-medium opacity-50 text-sm md:text-xl">
                As an Informatics graduate from Universitas Amikom Yogyakarta, I specialize in mobile app development with hands-on experience in Flutter for hybrid apps and SwiftUI/UIKit for iOS.
            </p>
            <br />
            <p className="font-medium opacity-50 text-sm md:text-xl">
                I am driven by challenges and have a strong passion for continuous learning and self-improvement.
            </p>
        </div>
    </section>
  )
}