import EditProfileDetails from './EditProfileDetails';
import './Profile.css';
import EditDetailsSuccess from './EditDetailsSuccess';
import { useState } from 'react';

function Profile() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }

  return (
    <div>
      {!isSubmitted ? (
        <EditProfileDetails submitForm={submitForm} />
      ) : (
        <EditDetailsSuccess />
      )}
    </div>
  );
}

export default Profile;
