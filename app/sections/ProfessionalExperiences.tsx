import React from 'react'
import Experience from '../types/experience'
import ExperienceItem from '../components/experience_item'
import { promises as fs } from 'fs'

export default async function ProfessionalExperiences() {
  const experiences: Experience[] = await fs.readFile(process.cwd() + '/app/data/experiences.json', 'utf8').then<Experience[]>(res => JSON.parse(res))

  return (
    <section className="px-4 w-full py-16 md:px-32 md:w-10/12 ">
        <h1 className="text-2xl md:text-4xl font-bold mb-4">💼</h1>
        <h1 className="text-2xl md:text-4xl font-bold mb-4 md:mb-14">Professional Experiences</h1>
        
        <div className="md:grid md:grid-rows-4 md:grid-flow-col">
            { experiences.map( (data: Experience, key) =>  (
              <ExperienceItem key={key} data={data} />
            )) }
        </div>
    </section>
  )
}