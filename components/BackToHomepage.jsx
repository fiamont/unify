import React from 'react'
import Link from 'next/link'
import Arrow from './Icons/arrow'

function BackToHomepage() {
  return (
    <div>
      <Link href='/' passHref >
          <a><Arrow/></a>
      </Link>
    </div>
  )
}

export default BackToHomepage
