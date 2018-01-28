export const passwordValidation = (value) =>
  value && !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/i.test(value)
    ? 'Contain at least 8 characters, contain at least 1 number, contain at least 1 lowercase character (a-z), contain at least 1 uppercase character (A-Z)' : undefined;
