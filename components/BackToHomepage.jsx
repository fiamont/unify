import React from 'react'
import Link from 'next/link'
import Arrow from './Icons/arrow'
import Image from 'next/image'

function BackToHomepage() {
  return (
    <div>
      <Link href='/' passHref >
        <Image src="/arrowLeft.png" alt='arrowLeft' width={28} height={28}/>
      </Link>
    </div>
  )
}

export default BackToHomepage
