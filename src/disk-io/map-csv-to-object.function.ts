export function mapCsvToObject<T extends ILiner>(line: string, schema: string[], delimiter = ','): T {
  const object: T = {} as T;
  const data = line.split(delimiter);
  schema.forEach((key, index) => {
    object[key ? key.trim() : key] = data[index] ? data[index].trim() : data[index];
  });
  object.line = line;
  return object;
}

export interface ILiner {
  line: string;
}