import React from 'react'

function MenuCard({menuCardTitle, children}) {
  return (
    <div className="menuCard">
        <h1>{menuCardTitle}</h1>
        <ul>
          {children}
        </ul>
    </div>
  )
}

export default MenuCard
