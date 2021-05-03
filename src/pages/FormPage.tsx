import React, { useState } from 'react';
import { useFirebaseContext } from '../utils/firebaseContext';
import styled from 'styled-components';
import { Button } from '../components/Button';
import { Toggle } from '../components/Toggle';

type Plant = {
  nickname: string;
  name: string;
  bio: string;
  waterFrequency: number;
  notification: boolean;
};

const initialPlant: Plant = {
  nickname: '',
  name: '',
  bio: '',
  waterFrequency: 0,
  notification: true,
};

export const FormPage: React.FC = () => {
  const { auth, firestore } = useFirebaseContext();
  const plantsRef = firestore.collection('plants');

  const nextWateringDay = new Date();

  const [newPlant, setNewPlant] = useState<Plant>(initialPlant);

  const addPlant: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const { uid } = auth.currentUser;

    nextWateringDay.setDate(
      nextWateringDay.getDate() + newPlant.waterFrequency
    );

    await plantsRef.add({
      ...newPlant,
      nextWateringDay,
      uid,
    });

    setNewPlant(initialPlant);
  };

  return (
    <div>
      <h1>Add your new plant</h1>
      <Wrapper onSubmit={addPlant}>
        <Label htmlFor="nickname">Nickname</Label>
        <Input
          id="nickname"
          value={newPlant.nickname}
          placeholder="What's your plant called?"
          onChange={({ target: { value } }) => {
            setNewPlant({ ...newPlant, nickname: value });
          }}
        />
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          value={newPlant.name}
          placeholder="What's their species?"
          onChange={({ target: { value } }) => {
            setNewPlant({ ...newPlant, name: value });
          }}
        />
        <Label htmlFor="bio">Bio</Label>
        <Input
          id="bio"
          value={newPlant.bio}
          placeholder="Describe your plant"
          onChange={({ target: { value } }) => {
            setNewPlant({ ...newPlant, bio: value });
          }}
        />
        <Label htmlFor="water-frequency">Water Frequency</Label>
        <Input
          type="number"
          min="0"
          id="water-frequency"
          placeholder="How often do you need to water it?"
          value={newPlant.waterFrequency}
          onChange={({ target: { value } }) => {
            setNewPlant({ ...newPlant, waterFrequency: +value });
          }}
        />
        <Label htmlFor="notification">Notification</Label>
        <Toggle
          id="notification"
          checked={newPlant.notification}
          onChange={({ target: { checked } }) => {
            console.log(checked);
            setNewPlant({ ...newPlant, notification: checked });
          }}
        />
        <Button type="submit">Add new plant!</Button>
      </Wrapper>
    </div>
  );
};

const Wrapper = styled.form`
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  background: rgba(255, 255, 255, 0.52);
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 5rem;
`;

const Input = styled.input`
  padding: 0.5rem;
  font-size: 1.1rem;
  letter-spacing: 0.1rem;
  font-weight: 100;
  border: none;
  border: 2px solid #e4e2e2;
  border-radius: 5px;
  transition: 0.2s;
`;

const Label = styled.label`
  font-size: 1.2rem;
  letter-spacing: 2px;
`;
