import React from 'react'
function SocialCardContent() {
    const details={
        name:'The Ladybug',
        content:'Welcome to my blog'
    }
    const hiddenDetails={
        name:'The Ladybug',
        content:'Nice Meeting you.'
    }
  return (
    <div>
        <div className='text-on-image'>
            <h3>{details.content}</h3>
            <p>{details.name}</p>
        </div>
        <div className='hidden-text'>
            <h3>{hiddenDetails.content}</h3>
            <p>{hiddenDetails.name}</p>
        </div>
    </div>

  )
}

export default SocialCardContent