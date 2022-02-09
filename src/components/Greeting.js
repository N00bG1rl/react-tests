import { useState } from 'react'

import OutPut from './Output'

const Greeting = () => {
  const [changeText, setChangeText] = useState(false)

  const handleChange = () => {
    setChangeText(true)
  }

  return (
    <div>
      <h2>Hello World</h2>
      {!changeText && <OutPut>It's good to see you!</OutPut>}
      {changeText && <OutPut>Bye!</OutPut>}
      <button onClick={handleChange}>Change text!</button>
    </div>
  )
}

export default Greeting
