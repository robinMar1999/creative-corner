import path from "path";
import { fileURLToPath } from "node:url";

export const dirname = (url) => {
  return path.dirname(fileURLToPath(url));
};

export const filename = (url) => {
  return fileURLToPath(url);
};

export const rootDir = () => {
  return process.cwd();
};

export default { dirname, filename, rootDir };
