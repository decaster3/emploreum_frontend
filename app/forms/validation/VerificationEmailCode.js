export const verificationEmailCodeValidation = (value) =>
  value && !/\d{6}/g.test(parseInt(value, 10))
    ? 'Wrong format!' : undefined;

export const loginValidation = (value) =>
  value && String(value).length === 0
    ? 'Wrong login format!' : undefined;
