import { uploadPhoto, createUser } from './utils.js';

export default function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()])
    .then((results) => {
      results.forEach((result) => {
        console.log(result.body || `${result.firstName} ${result.lastName}`);
      });
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}