import React from 'react'

const CaptionCard = (props) => {
  
  return (
    <div className="bg-[#00A3FF] w-fit px-[10px] py-[5px] rounded-[20px] text-[15px]
    phone:max-tablet:text-[9px] phone:max-tablet:px=[6px]">
      {props.techName}
    </div>
  )
}

export default CaptionCard