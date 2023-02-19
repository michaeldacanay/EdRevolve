import Image from 'next/image'
import Link from 'next/link';
import { Inter, Nunito } from '@next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })
const nunito = Nunito({ subsets: ['latin'] })


export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <body>
          <Image
            src="/1.png"
            alt="1"
            className={styles.vercelLogo}
            width={1540}
            height={866}
            priority
          />
          
          
          <Image
            src="/2.png"
            alt="2"
            className={styles.vercelLogo}
            width={1540}
            height={700}
            priority
          />
          <Image
            src="/3.png"
            alt="3"
            className={styles.vercelLogo}
            width={1540}
            height={866}
            priority
          />
          <Image
            src="/4.png"
            alt="4"
            className={styles.vercelLogo}
            width={1540}
            height={866}
            priority
          />
        </body>
    
        <button>BOOK NOW! 
         
        </button>
      </div>
    </main>
  )
}
