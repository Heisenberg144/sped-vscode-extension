import { spedDictionary } from '../data/spedDictionary';

export function resolveField(registro: string, fieldIndex: number) {
  const register = spedDictionary[registro];

  if (!register) return null;

  const field = Object.values(register.fields)[fieldIndex];

  if (!field) return null;

  return {
    registerDescription: register.description,
    fieldName: field.name,
    fieldDescription: field.description
  };
}