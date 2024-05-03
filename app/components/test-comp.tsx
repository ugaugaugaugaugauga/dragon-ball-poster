import React from 'react'

type Props = {
  children: React.ReactNode
}

const TestPage = ({ children }: Props) => {
  const childrenArray = React.Children.toArray(children)

  return (
    <div>
      <h1>Hello from TestPage!</h1>
      <div>
        {childrenArray.map((child, index) => (
          <div key={index}>{child}</div>
        ))}
      </div>
    </div>
  )
}

export default TestPage
