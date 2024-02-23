import Link from 'next/link'
import Image from 'next/image'
import styles from './Brand.module.css'

const Brand = () => {
  return (
    <div className='w-4/12 mt-[55px] font-abrilFatface'>
      <Link href='/' className='inline-block'>
        <Image
          src='/image/bread.png'
          width={42}
          height={48}
          alt='bread'
          priority
          className={'absolute top-[6px] left-[38px] w-[42px] h-[48px]'}
        />
        <div className='w-full border-t-2 border-myHighlightLight translate-y-[6px]'></div>
        <span className={styles.textGradient}>Bakery</span>
      </Link>
    </div>
  )
}

export default Brand
