import { uploadPhoto, createUser } from './utils.js';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
  .then((values) => {
    console.log(`${value[0].body} ${value[1].firstName} ${value[1].lastname}`);
  })
  .catch(() => console.log('Signup system offline'));
}