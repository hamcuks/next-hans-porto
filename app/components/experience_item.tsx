import React from 'react'
import Experience from '../types/experience'

const ExperienceItem = ( params: { data: Experience } ) => {
  return (
    <div className="p-4 my-3 border-2 border-transparent hover:border-slate-200 rounded-2xl flex flex-row duration-300 ease-in-out transition-all hover:transition-all hover:duration-300">
        <div className="w-14 h-14 border-2 mr-4 p-3 rounded-xl">
            <img className="h-full rounded-md" src={params.data.companyLogo} alt="" />
        </div>

        <div>
            <p className="text-sm md:text-xl font-semibold">{ params.data.role }</p>
            <p className="text-sm md:text-base font-semibold opacity-50">{ params.data.companyName } </p>
            <p className="text-sm font-semibold opacity-50 pt-2">{ params.data.duration } / { params.data.employmentType }</p>
        </div>
    </div>
  )
}

export default ExperienceItem