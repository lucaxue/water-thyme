import React from 'react';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { useFirebaseContext } from '../utils/firebaseContext';
import styled from 'styled-components';
import { PlantCard } from '../components/PlantCard';

export const DashboardPage: React.FC = () => {
  const { auth, firestore } = useFirebaseContext();

  const plantsRef = firestore.collection('plants');
  const query = plantsRef.where('uid', '==', auth?.currentUser?.uid);
  const [plants] = useCollectionData(query, { idField: 'id' });

  return (
    <div>
      <h1>Your beautiful plants</h1>
      <CardsWrapper>
        {plants &&
          plants.map((plant) => <PlantCard key={plant.id} data={plant} />)}
      </CardsWrapper>
    </div>
  );
};

const CardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  min-width: 80vw;
`;
