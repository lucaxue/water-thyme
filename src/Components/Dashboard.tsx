import React, { FC } from 'react';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { useFirebaseContext } from '../Utils/firebaseContext';

const Dashboard: FC = () => {
  const { auth, firestore } = useFirebaseContext();
  const plantsRef = firestore.collection('plants');

  const query = plantsRef.where('uid', '==', auth?.currentUser?.uid);

  const [plants] = useCollectionData(query, { idField: 'id' });
  console.log(plants);

  return <div>hi you are logged in</div>;
};

export default Dashboard;
