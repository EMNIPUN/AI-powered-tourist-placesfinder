import React from 'react'
import { Badge } from "@/components/ui/badge"

function LocationTab(props) {

  const handleClick = () => {
    props.onClick(props.name)
  }
  if(props.selectedLocation === props.name){
    return (
      <div>
          <Badge className={`bg-slate-900 text-white rounded-md cursor-pointer`} onClick={handleClick}>
              {props.name}
          </Badge>
      </div>
    )
  }
  return (
    <div>
        <Badge className={`bg-slate-200 text-black  rounded-md cursor-pointer hover:text-white`} onClick={handleClick}>
            {props.name}
        </Badge>
    </div>
  )
}

export default LocationTab