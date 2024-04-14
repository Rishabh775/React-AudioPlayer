import toast from "react-hot-toast";

interface FormValues {
  email: string;
  password: string;
}

interface FormErrors {
  email?: string;
  password?: string;
}

// validate login username
export async function isValidateEmail(values: FormValues): Promise<FormErrors> {
  return new Promise((resolve) => {
    const errors: FormErrors = isValidEmail({}, values);
    resolve(errors);
  });
}

// validate login password
export async function isValidatePassword(
  values: FormValues
): Promise<FormErrors> {
  return new Promise((resolve) => {
    const errors: FormErrors = isValidPassword({}, values);
    resolve(errors);
  });
}

// validate email address
function isValidEmail(error: FormErrors = {}, values: FormValues): FormErrors {
  if (!values.email) {
    error.email = toast.error("Email or username is required !!!");
  } else if (values.email.includes(" ")) {
    error.email = toast.error("Please enter a valid username!");
  }
  return error;
}

// validate password
function isValidPassword(
  error: FormErrors = {},
  values: FormValues
): FormErrors {
  const specialChars = /[`!@#$%^&*()_+\-=\[\]{},':"\\|,.<>\/?~]/;

  if (!values.password) {
    error.password = toast.error("Password is required !!!");
  } else if (values.password.includes(" ")) {
    error.password = toast.error("Please enter a valid password!");
  } else if (values.password.length < 4) {
    error.password = toast.error(
      "Password must be more than 4 characters long!"
    );
  } else if (!specialChars.test(values.password)) {
    error.password = toast.error("Password must have specials characters!");
  }
  return error;
}
