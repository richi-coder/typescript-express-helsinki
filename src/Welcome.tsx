import React from 'react';
import * as dotenv from 'dotenv'
dotenv.config()

interface WelcomeProps {
  name: string
}
// comment

const Welcome: React.FC<WelcomeProps> = (props) => {
  return (
    <>
    <div>{process.env.ENV_CLAVE}</div>
    <div>Welcome {props.name}</div>
    </>
  )
}

export default Welcome