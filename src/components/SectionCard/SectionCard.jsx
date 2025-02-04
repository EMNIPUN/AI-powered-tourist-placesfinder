import React from 'react'

function SectionCard({ title, description, icon: Icon, className = '' }) {
  return (
    <div className={`section-card p-6 rounded-lg shadow-md bg-white hover:shadow-lg transition-shadow duration-300 ${className}`}>
        <div className='flex flex-col justify-center items-center space-y-4'>
          {Icon && <Icon className="w-12 h-12 text-primary-600" />}
          <h2 className='text-2xl font-bold text-gray-800'>{title || 'Section Card'}</h2>
          {description && (
            <p className='text-gray-600 text-center'>{description}</p>
          )}
        </div>
    </div>
  )
}

export default SectionCard