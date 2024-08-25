import React from 'react'
import { promises as fs } from 'fs'
import Project from '@/app/types/project'
import Link from 'next/link'
import path from 'path'

const ProjectDetail = async ({ params }: { params: { slug: string } }) => {

  const url = path.join(process.cwd(), '/app/data/projects.json')
  const projects: Project[] = await fs.readFile(url, 'utf8').then<Project[]>(res => JSON.parse(res))
  const data: Project = projects.filter((x) => x.slug == params.slug)[0]
  
  return (
    <section className="px-4 py-16 md:px-32 md:h-5/6 md:w-10/12 flex flex-col justify-center">
        <div>
            <div>
                <h3 className="text-base md:text-2xl font-semibold">Project Details</h3>

                <div className="mt-6 md:mt-9">
                    <div className="mt-2 md:mt-4">
                        <div className="flex flex-col md:flex-row">
                            <p className="w-[256px] text-sm md:text-lg font-semibold opacity-50">Name</p>
                            <p className="text-sm md:text-lg font-semibold">{ data.name }</p>
                        </div>
                        <div className="mt-2 md:mt-4 w-full h-[1px] bg-black opacity-15"></div>
                    </div>
                    <div className="mt-2 md:mt-4">
                        <div className="flex flex-col md:flex-row">
                            <p className="w-[256px] text-sm md:text-lg font-semibold opacity-50">Associated With</p>
                            <p className="text-sm md:text-lg font-semibold">{ data.associatedWith }</p>
                        </div>
                        <div className="mt-2 md:mt-4 w-full h-[1px] bg-black opacity-15"></div>
                    </div>
                    <div className="mt-2 md:mt-4">
                        <div className="flex flex-col md:flex-row">
                            <p className="w-[256px] text-sm md:text-lg font-semibold opacity-50">Role</p>
                            <p className="text-sm md:text-lg font-semibold">{ data.role }</p>
                        </div>
                        <div className="mt-2 md:mt-4 w-full h-[1px] bg-black opacity-15"></div>
                    </div>
                    <div className="mt-2 md:mt-4">
                        <div className="flex flex-col md:flex-row">
                            <p className="w-[256px] text-sm md:text-lg font-semibold opacity-50">Duration</p>
                            <p className="text-sm md:text-lg font-semibold">{ data.duration }</p>
                        </div>
                        <div className="mt-2 md:mt-4 w-full h-[1px] bg-black opacity-15"></div>
                    </div>
                    <div className="mt-2 md:mt-4">
                        <div className="flex flex-col md:flex-row">
                            <p className="w-[256px] text-sm md:text-lg font-semibold opacity-50">Release Date</p>
                            <p className="text-sm md:text-lg font-semibold">{ data.release }</p>
                        </div>
                        <div className="mt-2 md:mt-4 w-full h-[1px] bg-black opacity-15"></div>
                    </div>
                    <div className="mt-2 md:mt-4">
                        <div className="flex flex-col md:flex-row">
                            <p className="w-[256px] text-sm md:text-lg font-semibold opacity-50">Links</p>
                            <div className="text-sm md:text-lg font-semibold flex flex-row items-center"> 
                                { <Link target='_blank' tabIndex={ data.links.appStore == "" ? -1 : undefined } className={ data.links.appStore != "" ? 'text-blue-500' : 'text-black opacity-50 pointer-events-none' } href={ data.links.appStore } >App Store</Link> }
                                <p className="mx-4">|</p>
                                { <Link target='_blank' tabIndex={ data.links.testflight == "" ? -1 : undefined } className={ data.links.testflight != "" ? 'text-blue-500' : 'text-black opacity-50 pointer-events-none' } href={ data.links.testflight } >Testflight</Link> }
                                <p className="mx-4">|</p>
                                { <Link target='_blank' tabIndex={ data.links.playStore == "" ? -1 : undefined } className={ data.links.playStore != "" ? 'text-blue-500' : 'text-black opacity-50 pointer-events-none' } href={ data.links.playStore } >Play Store</Link> }
                                <p className="mx-4">|</p>
                                { <Link target='_blank' tabIndex={ data.links.github == "" ? -1 : undefined } className={ data.links.github != "" ? 'text-blue-500' : 'text-black opacity-50 pointer-events-none' } href={ data.links.github } >GitHub</Link> }
                            </div>
                        </div>
                        { data.collaborators != null && ( <div className="mt-2 md:mt-4 w-full h-[1px] bg-black opacity-15"></div> ) }
                    </div>
                    { 
                        data.collaborators != null &&
                        ( 
                        <div className="mt-2 md:mt-4">
                            <div className="flex flex-col md:flex-row">
                                <p className="w-[256px] text-sm md:text-lg font-semibold opacity-50">Collaborators</p>
                                <p className="text-sm md:text-lg font-semibold">
                                    { data.collaborators.map(x => ( <li className='list-none mb-2'> {x} </li> ))  }
                                </p>
                            </div>
                        </div> 
                        )
                    }
                </div>
            </div>
            <div className="mt-14 md:mt-16">
                <h3 className="text-base md:text-2xl font-semibold">Summary</h3>

                <div className="mt-6 md:mt-9 pb-9">
                    <p className="text-sm md:text-lg">{ data.description ?? "No Description" }</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ProjectDetail