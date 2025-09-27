import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export const alias: Record<string, string> = {
  '@': resolve(__dirname, 'src'),
  '@public': resolve(__dirname, 'public'),
  '@css': resolve(__dirname, 'src/app/styles'),
  '@icons': resolve(__dirname, 'src/shared/assets/icons'),
  '@img': resolve(__dirname, 'src/shared/assets/img'),
  '@fonts': resolve(__dirname, 'src/shared/assets/fonts'),
  '@shared': resolve(__dirname, 'src/shared'),
  '@entities': resolve(__dirname, 'src/entities'),
  '@features': resolve(__dirname, 'src/features'),
  '@widgets': resolve(__dirname, 'src/widgets'),
  '@pages': resolve(__dirname, 'src/pages'),
}
