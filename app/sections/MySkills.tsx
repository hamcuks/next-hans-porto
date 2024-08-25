import React from 'react'
import { promises as fs } from 'fs'
import Technology from '../types/technology'
import TechItem from '../components/tech_item'
import path from 'path'

export default async function MySkills() {
  const url = path.join(process.cwd(), '/app/data/technologies.json')
  const technologies: Technology[] = await fs.readFile(url, 'utf8').then<Technology[]>(res => JSON.parse(res))
  return (
    <section className="px-4 py-16 md:px-32 md:w-10/12">
        <h1 className="text-2xl md:text-4xl font-bold mb-4">👨‍💻</h1>
        <h1 className="text-2xl md:text-4xl font-bold">Technologies & Tools</h1>

        <h3 className='text-xl opacity-50 font-semibold md:w-3/5 mt-4 mb-6 md:mb-14'>These are technologies & tools that I used to build awesome mobile application</h3>
        
        <div className="md:grid md:grid-cols-3 md:grid-flow-row">
        { technologies.map( (data: Technology, key) =>  (
              <TechItem key={key} data={data} />
            )) }
        </div>
    </section>
  )
}