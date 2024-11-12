import { v4 as uuidv4 } from 'uuid';
import * as Lodash from 'lodash';
export function GenerateUUID(): string {
  const uuid = uuidv4();
  return uuid.replaceAll('-', '');
}

/**
 * 数组去重
 * @param list
 * @returns
 */
export function Uniq(list: Array<number | string>) {
  return Lodash.uniq(list);
}
