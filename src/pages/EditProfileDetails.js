import UserDetails from './UserDetails';
import validate from './validateInfo';
import './Profile.css';
import logo from '../../src/logo192.png';

function EditProfileDetails(submitForm) {
  const { handleChange, values, handleSubmit, errors } = UserDetails(
    validate,
    submitForm
  );
  return (
    <div className="edit-profile">
      <img className="profile-img" src={logo} alt="photo" />

      <button className="change-photo-btn" type="submit">
        Change Photo
      </button>

      <form className="name-occupation-form" onSubmit={handleSubmit}>
        <button className="edit-btn" type="submit">
          Edit Profile
        </button>

        <div className="name-occupation">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            className="name-section"
            placeholder="Edit Name"
            value={values.name}
            onChange={handleChange}
          />
          {errors.name && <p>{errors.name}</p>}
        </div>

        <div className="name-occupation-form">
          <label htmlFor="occupation" className="form-label">
            Name
          </label>
          <input
            id="occupation"
            type="text"
            name="occupation"
            className="occupation-section"
            placeholder="Edit Occupation"
            value={values.occupation}
            onChange={handleChange}
          />
          {errors.occupation && <p>{errors.occupation}</p>}
        </div>
      </form>

      <form className="about-form" onSubmit={handleSubmit}>
        {/* <button className="edit-btn" type="submit">
          Edit Profile
        </button> */}

        <h1>ABOUT</h1>
        <div className="about-sections">
          <label htmlFor="phone" className="form-label">
            Phone
          </label>
          <input
            id="phone"
            type="tel"
            name="phone"
            className="about-section"
            placeholder="Edit Number"
            value={values.phone}
            onChange={handleChange}
          />
          {errors.phone && <p>{errors.phone}</p>}
        </div>

        <div className="about-sections">
          <label htmlFor="email" className="form-label">
            E-mail
          </label>
          <input
            id="email"
            type="email"
            name="email"
            className="about-section"
            placeholder="Edit E-mail"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>

        <div className="about-sections">
          <label htmlFor="address" className="form-label">
            Address
          </label>
          <input
            id="address"
            type="text"
            name="address"
            className="about-section"
            placeholder="Edit Address"
            value={values.address}
            onChange={handleChange}
          />
          {errors.address && <p>{errors.address}</p>}
        </div>

        <div className="about-sections">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            id="username"
            type="text"
            name="username"
            className="about-section"
            placeholder="Edit Username"
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
      </form>

      <form className="account-form" onSubmit={handleSubmit}>
        <h1>Change Password</h1>

        <div className="account-sections">
          <label htmlFor="oldpass" className="form-label">
            Old Password
          </label>
          <input
            id="oldpass"
            type="password"
            name="oldpass"
            className="account-section"
            placeholder="Enter old password"
            value={values.oldpass}
            onChange={handleChange}
          />
          {errors.oldpass && <p>{errors.oldpass}</p>}
        </div>

        <div className="account-sections">
          <label htmlFor="newpass" className="form-label">
            New Password
          </label>
          <input
            id="newpass"
            type="password"
            name="newpass"
            className="account-section"
            placeholder="Enter new password"
            value={values.newpass}
            onChange={handleChange}
          />
          {errors.newpass && <p>{errors.newpass}</p>}
        </div>
      </form>
    </div>
  );
}

export default EditProfileDetails;
