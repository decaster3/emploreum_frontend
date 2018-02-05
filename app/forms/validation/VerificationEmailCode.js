export const VerificationEmailCodeValidation = (value) =>
  value && !/d{6}/i.test(value)
    ? 'Wrong format!' : undefined;

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const asyncValidate = (values) => {
  return sleep(1000)
    .then(() => {
      if (values.get('code') !== '123123') {
        throw { code: 'Wrong code!' }
      }
    });
};
