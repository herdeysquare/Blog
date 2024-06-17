import { collection, addDoc } from 'firebase/firestore';
import {db} from './Firebase'
const saveEmail = async (email) => {
  try {
    await addDoc(collection(db, 'subscriptions'), {
      email: email,
      timestamp: new Date()
    });
    console.log('Email saved successfully!');
  } catch (error) {
    console.error('Error saving email:', error);
  }
};

export { saveEmail};
