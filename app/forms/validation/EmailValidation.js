// export const asyncValidate = (values) => sleep(1000)
//     .then(() => {
//       if (['john@mm.ru', 'qeqwe'].includes(values.get('email'))) {
//         throw { email: 'That email is taken!' };
//       }
//     });

export const emailValidation = (value) =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address' : undefined;

// const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
