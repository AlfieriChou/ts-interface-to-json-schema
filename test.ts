import { buildJsonSchema, Options } from './index'
import * as path from 'path'

const options: Options = {
  type: '*',
  tsconfig: path.join(__dirname, 'tsconfig.json')
}

console.log(buildJsonSchema(path.join(__dirname, 'src/models'), options), null, 2)
