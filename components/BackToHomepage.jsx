import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function BackToHomepage() {
  return (
    <div>
      <Link href='/' passHref >
        <Image src="/ArrowLeft.png" alt='ArrowLeft' width={28} height={28}/>
      </Link>
    </div>
  )
}

export default BackToHomepage
