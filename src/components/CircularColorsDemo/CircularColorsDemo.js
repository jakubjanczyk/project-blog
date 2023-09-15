'use client'
import React, { useState } from 'react'
import clsx from 'clsx'
import { Pause, Play, RotateCcw, } from 'react-feather'

import Card from '@/components/Card'
import VisuallyHidden from '@/components/VisuallyHidden'

import styles from './CircularColorsDemo.module.css'

import {motion} from 'framer-motion'

const COLORS = [
  { label: 'red', value: 'hsl(348deg 100% 60%)' },
  { label: 'yellow', value: 'hsl(50deg 100% 55%)' },
  { label: 'blue', value: 'hsl(235deg 100% 65%)' },
]

function CircularColorsDemo() {
  const [timeElapsed, setTimeElapsed] = useState(0)
  const [isOn, setIsOn] = useState(false)

  React.useEffect(() => {
    if (isOn) {
      const intervalId = window.setInterval(() => {
        setTimeElapsed(prev => prev + 1)
      }, 1000)

      return () => {
        window.clearInterval(intervalId)
      }
    }
  }, [isOn])

  const id = React.useId();

  const selectedColor = COLORS[timeElapsed % 3]

  return (
    <Card as="section" className={styles.wrapper}>
      <ul className={styles.colorsWrapper}>
        {COLORS.map((color, index) => {
          const isSelected =
            color.value === selectedColor.value

          return (
            <li
              className={styles.color}
              key={index}
            >
              {isSelected && (
                <motion.div
                  layoutId={`${id}-selected-color-outline`}
                  className={
                    styles.selectedColorOutline
                  }
                />
              )}
              <div
                className={clsx(
                  styles.colorBox,
                  isSelected &&
                  styles.selectedColorBox
                )}
                style={{
                  backgroundColor: color.value,
                }}
              >
                <VisuallyHidden>
                  {color.label}
                </VisuallyHidden>
              </div>
            </li>
          )
        })}
      </ul>

      <div className={styles.timeWrapper}>
        <dl className={styles.timeDisplay}>
          <dt>Time Elapsed</dt>
          <dd>{timeElapsed}</dd>
        </dl>
        <div className={styles.actions}>
          <button onClick={() => setIsOn(prev => !prev)}>
            {!isOn ? (<>
              <Play />
              <VisuallyHidden>Play</VisuallyHidden>
            </>) : (<>
              <Pause />
              <VisuallyHidden>Pause</VisuallyHidden>
            </>)
            }
          </button>
          <button onClick={() => {
            setIsOn(false)
            setTimeElapsed(0)
          }}>
            <RotateCcw />
            <VisuallyHidden>Reset</VisuallyHidden>
          </button>
        </div>
      </div>
    </Card>
  )
}

export default CircularColorsDemo
