export const formatDate = (date) => {
  return `${date.getFullYear()}-${
    ('0' + date.getMonth()).slice(-2)}-${
    ('0' + date.getDay()).slice(-2)
  }`;
};
