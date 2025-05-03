export const compareName = (name, surname) => {
  return `${name} ${surname}`;
};

export const getInitialNameSurname = (name, surname) => {
  const nameInitial = name[0].charAt(0).toUpperCase();
  const surnameInitial = surname[0].charAt(0).toUpperCase();
  return nameInitial + surnameInitial;
};

export const getRadndomColor = () => {
  const randomColor = `#${Math.floor(Math.random() * 16773215)
    .toString()
    .padStart(6, '0')}`;
  return randomColor;
};
