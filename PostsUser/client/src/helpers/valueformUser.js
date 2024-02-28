const validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
const numberRegex = /\d/;
export const validation = (data) => {
  const errors = {};
  if (!data.name) return "ingrese el nombre";
  if (!data.email) return "ingrese el email";
  if (!data.password) return "ingrese la contraseña";

  return errors;
};
