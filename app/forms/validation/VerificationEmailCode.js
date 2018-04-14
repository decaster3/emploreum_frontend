export const verificationEmailCodeValidation = (value) =>
  value && !/\d{6}/g.test(parseInt(value, 10))
    ? 'Wrong format!' : undefined;

export const loginValidation = (value) =>
  value && String(value).length === 0 && !/^[a-zA-Z0-9]+$/g.test(value)
    ? 'Wrong login format!' : undefined;
