import React from 'react'
import PropTypes from 'prop-types'
import s from './index.scss'
import { differenceInCalendarDays } from 'date-fns'

ProgressBar.propTypes = {
  startsOn: PropTypes.string.isRequired,
  endsOn: PropTypes.string.isRequired,
  className: PropTypes.string
}

export default function ProgressBar({
  startsOn,
  endsOn,
  className = '',
  ...rest
}) {
  const startDate = Date.parse(startsOn)
  const endDate = Date.parse(endsOn)
  const today = Date.now()

  const timeTotal = endDate - startDate
  const timeRemaining = endDate - today

  const duration = differenceInCalendarDays(endDate, startDate)
  const passed = duration - differenceInCalendarDays(endDate, today)

  const completion = passed / duration

  const START_BOTTOM_X = 217.14
  const START_TOP_X = 283.8

  // 986 is point at which the bottom point need to be to appear completely full
  const LENGTH_X = 986 - START_BOTTOM_X

  const BOTTOM_X = START_BOTTOM_X + LENGTH_X * completion
  const TOP_X = START_TOP_X + LENGTH_X * completion

  return (
    <div className={`${s['container']} ${className}`}>
      <div className={s['display']}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 1000 143.24"
          className={s['image']}
        >
          <defs>
            <clipPath id="clip-path" transform="translate(0 -6.76)">
              <polygon
                id="mask"
                className={s['cls-1']}
                points={`217.14 149.64 0 149.64 0 0 ${TOP_X} 0 ${BOTTOM_X} 149.64`}
              />
            </clipPath>
          </defs>
          <g id="Layer_2" data-name="Layer 2">
            <g id="Layer_1-2" data-name="Layer 1">
              <g id="progress-bar">
                <g id="empty">
                  <g id="title">
                    <path
                      className={s['cls-2']}
                      d="M37.25,30.94c0-9.78-4.8-11.76-9.32-11.76s-9.22,2.45-9.22,10.07V52.77c0,7.81,4.71,10.16,9.22,10.16,6,0,9.32-2.91,9.32-12.61v-.84h13c0,16.93-7.24,25.87-22.3,25.87-13.17,0-22.3-9.41-22.3-22.95V29.62c0-13.45,9.13-22.86,22.3-22.86,14.78,0,22.3,9.69,22.3,25.12h-13Z"
                      transform="translate(0 -6.76)"
                    />
                    <path
                      className={s['cls-2']}
                      d="M56.34,52.4V29.81c0-13.55,9.13-23,22.3-23s22.3,9.5,22.3,23V52.4c0,13.45-9.22,22.86-22.3,22.86S56.34,65.85,56.34,52.4ZM88,52.87V29.34c0-7.43-4.42-10.16-9.32-10.16-4.61,0-9.22,2.45-9.22,10.07V52.77c0,7.43,4.33,10.07,9.22,10.07C83.07,62.84,88,60.49,88,52.87Z"
                      transform="translate(0 -6.76)"
                    />
                    <path
                      className={s['cls-2']}
                      d="M150.15,74.32h-43v-10c0-23.9,31-20.8,31-36.61,0-5.74-4.52-8.75-9.13-8.75C124,19,120,22.47,120,28.87h-12.8c0-13.36,9.13-22.11,21.83-22.11,13,0,22,8.47,22,20.89,0,22.67-30.39,21.83-30.77,34.25h29.92Z"
                      transform="translate(0 -6.76)"
                    />
                    <path
                      className={s['cls-2']}
                      d="M205.66,74.32H191.08L177.9,46.75H173V74.32H160V8h13V35.27h4.89L191.08,8h14.58L189.1,40.92Z"
                      transform="translate(0 -6.76)"
                    />
                    <path
                      className={s['cls-2']}
                      d="M258,74.32H245.74L226.17,35.93V74.32h-13V8h12.23l19.48,38.58V8.17H258Z"
                      transform="translate(0 -6.76)"
                    />
                    <path
                      className={s['cls-2']}
                      d="M288.54,74.32V8h20.8c13.08,0,22.49,8.57,22.49,24.09v2.64c0,15.61-9.41,23.8-22.49,23.8h-7.81V74.32Zm13-53.92V46.19H308c5.65,0,11-2.64,11-11.58V32.17c0-9.79-5.55-11.77-11-11.77Z"
                      transform="translate(0 -6.76)"
                    />
                    <path
                      className={s['cls-2']}
                      d="M340.76,74.32V8h21.08C375.1,8,384,16.55,384,32v1.88c0,10.26-4.42,17.12-11.57,20.32l11.19,20.14h-14.2l-8.94-17.13h-6.78V74.32Zm13-53.92V44.87h6.5c5.64,0,10.91-2.45,10.91-11.2V31.79c0-9.13-5.08-11.39-10.91-11.39Z"
                      transform="translate(0 -6.76)"
                    />
                    <path
                      className={s['cls-2']}
                      d="M430.33,20.5H406.05v15h18V46.84h-18V61.9h24.28V74.32H393.07V8h37.26Z"
                      transform="translate(0 -6.76)"
                    />
                    <path
                      className={s['cls-2']}
                      d="M436.16,52.4V42.7h25.22v9.7Z"
                      transform="translate(0 -6.76)"
                    />
                    <path
                      className={s['cls-2']}
                      d="M499.39,30.94c0-9.78-4.8-11.76-9.32-11.76s-9.22,2.45-9.22,10.07V52.77c0,7.81,4.7,10.16,9.22,10.16,6,0,9.32-2.91,9.32-12.61v-.84h13c0,16.93-7.25,25.87-22.3,25.87-13.17,0-22.3-9.41-22.3-22.95V29.62c0-13.45,9.13-22.86,22.3-22.86,14.77,0,22.3,9.69,22.3,25.12h-13Z"
                      transform="translate(0 -6.76)"
                    />
                    <path
                      className={s['cls-2']}
                      d="M555.46,74.32h-35V8h13V61.9h22Z"
                      transform="translate(0 -6.76)"
                    />
                    <path
                      className={s['cls-2']}
                      d="M592.25,61.24H573l-3.67,13.08H556.12L575.59,8H589.8L609,74.32H595.73ZM575.69,50h13.83l-6.78-26Z"
                      transform="translate(0 -6.76)"
                    />
                    <path
                      className={s['cls-2']}
                      d="M627.53,74.32h-13V8h13Z"
                      transform="translate(0 -6.76)"
                    />
                    <path
                      className={s['cls-2']}
                      d="M652.08,37.15V74.32h-13V8H652l14.86,36.79L681.63,8h12.89V74.32h-13V37L671.18,61.9h-8.84Z"
                      transform="translate(0 -6.76)"
                    />
                    <path
                      className={s['cls-2']}
                      d="M725.18,74.32V8H746c13.08,0,22.48,8.57,22.48,24.09v2.64c0,15.61-9.4,23.8-22.48,23.8h-7.81V74.32Zm13-53.92V46.19h6.49c5.65,0,11-2.64,11-11.58V32.17c0-9.79-5.55-11.77-11-11.77Z"
                      transform="translate(0 -6.76)"
                    />
                    <path
                      className={s['cls-2']}
                      d="M814.66,20.5H790.38v15h18V46.84h-18V61.9h24.28V74.32H777.4V8h37.26Z"
                      transform="translate(0 -6.76)"
                    />
                    <path
                      className={s['cls-2']}
                      d="M823.4,74.32V8h21.08c13.27,0,22.21,8.57,22.21,24v1.88c0,10.26-4.42,17.12-11.58,20.32l11.2,20.14H852.1l-8.94-17.13h-6.77V74.32Zm13-53.92V44.87h6.49c5.65,0,10.92-2.45,10.92-11.2V31.79c0-9.13-5.08-11.39-10.92-11.39Z"
                      transform="translate(0 -6.76)"
                    />
                    <path
                      className={s['cls-2']}
                      d="M889.17,74.32h-13V8h13Z"
                      transform="translate(0 -6.76)"
                    />
                    <path
                      className={s['cls-2']}
                      d="M898.77,52.4V29.81c0-13.55,9.12-23,22.3-23s22.3,9.5,22.3,23V52.4c0,13.45-9.23,22.86-22.3,22.86S898.77,65.85,898.77,52.4Zm31.61.47V29.34c0-7.43-4.42-10.16-9.31-10.16-4.62,0-9.23,2.45-9.23,10.07V52.77c0,7.43,4.33,10.07,9.23,10.07C925.49,62.84,930.38,60.49,930.38,52.87Z"
                      transform="translate(0 -6.76)"
                    />
                    <path
                      className={s['cls-2']}
                      d="M952.49,74.32V8h21.83c13.17,0,22.3,8.1,22.3,24.28v17.5c0,16-9.13,24.56-22.3,24.56Zm13-53.92V62h7.34c6.21,0,10.92-2.44,10.92-15.43V33.67c0-7.15-1.89-13.27-10.92-13.27Z"
                      transform="translate(0 -6.76)"
                    />
                  </g>
                  <polygon
                    id="bar"
                    className={s['cls-3']}
                    points="1000 86.36 0 86.36 0 142.88 217.14 142.88 234.29 104.26 1000 104.26 1000 86.36"
                  />
                </g>
                <g id="full">
                  <g className={s['cls-4']}>
                    <g id="title-2" data-name="title">
                      <path
                        className={s['cls-5']}
                        d="M37.25,30.94c0-9.78-4.8-11.76-9.32-11.76s-9.22,2.45-9.22,10.07V52.77c0,7.81,4.71,10.16,9.22,10.16,6,0,9.32-2.91,9.32-12.61v-.84h13c0,16.93-7.24,25.87-22.3,25.87-13.17,0-22.3-9.41-22.3-22.95V29.62c0-13.45,9.13-22.86,22.3-22.86,14.78,0,22.3,9.69,22.3,25.12h-13Z"
                        transform="translate(0 -6.76)"
                      />
                      <path
                        className={s['cls-5']}
                        d="M56.34,52.4V29.81c0-13.55,9.13-23,22.3-23s22.3,9.5,22.3,23V52.4c0,13.45-9.22,22.86-22.3,22.86S56.34,65.85,56.34,52.4ZM88,52.87V29.34c0-7.43-4.42-10.16-9.32-10.16-4.61,0-9.22,2.45-9.22,10.07V52.77c0,7.43,4.33,10.07,9.22,10.07C83.07,62.84,88,60.49,88,52.87Z"
                        transform="translate(0 -6.76)"
                      />
                      <path
                        className={s['cls-5']}
                        d="M150.15,74.32h-43v-10c0-23.9,31-20.8,31-36.61,0-5.74-4.52-8.75-9.13-8.75C124,19,120,22.47,120,28.87h-12.8c0-13.36,9.13-22.11,21.83-22.11,13,0,22,8.47,22,20.89,0,22.67-30.39,21.83-30.77,34.25h29.92Z"
                        transform="translate(0 -6.76)"
                      />
                      <path
                        className={s['cls-5']}
                        d="M205.66,74.32H191.08L177.9,46.75H173V74.32H160V8h13V35.27h4.89L191.08,8h14.58L189.1,40.92Z"
                        transform="translate(0 -6.76)"
                      />
                      <path
                        className={s['cls-5']}
                        d="M258,74.32H245.74L226.17,35.93V74.32h-13V8h12.23l19.48,38.58V8.17H258Z"
                        transform="translate(0 -6.76)"
                      />
                      <path
                        className={s['cls-5']}
                        d="M288.54,74.32V8h20.8c13.08,0,22.49,8.57,22.49,24.09v2.64c0,15.61-9.41,23.8-22.49,23.8h-7.81V74.32Zm13-53.92V46.19H308c5.65,0,11-2.64,11-11.58V32.17c0-9.79-5.55-11.77-11-11.77Z"
                        transform="translate(0 -6.76)"
                      />
                      <path
                        className={s['cls-5']}
                        d="M340.76,74.32V8h21.08C375.1,8,384,16.55,384,32v1.88c0,10.26-4.42,17.12-11.57,20.32l11.19,20.14h-14.2l-8.94-17.13h-6.78V74.32Zm13-53.92V44.87h6.5c5.64,0,10.91-2.45,10.91-11.2V31.79c0-9.13-5.08-11.39-10.91-11.39Z"
                        transform="translate(0 -6.76)"
                      />
                      <path
                        className={s['cls-5']}
                        d="M430.33,20.5H406.05v15h18V46.84h-18V61.9h24.28V74.32H393.07V8h37.26Z"
                        transform="translate(0 -6.76)"
                      />
                      <path
                        className={s['cls-5']}
                        d="M436.16,52.4V42.7h25.22v9.7Z"
                        transform="translate(0 -6.76)"
                      />
                      <path
                        className={s['cls-5']}
                        d="M499.39,30.94c0-9.78-4.8-11.76-9.32-11.76s-9.22,2.45-9.22,10.07V52.77c0,7.81,4.7,10.16,9.22,10.16,6,0,9.32-2.91,9.32-12.61v-.84h13c0,16.93-7.25,25.87-22.3,25.87-13.17,0-22.3-9.41-22.3-22.95V29.62c0-13.45,9.13-22.86,22.3-22.86,14.77,0,22.3,9.69,22.3,25.12h-13Z"
                        transform="translate(0 -6.76)"
                      />
                      <path
                        className={s['cls-5']}
                        d="M555.46,74.32h-35V8h13V61.9h22Z"
                        transform="translate(0 -6.76)"
                      />
                      <path
                        className={s['cls-5']}
                        d="M592.25,61.24H573l-3.67,13.08H556.12L575.59,8H589.8L609,74.32H595.73ZM575.69,50h13.83l-6.78-26Z"
                        transform="translate(0 -6.76)"
                      />
                      <path
                        className={s['cls-5']}
                        d="M627.53,74.32h-13V8h13Z"
                        transform="translate(0 -6.76)"
                      />
                      <path
                        className={s['cls-5']}
                        d="M652.08,37.15V74.32h-13V8H652l14.86,36.79L681.63,8h12.89V74.32h-13V37L671.18,61.9h-8.84Z"
                        transform="translate(0 -6.76)"
                      />
                      <path
                        className={s['cls-5']}
                        d="M725.18,74.32V8H746c13.08,0,22.48,8.57,22.48,24.09v2.64c0,15.61-9.4,23.8-22.48,23.8h-7.81V74.32Zm13-53.92V46.19h6.49c5.65,0,11-2.64,11-11.58V32.17c0-9.79-5.55-11.77-11-11.77Z"
                        transform="translate(0 -6.76)"
                      />
                      <path
                        className={s['cls-5']}
                        d="M814.66,20.5H790.38v15h18V46.84h-18V61.9h24.28V74.32H777.4V8h37.26Z"
                        transform="translate(0 -6.76)"
                      />
                      <path
                        className={s['cls-5']}
                        d="M823.4,74.32V8h21.08c13.27,0,22.21,8.57,22.21,24v1.88c0,10.26-4.42,17.12-11.58,20.32l11.2,20.14H852.1l-8.94-17.13h-6.77V74.32Zm13-53.92V44.87h6.49c5.65,0,10.92-2.45,10.92-11.2V31.79c0-9.13-5.08-11.39-10.92-11.39Z"
                        transform="translate(0 -6.76)"
                      />
                      <path
                        className={s['cls-5']}
                        d="M889.17,74.32h-13V8h13Z"
                        transform="translate(0 -6.76)"
                      />
                      <path
                        className={s['cls-5']}
                        d="M898.77,52.4V29.81c0-13.55,9.12-23,22.3-23s22.3,9.5,22.3,23V52.4c0,13.45-9.23,22.86-22.3,22.86S898.77,65.85,898.77,52.4Zm31.61.47V29.34c0-7.43-4.42-10.16-9.31-10.16-4.62,0-9.23,2.45-9.23,10.07V52.77c0,7.43,4.33,10.07,9.23,10.07C925.49,62.84,930.38,60.49,930.38,52.87Z"
                        transform="translate(0 -6.76)"
                      />
                      <path
                        className={s['cls-5']}
                        d="M952.49,74.32V8h21.83c13.17,0,22.3,8.1,22.3,24.28v17.5c0,16-9.13,24.56-22.3,24.56Zm13-53.92V62h7.34c6.21,0,10.92-2.44,10.92-15.43V33.67c0-7.15-1.89-13.27-10.92-13.27Z"
                        transform="translate(0 -6.76)"
                      />
                    </g>
                    <polygon
                      id="bar-2"
                      data-name="bar"
                      className={s['cls-5']}
                      points="1000 86.36 0 86.36 0 142.88 217.14 142.88 234.29 104.26 1000 104.26 1000 86.36"
                    />
                  </g>
                </g>
                <g id="start-date">
                  <path
                    className={s['cls-3']}
                    d="M16.61,116.3c0-4.6,3.28-7.39,8.28-7.39s8.22,3.25,8.22,8.43H28.25c0-2.68-1.32-3.93-3.43-3.93s-3.28,1-3.28,2.89c0,5,11.89,2,11.89,11,0,4.79-3.43,7.64-8.54,7.64s-8.6-3.32-8.6-8.71h4.92c0,2.93,1.5,4.14,3.68,4.14s3.61-1,3.61-3C28.5,122.59,16.61,125.23,16.61,116.3Z"
                    transform="translate(0 -6.76)"
                  />
                  <path
                    className={s['cls-3']}
                    d="M50.75,128.13v.14c0,3.68-2.82,6.64-7.57,6.64s-7.64-3-7.64-7.86v-4.89c0-4.89,2.78-7.93,7.64-7.93s7.57,2.82,7.57,7.75v3.93H40.25v2.18a3,3,0,0,0,2.93,3A2.57,2.57,0,0,0,46,128.55v-.42Zm-10.5-5.5H46v-1c0-2.68-1.11-3.57-2.86-3.57a2.73,2.73,0,0,0-2.93,3.07Z"
                    transform="translate(0 -6.76)"
                  />
                  <path
                    className={s['cls-3']}
                    d="M68.69,121.55v5.86c0,5.11-2.4,7.36-6,7.36a5.23,5.23,0,0,1-4.43-2v8.72H53.47v-27h4.39v2.18a5.31,5.31,0,0,1,4.79-2.5C66.29,114.16,68.69,116.41,68.69,121.55Zm-10.54.36v5.22c0,2.39,1.21,3.46,2.89,3.46s2.9-1.14,2.9-3.57v-5.11c0-2.46-1.18-3.61-2.9-3.61S58.15,119.45,58.15,121.91Z"
                    transform="translate(0 -6.76)"
                  />
                  <path
                    className={s['cls-3']}
                    d="M70.62,114.84c2.64,0,3.53-1.11,3.53-4.43H77.3v4.11H81v4.1H77.3v8.61c0,2.29.35,3.4,2.64,3.4a6,6,0,0,0,1.14-.08v4.18a14.47,14.47,0,0,1-1.68.11c-5.46,0-6.78-2.82-6.78-7.71v-8.51h-2C70.65,117.34,70.62,116.13,70.62,114.84Z"
                    transform="translate(0 -6.76)"
                  />
                  <path
                    className={s['cls-3']}
                    d="M98,128.13v.14c0,3.68-2.82,6.64-7.57,6.64s-7.64-3-7.64-7.86v-4.89c0-4.89,2.78-7.93,7.64-7.93S98,117.05,98,122v3.93H87.51v2.18a3,3,0,0,0,2.93,3,2.57,2.57,0,0,0,2.86-2.54v-.42Zm-10.5-5.5H93.3v-1c0-2.68-1.11-3.57-2.86-3.57a2.73,2.73,0,0,0-2.93,3.07Z"
                    transform="translate(0 -6.76)"
                  />
                  <path
                    className={s['cls-3']}
                    d="M105.41,134.55h-4.68V114.48h4.39v2.07a4.49,4.49,0,0,1,4.18-2.28,5,5,0,0,1,4.75,2.75,5.51,5.51,0,0,1,5-2.75c3.39,0,5.36,2.18,5.36,7v13.25h-4.72V121.13c0-2-1.07-2.76-2.39-2.76a2.37,2.37,0,0,0-2.39,2.68v13.5h-4.72V121.13c0-2-1-2.76-2.39-2.76s-2.39.76-2.39,2.68Z"
                    transform="translate(0 -6.76)"
                  />
                  <path
                    className={s['cls-3']}
                    d="M132,132.38v2.17h-4.4v-27h4.68v8.71a5.45,5.45,0,0,1,4.5-2c3.65,0,6,2.25,6,7.36v5.85c0,5.15-2.39,7.4-6,7.4A5.31,5.31,0,0,1,132,132.38Zm6.07-5.25V122c0-2.43-1.14-3.57-2.89-3.57s-2.9,1.07-2.9,3.46v5.22c0,2.46,1.18,3.6,2.9,3.6S138,129.59,138,127.13Z"
                    transform="translate(0 -6.76)"
                  />
                  <path
                    className={s['cls-3']}
                    d="M160.27,128.13v.14c0,3.68-2.82,6.64-7.57,6.64s-7.64-3-7.64-7.86v-4.89c0-4.89,2.78-7.93,7.64-7.93s7.57,2.82,7.57,7.75v3.93h-10.5v2.18a3,3,0,0,0,2.93,3,2.57,2.57,0,0,0,2.86-2.54v-.42Zm-10.5-5.5h5.79v-1c0-2.68-1.11-3.57-2.86-3.57a2.73,2.73,0,0,0-2.93,3.07Z"
                    transform="translate(0 -6.76)"
                  />
                  <path
                    className={s['cls-3']}
                    d="M172.7,118.87c-3.6-.28-5,1.43-5,4.65v11H163V114.48h4.39v2.72c.57-2.22,3-3.22,5.32-2.93Z"
                    transform="translate(0 -6.76)"
                  />
                  <path
                    className={s['cls-3']}
                    d="M182.06,111.8c2.68,0,3.33-.53,3.33-2.43H190v25.18h-5V116.2a9.16,9.16,0,0,1-2.93.35Z"
                    transform="translate(0 -6.76)"
                  />
                  <path
                    className={s['cls-3']}
                    d="M193.21,127.8a5.68,5.68,0,0,1,3.57-5.6c-2-1.07-3.14-2.9-3.14-5.83,0-4.35,3.35-7,8.21-7s8.22,2.65,8.22,7c0,2.89-1.11,4.79-3.11,5.79a5.59,5.59,0,0,1,3.53,5.6c0,4.43-3.64,7.18-8.64,7.18S193.21,132.23,193.21,127.8Zm8-3.82c-1.72,0-2.93.93-2.93,3.32,0,2.58,1.68,3.22,3.57,3.22s3.61-.64,3.61-3.36c0-2.32-1.29-3.18-3.11-3.18Zm-2.75-7c0,2.64,1.46,3.18,3.39,3.18s3.43-.61,3.43-3.11-1.57-3.25-3.43-3.25S198.46,114.52,198.46,117Z"
                    transform="translate(0 -6.76)"
                  />
                </g>
                <g id="end-date">
                  <path
                    className={s['cls-3']}
                    d="M860.73,141.32v-8.57c0-5.14,3.46-8.75,8.46-8.75s8.47,3.61,8.47,8.75v8.57c0,5.11-3.5,8.68-8.47,8.68S860.73,146.43,860.73,141.32Zm12,.18v-8.93c0-2.82-1.68-3.86-3.54-3.86s-3.5.93-3.5,3.82v8.93c0,2.83,1.64,3.83,3.5,3.83C870.87,145.29,872.73,144.39,872.73,141.5Z"
                    transform="translate(0 -6.76)"
                  />
                  <path
                    className={s['cls-3']}
                    d="M895.41,141.86c0,5.07-2.61,8.14-7.57,8.14s-7.65-3-7.65-7.86v-4.85c0-4.9,2.79-8,7.65-8s7.57,3,7.57,8.25h-4.72c0-2.82-1.07-4-2.85-4s-2.93.93-2.93,3.47v4.71c0,2.64,1,4,2.93,4,1.68,0,2.85-1.22,2.85-3.93Z"
                    transform="translate(0 -6.76)"
                  />
                  <path
                    className={s['cls-3']}
                    d="M897,129.93c2.64,0,3.54-1.11,3.54-4.43h3.14v4.11h3.71v4.1H903.7v8.61c0,2.29.36,3.39,2.64,3.39a6.86,6.86,0,0,0,1.14-.07v4.18a14.31,14.31,0,0,1-1.67.11c-5.47,0-6.79-2.82-6.79-7.72v-8.5h-2C897.06,132.43,897,131.21,897,129.93Z"
                    transform="translate(0 -6.76)"
                  />
                  <path
                    className={s['cls-3']}
                    d="M909.16,142v-4.83c0-4.75,2.75-7.85,7.61-7.85s7.61,3.1,7.61,7.85V142c0,4.92-2.86,8-7.61,8S909.16,147,909.16,142Zm4.72-5.4v6.07c0,2.15,1.25,3.11,2.89,3.11a2.78,2.78,0,0,0,2.89-3.11v-6.07a2.73,2.73,0,0,0-2.89-3.07C915.13,133.57,913.88,134.5,913.88,136.64Z"
                    transform="translate(0 -6.76)"
                  />
                  <path
                    className={s['cls-3']}
                    d="M931.67,147.46v2.18h-4.4v-27H932v8.71a5.45,5.45,0,0,1,4.5-2c3.65,0,6,2.25,6,7.35v5.86c0,5.14-2.39,7.39-6,7.39A5.27,5.27,0,0,1,931.67,147.46Zm6.07-5.25v-5.1c0-2.43-1.14-3.57-2.89-3.57S932,134.61,932,137v5.21c0,2.47,1.18,3.61,2.9,3.61S937.74,144.68,937.74,142.21Z"
                    transform="translate(0 -6.76)"
                  />
                  <path
                    className={s['cls-3']}
                    d="M960,143.21v.15c0,3.68-2.82,6.64-7.57,6.64s-7.64-3-7.64-7.86v-4.89c0-4.89,2.78-7.93,7.64-7.93s7.57,2.82,7.57,7.75V141h-10.5v2.18a3,3,0,0,0,2.93,3,2.57,2.57,0,0,0,2.86-2.54v-.43Zm-10.5-5.5h5.79v-1c0-2.68-1.11-3.57-2.86-3.57a2.73,2.73,0,0,0-2.93,3.07Z"
                    transform="translate(0 -6.76)"
                  />
                  <path
                    className={s['cls-3']}
                    d="M972.42,134c-3.6-.28-5,1.43-5,4.65v11h-4.68V129.57h4.39v2.71c.57-2.21,3-3.21,5.32-2.92Z"
                    transform="translate(0 -6.76)"
                  />
                  <path
                    className={s['cls-3']}
                    d="M998.1,149.64H981.78v-3.78c0-9.07,11.79-7.9,11.79-13.9a3.28,3.28,0,0,0-3.47-3.32,3.4,3.4,0,0,0-3.46,3.75h-4.86c0-5.07,3.47-8.39,8.29-8.39s8.36,3.21,8.36,7.93c0,8.61-11.54,8.28-11.68,13H998.1Z"
                    transform="translate(0 -6.76)"
                  />
                </g>
              </g>
            </g>
          </g>
        </svg>
      </div>
    </div>
  )
}