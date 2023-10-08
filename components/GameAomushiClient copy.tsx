'use client'

import { useEffect } from 'react'
import styles from './PictureBookAomushiClient.module.scss'

/** CSRコンポーネント `PictureBook` 専用のラッパー */
const PictureBookAomushiClient = () => {
  useEffect(() => {
    const svg = document.querySelector('#gamesvg') as HTMLElement
    svg?.setAttribute('tabindex', '0')
    svg?.focus()
    const aomushi = document.querySelector('.aomushi') as HTMLElement
    const aomushiWidth = aomushi.getBoundingClientRect().width
    const aomushiHeight = aomushi.getBoundingClientRect().height
    let x = 0
    let y = 0
    /**
     * あおむしが移動可能範囲内かどうか
     * @param aomushi 
     */
    const isMovableXAomushi = (aomushi: HTMLElement, x: number) => {
      const aomushiClinetX = aomushi.getBoundingClientRect().x
      const movedClientX = aomushiClinetX + x
      // X
      return 0 <= movedClientX  && movedClientX + aomushiWidth <= svg.clientWidth
    }
    const isMovableYAomushi = (aomushi: HTMLElement, y: number) => {
      const aomushiClinetY = aomushi.getBoundingClientRect().y
      const movedClientY = aomushiClinetY + y
      // TODO なぜ`(svg.clientHeight / 2)`するべきなのかわかってない
      // あおむしの左上の座標 + あおむしの高さがsvgの高さを超えないようにしたいだけ
      return 0 <= movedClientY && movedClientY + aomushiHeight <= (svg.clientHeight / 2)
    }
    /**
     * 移動処理
     */
    const onKeydown = (e: Event) => {
      e.preventDefault()
      const keyboardEvent = e as KeyboardEvent
      switch (keyboardEvent.key) {
        case 'ArrowLeft':
          if (isMovableXAomushi(aomushi, x - 1)) {
            x -= 1
            aomushi.style.transform = `translate(${x}px, ${y}px)`
          }
          break
        case 'ArrowUp':
          if (isMovableYAomushi(aomushi, y - 1)) {
            y -= 1
            aomushi.style.transform = `translate(${x}px, ${y}px)`
          }
          break
        case 'ArrowRight':
          if (isMovableXAomushi(aomushi, x + 1)) {
            x += 1
            aomushi.style.transform = `translate(${x}px, ${y}px)`
          }
          break
        case 'ArrowDown':
          if (isMovableYAomushi(aomushi, y + 1)) {
            y += 1
            aomushi.style.transform = `translate(${x}px, ${y}px)`
          }
          break
      }
    }
    svg?.removeEventListener('keydown', onKeydown)
    svg?.addEventListener('keydown', onKeydown)
    // 常時animations
    const legs = document.querySelector('.legs') as HTMLElement
    legs?.animate([{ transform: 'rotate(1deg)' }, { transform: 'rotate(-1deg)' }], { duration: 500, iterations: Infinity })
    const feed = document.querySelector('.feed') as HTMLElement
    feed?.animate([{ transform: 'translateX(-10px)' }], { duration: 1000, iterations: Infinity })
  })
  return (
    <div className={styles.contents}>
      <svg
        id="gamesvg"
        tabIndex={0}
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
          <text x="10" y="20" fontFamily="Verdana" fontSize="4">
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
