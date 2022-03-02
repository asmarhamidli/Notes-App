import React from 'react'
import {Card, CardTitle} from 'reactstrap'

const Header = () => {
  return (
    <div>
        <CardTitle className="bg-danger p-3 rounded text-center" tag="h3">
          Notes App
        </CardTitle>
    </div>
  )
}

export default Header