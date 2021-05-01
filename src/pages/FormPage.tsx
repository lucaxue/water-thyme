import React, { useState } from 'react';
import { useFirebaseContext } from '../utils/firebaseContext';
import styled from 'styled-components';
import { Button } from '../components/Button';

type Plant = {
  nickname: string;
  name: string;
  bio: string;
  waterFrequency: number;
  notification: boolean;
};

export const FormPage: React.FC = () => {
  const { auth, firestore } = useFirebaseContext();
  const plantsRef = firestore.collection('plants');

  const [newPlant, setNewPlant] = useState<Plant>({
    nickname: '',
    name: '',
    bio: '',
    waterFrequency: 0,
    notification: false,
  });

  const addPlant: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const { uid } = auth.currentUser;

    await plantsRef.add({
      ...newPlant,
      uid,
    });
  };

  return (
    <div>
      <h1>Add your new plant</h1>
      <Wrapper onSubmit={addPlant}>
        <label htmlFor="nickname">Nickname</label>
        <input
          id="nickname"
          value={newPlant.nickname}
          onChange={({ target: { value } }) => {
            setNewPlant({ ...newPlant, nickname: value });
          }}
        />
        <label htmlFor="name">Name</label>
        <input
          id="name"
          value={newPlant.name}
          onChange={({ target: { value } }) => {
            setNewPlant({ ...newPlant, name: value });
          }}
        />
        <label htmlFor="bio">Bio</label>
        <input
          id="bio"
          value={newPlant.bio}
          onChange={({ target: { value } }) => {
            setNewPlant({ ...newPlant, bio: value });
          }}
        />
        <label htmlFor="water-frequency">Water Frequency</label>
        <input
          type="number"
          min="0"
          id="water-frequency"
          value={newPlant.waterFrequency}
          onChange={({ target: { value } }) => {
            setNewPlant({ ...newPlant, waterFrequency: +value });
          }}
        />
        <label htmlFor="notification">Notification</label>
        <input
          type="checkbox"
          id="notification"
          checked={newPlant.notification}
          onChange={({ target: { checked } }) => {
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
