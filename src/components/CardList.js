import React from 'react';

import Card from './Card';

const cardList = ({robots}) => {
  const cards = robots.map(robot => <Card key={robot.id} {...robot} />);
  return <div>{cards}</div>;
};

export default cardList;
