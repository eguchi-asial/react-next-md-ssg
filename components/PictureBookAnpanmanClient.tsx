'use client'

import { useEffect } from 'react'
import styles from './PictureBookAomushiClient.module.scss'

/** CSRコンポーネント `PictureBook` 専用のラッパー */
const PictureBookAomushiClient = () => {
  useEffect(() => {
    
  })
  return (
    <div className={styles.contents}>
        <svg
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          { /* アンパンマン */ }
          <g className='anpanman'>
          { /* 顔 */ }
            <g className='face'>
              <circle cx="10" cy="10" r="10" fill="#DE9C63" stroke="black" strokeWidth={0.1}/>
              <g className='face_eyes'>
                <g className='face_eyes_white'>
                  <circle cx="7" cy="4" r="2" fill="#FFF" stroke="black" strokeWidth={0.1}/>
                  <circle cx="14" cy="4" r="2" fill="#FFF" stroke="black" strokeWidth={0.1}/>
                </g>
                <g className='face_eyes_black'>
                  <circle cx="7" cy="4" r="0.5" fill="#000" stroke="black" strokeWidth={0.1}/>
                  <circle cx="14" cy="4" r="0.5" fill="#000" stroke="black" strokeWidth={0.1}/>
                </g>
              </g>
              <g className='face_nose'>
                <circle cx="10" cy="10" r="4" fill="#DF180A" stroke="black" strokeWidth={0.1}/>
              </g>
              <g className='face_cheak'>
                <circle cx="3" cy="10" r="3" fill="#DF180A" stroke="black" strokeWidth={0.1}/>
                <circle cx="17" cy="10" r="3" fill="#DF180A" stroke="black" strokeWidth={0.1}/>
              </g>
              <g className='face_mouth'>
                <rect width="10" height="3" x="5.5" y="14.5" fill="#FFF" stroke="black" strokeWidth={0.1} />
                <rect width="0.5" height="3" x="6" y="14.5" fill="#000" stroke="black" strokeWidth={0} />
                <rect width="0.5" height="3" x="8" y="14.5" fill="#000" stroke="black" strokeWidth={0} />
                <rect width="0.5" height="3" x="10" y="14.5" fill="#000" stroke="black" strokeWidth={0} />
                <rect width="0.5" height="3" x="12" y="14.5" fill="#000" stroke="black" strokeWidth={0} />
                <rect width="0.5" height="3" x="14" y="14.5" fill="#000" stroke="black" strokeWidth={0} />
              </g>
            </g>
          </g>
        </svg>
      </div>
  )
}

export default PictureBookAomushiClient
