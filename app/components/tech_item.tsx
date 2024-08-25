import React from 'react'
import Technology from '../types/technology'

const TechItem = (params: { data: Technology }) => {
  return (
    <div className="p-4 rounded-lg flex flex-row">
        <div className="max-w-14 max-h-14 border-2 mr-4 p-3 rounded-xl">
            <img className="w-full rounded-md" src={params.data.icon} alt="" />
        </div>

        <div>
            <p className="text-sm md:text-lg font-semibold"> { params.data.name } </p>
            <p className="text-sm md:text-base font-semibold opacity-50 pt-2"> { params.data.description } </p>
        </div>
    </div>
  )
}

export default TechItem