export const errorToString = (e: unknown): string => {
  if (e instanceof Error) {
    const err = e as Error;
    return err.stack ?? err.name + ': ' + err.message;
  }
  return `${e}`;
};
