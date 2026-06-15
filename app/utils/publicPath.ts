export const publicPath = (path: string): string => {
  const baseURL = useRuntimeConfig().app.baseURL;

  return `${baseURL}${path.replace(/^\//, '')}`;
};