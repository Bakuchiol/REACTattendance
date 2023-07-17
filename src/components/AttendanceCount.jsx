import React, { useContext } from 'react'
import { AppContext } from '../contexts/app_context'

function AttendanceCount() {
  let {learners} = useContext = {AppContext}
  return (
    <div>
      <h3>Total Learners Present: {learners.length}</h3>
    </div>
  )
}

export default AttendanceCount
