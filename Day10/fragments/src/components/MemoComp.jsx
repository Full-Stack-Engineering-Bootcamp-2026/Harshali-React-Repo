import React from 'react'

function MemoComp({names}) {
    console.log('rendering memo compo')
  return (
    <div>
      {names}
    </div>
  )
}

export default React.memo(MemoComp)
