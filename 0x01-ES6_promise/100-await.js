import {uploadPhoto, createUser} from './utils.js';

export default async function asyncUploadUser() {
  let photo;
  let user;
  try {
    // upload a photo asynchronously
    phoot = await uploadPhoto();
    // create user asynchronously
    user = await createUser();
  } catch (error) {
    photo = null;
    user = null;
  }
  return {photo, user};
}