import { createHash } from 'crypto';

export async function hashPassword(password: string) {
  const saltArray = new Uint8Array(16);
  crypto.getRandomValues(saltArray);
  const salt = Array.from(saltArray, (byte) =>
    byte.toString(16).padStart(2, '0'),
  ).join('');

  const hash = createHash('sha256');
  hash.update(password + salt);
  
  return `${hash.digest('hex')}:${salt}`;
}

export async function verifyPassword(password: string, hashedPassword: string) {
  const [storedHash, salt] = hashedPassword.split(':');
  const hash = createHash('sha256');
  hash.update(password + salt);

  return hash.digest('hex') === storedHash;
}
