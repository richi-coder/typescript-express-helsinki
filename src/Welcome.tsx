import React from 'react';

interface WelcomeProps {
  name: string
}

const Welcome: React.FC<WelcomeProps> = (props) => {
  console.log(process.env.MY_KEY);
  return (
    <>
    <div>{process.env.MY_KEY}</div>
    <div>Welcome {props.name}</div>
    </>
  )
}

export default Welcome