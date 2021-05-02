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
    <Container>
      <Header>
        <div>
          <h1>Your Beautiful Plants</h1>
          <p>Have you forgotten to water your plants?</p>
        </div>
        <HeaderImg
          src="https://images.unsplash.com/photo-1471086569966-db3eebc25a59?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          alt="plant in water jar"
        />
      </Header>
      <CardsWrapper>
        {plants &&
          plants.map((plant) => <PlantCard key={plant.id} data={plant} />)}
      </CardsWrapper>
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  place-items: center;
  grid-template-rows: 50vh auto;
  width: 100%;
  grid-gap: 5rem;
  margin-bottom: 5rem;
`;

const Header = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  place-items: center;
  width: 100%;
  background: #ebedee;
  letter-spacing: 0.1rem;
`;

const HeaderImg = styled.img`
  height: 50vh;
  transform: scaleX(-1);
`;

const CardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  width: 80vw;
`;
