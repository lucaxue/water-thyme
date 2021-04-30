import React, { FC } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import styled from "styled-components";
import { useFirebaseContext } from "../Utils/firebaseContext";
import PlantCard from "./PlantCard";

const Dashboard: FC = () => {
  const { auth, firestore } = useFirebaseContext();
  const plantsRef = firestore.collection("plants");

  const query = plantsRef.where("uid", "==", auth?.currentUser?.uid);

  const [plants] = useCollectionData(query, { idField: "id" });
  console.log(plants);

  return (
    <div>
      <CardsWrapper>
        {plants &&
          plants.map((plant) => <PlantCard key={plant.id} data={plant} />)}
      </CardsWrapper>
    </div>
  );
};

export default Dashboard;

const CardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  min-width: 80vw;
`;
