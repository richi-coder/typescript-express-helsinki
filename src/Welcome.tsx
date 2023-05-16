import React from 'react';

interface WelcomeProps {
  name: string
}
// comment

const Welcome: React.FC<WelcomeProps> = (props) => {
  return (
    <>
    <div>{process.env.CLAVE}</div>
    <div>Welcome {props.name}</div>
    </>
  )
}

export default Welcome