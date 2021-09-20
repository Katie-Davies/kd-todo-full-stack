import React from 'react'
import { useSelector } from 'react-redux'

import { hide } from './errorHelper'

export default function Error () {
  const error = useSelector(globalState => globalState.error)

  return (
    error
      ? <article className='alert-container' role='alert'>
        <div className='alert'>
          <p>{error}ERROR</p>
        </div>
        <a className='close' onClick={hide}>&#10005;</a>
      </article>
      : null
  )
}
