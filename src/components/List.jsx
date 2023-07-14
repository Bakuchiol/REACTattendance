import React from 'react'

import ListItem from './ListItem';

function List(props) {
  return (
    <div>
      <h3>Students Who Are Present:</h3>
      <ul>
        {/* conditional rendering */}
        {/* if learners array is greater than 0, map else null(show nothing) */}
        {props.learners.length > 0 ? props.learners.map((learner, i) => {
            return <ListItem key={i} learner={learner}/>;}) : null
        }
      </ul>
    </div>
  )
}

export default List
