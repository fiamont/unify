import React from 'react'
import Image from 'next/dist/client/image';
import style from '../styles/OmOss.module.css'

function OmOssImages() {
  return (
    <div className={style.imgWholeDiv}>
        <div className={style.imgDiv}>
            <Image src="/Nadine.png" alt='Nadine' width={160} height={160}/>
            <p className={style.name}>Nadine Flink</p>
            <p className={style.roll}>UX Designer <Image src="/NadineIcon.png" alt='NadineIcon' width={13} height={14}/></p>
        </div>
        <div className={style.imgDiv}>
            <Image src="/Rasmus.png" alt='Rasmus' width={160} height={160}/>
            <p className={style.name}>Rasmus Broström</p>
            <p className={style.roll}>UX Designer <Image src="/RasmusIcon.png" alt='RasmusIcon' width={13} height={13}/></p>
        </div>
        <div className={style.imgDiv}>
            <Image src="/Tilda.png" alt='Tilda' width={160} height={160}/>
            <p className={style.name}>Tilda Hasselblad</p>
            <p className={style.roll}>UX Designer <Image src="/TildaIcon.png" alt='TildaIcon' width={16} height={17}/></p>
        </div>
        <div className={style.imgDiv}>
            <Image src="/SofiaI.png" alt='SofiaI' width={160} height={160}/>
            <p className={style.name}>Sofia Israelsson</p>
            <p className={style.roll}>UX Designer <Image src="/SofiaIIcon.png" alt='SofiaIIcon' width={13} height={13}/></p>
        </div>
        <div className={style.imgDiv}>
            <Image className={style.roundImg} src="/Julio.jpg" alt='Julio' width={160} height={160}/>
            <p className={style.name}>Julio Siklander</p>
            <p className={style.roll}>Utvecklare <Image src="/JulioIcon.png" alt='JulioIcon' width={12} height={12}/></p>
        </div>
        <div className={style.imgDiv}>
            <Image className={style.roundImg} src="/SofiaM.png" alt='SofiaM' width={160} height={160}/>
            <p className={style.name}>Sofia Montgomery</p>
            <p className={style.roll}>Utvecklare <Image src="/SofiaMIcon.png" alt='SofiaMIcon' width={13} height={13}/></p>
        </div>
        <div className={style.imgDiv}>
            <Image src="/random.png" alt='Nicole' width={160} height={160}/>
            <p className={style.name}>Nicole Sjöberg-Silfverling</p>
            <p className={style.roll}>Utvecklare <Image src="/NicoleIcon.png" alt='NicoleIcon' width={13} height={13}/></p>
        </div>
        <div className={style.imgDiv}>
            <Image src="/Martin.png" alt='Martin' width={160} height={160}/>
            <p className={style.name}>Martin Fethi</p>
            <p className={style.roll}>Utvecklare <Image src="/MartinIcon.png" alt='MartinIcon' width={15} height={16}/></p>
        </div>
    </div>
  )
}

export default OmOssImages
