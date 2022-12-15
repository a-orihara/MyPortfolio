import React from 'react'

type Props = {
  children: React.ReactNode
}

const SecondaryButton = (props:Props):JSX.Element => {
  return (
    // childrenでボタンの名称を受け取って使い回しできるようにする
    <button className="btn-primary bg-basic-pink hover:bg-hover-pink">
      {props.children}
    </button>
  )
}

export default SecondaryButton