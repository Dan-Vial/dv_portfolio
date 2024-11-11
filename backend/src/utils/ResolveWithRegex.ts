import { readdir } from 'fs/promises'
import { join } from 'path'

export async function resolveWithRegex(absolutePathDir: string, regexFile: RegExp) {
  const files = await readdir(absolutePathDir)
  const matchedFile = files.find(file => regexFile.test(file))

  if (!matchedFile) {
    throw new Error(`File matching ${regexFile} not found in directory ${absolutePathDir}`)
  }

  return join(absolutePathDir, matchedFile)
}