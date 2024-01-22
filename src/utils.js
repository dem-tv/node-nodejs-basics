import { fileURLToPath } from 'url';
import { dirname } from 'path';

export const getFileData = (url) => {
  const __filename = fileURLToPath(url);
  const __dirname = dirname(__filename);
  return {__dirname, __filename}
}