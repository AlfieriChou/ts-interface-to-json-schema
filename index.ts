import * as tsj from 'ts-json-schema-generator'
import * as readDirFilenames from 'read-dir-filenames'

export interface Options {
  type: string
  tsconfig: string
}

export const buildJsonSchema = (interfaceModelsPath: string, options: Options) => {
  const { type, tsconfig } = options
  const filepaths: string[] = readDirFilenames(interfaceModelsPath)
  return filepaths.reduce((acc, filepath) => {
    if (filepath.endsWith('ts')) {
      return acc
    }
    const { definitions } = tsj.createGenerator({
      type,
      tsconfig,
      path: filepath
    }).createSchema(type)
    return { ...acc, ...definitions }
  }, {})
}
