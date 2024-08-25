import React from 'react'

const CaptionCard = (props) => {
  
  return (
    <div className="bg-[#00A3FF] w-fit px-[10px] py-[5px] rounded-[20px] text-[15xpx]">
      {props.techName}
    </div>
  )
}

export default CaptionCard