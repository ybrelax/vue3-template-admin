const projectName = import.meta.env.VITE_GLOB_APP_TITLE;

export function warn(message: string) {
  console.warn(`[${projectName} warn]: ${message}`);
}

export function error(message: string) {
  console.error(`[${projectName} error]: ${message}`);
}
