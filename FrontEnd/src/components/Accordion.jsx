import React from 'react'

const Accordion = ({children, styling}) => {
    const defaulStyling = "p-4"
  return (
    <div className={styling ? styling : defaulStyling}>
      {children}
    </div>
  )
}

export default Accordion
