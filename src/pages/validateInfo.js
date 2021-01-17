export default function validateInfo(values) {
  let errors = {};

  if (!values.name.trim()) {
    errors.name = 'Name required';
  }

  if (!values.occupation.trim()) {
    errors.occupation = 'Occupation required';
  }

  if (!values.phone) {
    errors.phone = 'Phone number required!';
  } else if (values.phone.length < 11) {
    errors.phone = 'Number needs to be 11 characters';
  }

  if (!values.email) {
    errors.email = 'E-mail required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = 'E-mail address is invalid';
  }

  if (!values.address) {
    errors.address = 'Address required';
  } else if (values.address.length < 8) {
    errors.address = 'Address required 2';
  }

  if (!values.username.trim()) {
    errors.username = 'Username required';
  }

  if (!values.oldpass) {
    errors.oldpass = 'Password required';
  } else if (values.oldpass.length < 8) {
    errors.oldpass = 'Password need to be 8 characters or more!';
  }

  if (!values.newpass) {
    errors.newpass = 'Password required';
  } else if (values.newpass.length < 8) {
    errors.newpass = 'Password need to be 8 characters or more!';
  }

  return errors;
}
