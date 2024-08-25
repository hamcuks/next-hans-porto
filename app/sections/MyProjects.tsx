import React from 'react'
import { promises as fs } from 'fs'
import Project from '../types/project'
import ProjectItem from '../components/project_item'

export default async function MyProjects() {
  const projects: Project[] = await fs.readFile(process.cwd() + '/app/data/projects.json', 'utf8').then<Project[]>(res => JSON.parse(res))

  return (
    <section className="px-4 py-16 md:px-32 md:w-10/12">
        <h1 className="text-2xl md:text-4xl font-bold mb-4">📱</h1>
        <h1 className="text-2xl md:text-4xl font-bold pb-6">Projects</h1>
        
        <div className="md:grid md:grid-cols-3 gap-6">
        { projects.map( (data: Project, key) =>  (
              <ProjectItem key={key} data={data} />
            )) }
        </div>
    </section>
  )
}