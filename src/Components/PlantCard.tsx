import styled from 'styled-components';
import React, { FC } from 'react';

const Card = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  padding: 5rem;
  display: grid;
  background: rgba(255, 255, 255, 0.52);
  color: rgb(51, 55, 59);
  width: 20rem;
  font-size: 1rem;
`;
type Plant = {
  nickname: string;
  name: string;
  bio: string;
  waterFrequency: number;
  notification: boolean;
};
interface props {
  data: Plant | any;
}

const PlantCard: FC<props> = ({
  data: { nickname, name, bio, waterFrequency, notification },
}) => {
  return (
    <Card>
      <h1>{nickname}</h1>
      <h2>{name}</h2>
      <h2>{bio}</h2>
      <h2>{waterFrequency}</h2>
      <h2>{notification}</h2>
    </Card>
  );
};

export default PlantCard;
