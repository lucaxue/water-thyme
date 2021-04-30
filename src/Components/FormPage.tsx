import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { useFirebaseContext } from '../Utils/firebaseContext';

type Plant = {
  nickname: string;
  name: string;
  bio: string;
  waterFrequency: number;
  notification: boolean;
};

const FormPage: FC = () => {
  const [newPlant, setNewPlant] = useState<Plant>({
    nickname: '',
    name: '',
    bio: '',
    waterFrequency: 0,
    notification: false,
  });
  const { auth, firestore } = useFirebaseContext();
  const plantsRef = firestore.collection('plants');

  const addPlant = async (e: any) => {
    e.preventDefault();

    const { uid } = auth.currentUser;

    await plantsRef.add({
      ...newPlant,
      uid,
    });
  };
  return (
    <div>
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
        <button type="submit">Add new plant!</button>
      </Wrapper>
    </div>
  );
};

export default FormPage;

const Wrapper = styled.form`
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  background: rgba(255, 255, 255, 0.52);
  display: flex;
  flex-direction: column;
  padding: 5rem;
`;
