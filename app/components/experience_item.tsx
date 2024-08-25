import React from 'react'
import Experience from '../types/experience'

const ExperienceItem = ( params: { data: Experience } ) => {
  return (
    <div className="p-4 my-3 hover:border-2 rounded-lg flex flex-row">
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