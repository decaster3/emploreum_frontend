export const verificationEmailCodeValidation = (value) =>
  value && !/\d{6}/g.test(parseInt(value, 10))
    ? 'Wrong format!' : undefined;
