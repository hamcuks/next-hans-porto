import React from 'react'
import { promises as fs } from 'fs'
import Technology from '../types/technology'
import TechItem from '../components/tech_item'

export default async function MySkills() {
  const technologies: Technology[] = await fs.readFile(process.cwd() + '/app/data/technologies.json', 'utf8').then<Technology[]>(res => JSON.parse(res))
  return (
    <section className="px-4 py-16 md:px-32 md:w-10/12">
        <h1 className="text-2xl md:text-4xl font-bold mb-4">👨‍💻</h1>
        <h1 className="text-2xl md:text-4xl font-bold pb-6">Technologies & Tools</h1>
        
        <div className="md:grid md:grid-cols-3 md:grid-flow-row">
        { technologies.map( (data: Technology, key) =>  (
              <TechItem key={key} data={data} />
            )) }
        </div>
    </section>
  )
}