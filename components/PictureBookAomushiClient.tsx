'use client'

import { useEffect } from 'react'
import styles from './PictureBookAomushiClient.module.scss'

/** CSRコンポーネント `PictureBook` 専用のラッパー */
const PictureBookAomushiClient = () => {
  useEffect(() => {
    const legs = document.querySelector('.legs') as HTMLElement
    if (legs) {
      legs.animate([{ transform: 'rotate(1deg)' }, { transform: 'rotate(-1deg)' }], { duration: 500, iterations: Infinity })
    }
    const aomushi = document.querySelector('.aomushi') as HTMLElement
    if (aomushi) {
      aomushi.animate([{ transform: 'translateX(0.5px)' }, { transform: 'translateX(-0.5px)' }], { duration: 1000, iterations: Infinity })
    }
    const fukidashi = document.querySelector('.fukidashi') as HTMLElement
    if (fukidashi) {
      fukidashi.animate([{ transform: 'scale(1.1)' }, { transform: 'scale(1)' }],  { duration: 1000, iterations: Infinity })
    }
    const feed = document.querySelector('.feed') as HTMLElement
    if (feed) {
      feed.animate([{ transform: 'translateX(-10px)' }], { duration: 1000, iterations: Infinity })
    }
  })
  return (
    <div className={styles.contents}>
        <svg
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          { /* はらぺこあおむし */ }
          <g className='aomushi'>
          { /* 胴体 */ }
            <g className='body'>
              <circle cx="10" cy="10" r="2" fill="#006400" stroke="black" strokeWidth={0.1}/>
              <circle cx="12" cy="11" r="2" fill="#008000" stroke="black" strokeWidth={0.1}/>
              <circle cx="14" cy="12" r="2" fill="#006400" stroke="black" strokeWidth={0.1}/>
              <circle cx="16" cy="11" r="2" fill="#008000" stroke="black" strokeWidth={0.1}/>
              <circle cx="18" cy="10" r="2" fill="#006400" stroke="black" strokeWidth={0.1}/>
              <circle cx="20" cy="11" r="2" fill="#008000" stroke="black" strokeWidth={0.1}/>
              <circle cx="22" cy="10" r="2" fill="#006400" stroke="black" strokeWidth={0.1}/>
              <circle cx="24" cy="11" r="2" fill="#008000" stroke="black" strokeWidth={0.1}/>
              <circle cx="26" cy="12" r="2" fill="#006400" stroke="black" strokeWidth={0.1}/>
              <circle cx="28" cy="13" r="2" fill="#008000" stroke="black" strokeWidth={0.1}/>
              <circle cx="30" cy="12" r="2" fill="#006400" stroke="black" strokeWidth={0.1}/>
            </g>
            <g className='head'>
              { /* 頭 */ }
              <circle cx="33" cy="12" r="3.5" fill="#8b0000" stroke="black" strokeWidth={0.1}/>
            </g>
            { /* 触覚 */ }
            <g className='sense'>
              <ellipse cx="31" cy="6" rx="0.75" ry="3" transform='rotate(-15, 31, 6)' fill="#c71585" stroke='#4682b4' strokeWidth={0.5} />
              <ellipse cx="35" cy="6" rx="0.75" ry="3" transform='rotate(15, 35, 6)' fill="#c71585" stroke='#4682b4' strokeWidth={0.5} />
            </g>
            <g className='eyes'>
              { /* 目 */ }
              <ellipse cx="32" cy="11" rx="1" ry="1.3" fill="#ffd700" />
              <ellipse cx="35" cy="11" rx="1" ry="1.3" fill="#ffd700" />
              { /* 瞳 */ }
              <ellipse cx="32" cy="11" rx="0.75" ry="1.1" fill="#006400" />
              <ellipse cx="35" cy="11" rx="0.75" ry="1.1" fill="#006400" />
            </g>
            <g className='mouth'>
              { /* 口 */ }
              <polygon points="32.5,13 33.5,12 34.5,13 33.5,14"/>
            </g>
            { /* 足 */ }
            <g className='legs'>
              <g className='leg1'>
                <rect width="1" height="2" x="10" y="13" fill='#8b4513' />
                <rect width="2" height="1" x="10" y="14" fill='#8b4513' />
              </g>
              <g className='leg2'>
                <rect width="1" height="2" x="15" y="13" fill='#8b4513' />
                <rect width="2" height="1" x="15" y="14" fill='#8b4513' />
              </g>
              <g className='leg3'>
                <rect width="1" height="2" x="20" y="13" fill='#8b4513' />
                <rect width="2" height="1" x="20" y="14" fill='#8b4513' />
              </g>
              <g className='leg4'>
                <rect width="1" height="2" x="25" y="13" fill='#8b4513' />
                <rect width="2" height="1" x="25" y="14" fill='#8b4513' />
              </g>
            </g>
          </g>
          { /* 吹き出し */ }
          <g className='fukidashi'>
            <text x="10" y="35" fontFamily="Verdana" fontSize="12">
              ムシャムシャ
            </text>
          </g>
          { /* ごはん */ }
          <g className='feed'>
            { /* りんご */ }
            <g className='apple'>
              <rect x="49.7" y="9" width="0.5" height="1"  fill='#8b4513' />
              <ellipse cx="51" cy="9.5" rx="1" ry="0.3" fill="#006400" stroke='#black' strokeWidth={0.1} />
              <circle cx="50" cy="12" r="2" fill="#ff0000" stroke="black" strokeWidth={0.1}/>
            </g>
          </g>
        </svg>
      </div>
  )
}

export default PictureBookAomushiClient
