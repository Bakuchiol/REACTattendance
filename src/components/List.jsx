import React, { useContext } from 'react'
import { AppContext } from '../contexts/app_context';
import ListItem from './ListItem';

function List() {
  // destructure / pull from context
  let {learners} = useContext = {AppContext};

  return (
    <div>
      <h3>Students Who Are Present:</h3>
      <ul>
        {/* conditional rendering */}
        {/* if learners array is greater than 0, map else null(show nothing) */}
        {learners.length > 0 ? learners.map((learner, i) => {
            return <ListItem key={i} learner={learner}/>;}) : null
        }
      </ul>
    </div>
  )
}

export default List
