import React from 'react'
import FeatherIcon from 'feather-icons-react'
import Project from '../types/project'
import Link from 'next/link'

const ProjectItem = ( params: { data: Project } ) => {
  return (
    <div className="p-4 rounded-2xl flex flex-col border-2 mb-4 md:mb-0">
        <img className="w-full h-48 md:h-full mb-4 border-2 border-slate-200 md:mb-0 rounded-lg" src={ params.data.thumbnail } alt="" />
        
        <Link href={ '/projects/' + params.data.slug } className="mt-4 md:mt-6 border-2 flex flex-row items-center max-w-fit px-6 py-2 rounded-full hover:bg-black hover:text-white hover:border-black hover:transition-all ease-in-out hover:ease-in-out duration-300 hover:duration-300">
            <p className="text-sm md:text-base font-semibold mr-4"> { params.data.name } </p>
            <FeatherIcon icon='arrow-right' />
        </Link>
    </div>
  )
}

export default ProjectItem