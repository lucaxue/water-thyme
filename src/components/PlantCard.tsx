import React from 'react';
import styled, { css } from 'styled-components';
import { useFirebaseContext } from '../utils/firebaseContext';
import { Button } from './Button';

type Plant = {
  id: string;
  nickname: string;
  name: string;
  bio: string;
  waterFrequency: number;
  notification: boolean;
  nextWateringDay: Date;
};
interface props {
  data: Plant | any;
}

export const PlantCard: React.FC<props> = ({
  data: {
    id,
    nickname,
    name,
    bio,
    waterFrequency,
    notification,
    nextWateringDay,
  },
}) => {
  const { firestore } = useFirebaseContext();
  const plantsRef = firestore.collection('plants');

  //Sets new watering day
  const newWateringDay = new Date();
  newWateringDay.setDate(newWateringDay.getDate() + waterFrequency);

  const updatePlant = async () => {
    await plantsRef.doc(id).update({ nextWateringDay: newWateringDay });
  };

  const needsWatering = new Date() > new Date(nextWateringDay.toDate());

  return (
    <Card urgent={needsWatering}>
      <h1>{nickname}</h1>
      <p>{name}</p>
      <h2>
        Water on:
        <br />
        {new Date(nextWateringDay.toDate()).toUTCString().slice(0, -7)}
      </h2>
      <p>
        Water every {waterFrequency === 1 ? 'day' : waterFrequency + ' days'}
      </p>
      <p>{bio}</p>
      <h2>{notification}</h2>
      {needsWatering && <Button onClick={updatePlant}>Water</Button>}
    </Card>
  );
};

const Card = styled.div<{ urgent?: boolean }>`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  padding: 5rem;
  display: grid;
  background: rgba(255, 255, 255, 0.52);
  color: rgb(51, 55, 59);
  width: 20rem;
  font-size: 1rem;
  transition: 0.2s;
  line-height: 2rem;
  &:hover {
    transform: scale(1.02);
    transform: translateY(2);
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.2);
  }
  ${(props) =>
    props.urgent &&
    css`
      border: 5px solid #48bb78;
    `}
`;
