import { v4 as uuidv4 } from 'uuid';
export function GenerateUUID(): string {
  const uuid = uuidv4();
  return uuid.replaceAll('-', '');
}