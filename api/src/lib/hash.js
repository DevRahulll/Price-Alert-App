import bcrypt from "bcrypt";

export async function hashPassword(passwordInputByUser) {
  const hashedPassword = await bcrypt.hash(passwordInputByUser, 10);
  return hashedPassword;
}

export async function validatePassword(passwordInputByUser, password) {
  return bcrypt.compare(passwordInputByUser, password);
}
