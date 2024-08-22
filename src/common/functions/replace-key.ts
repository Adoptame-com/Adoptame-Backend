import { omit } from 'lodash';

export function replaceKey<T extends object>(
  object: T,
  lastKey: keyof T,
  newKey: string,
) {
  return {
    ...(lastKey in object ? { [newKey]: object[lastKey] } : {}),
    ...omit(object, lastKey),
  };
}
