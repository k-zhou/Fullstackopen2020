import React, {useState, useEffect} from 'react'

const NotificationBox = ({msg, time, type, signal}) => {
  const [output, setOutput] = useState(msg)
  const [hasActive, setActive] = useState(true)
  const [currentTO, setTO] = useState(setTimeout( () => {}, 1000))

  useEffect( () => {
    setOutput(msg)
    if (hasActive === true) {clearTimeout(currentTO)}
    setTO(
      setTimeout( () => {
        setOutput('')
        setActive(false)
        }, time
      )
    )
    setActive(true)
  }, [signal])

  return (
    <div className={hasActive === true ? type : 'inactive'}>{output}</div>
  )
}
export default NotificationBox
