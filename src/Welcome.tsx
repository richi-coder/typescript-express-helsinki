import React from 'react';

interface WelcomeProps {
  name: string
}

const Welcome: React.FC<WelcomeProps> = (props) => {
  return (
    <div>Welcome {props.name}</div>
  )
}

export default Welcome