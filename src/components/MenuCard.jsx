import React from 'react'

function MenuCard({menuCardTitle, children}) {
  return (
    <div className="menuCard">
        <h2>{menuCardTitle}</h2>
        {children}
    </div>
  )
}

export default MenuCard
