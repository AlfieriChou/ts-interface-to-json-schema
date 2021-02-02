import { buildJsonSchema, Options } from './index'
import * as path from 'path'

const options: Options = {
  type: '*',
  tsconfig: path.join(__dirname, 'tsconfig.json')
}

const ret = buildJsonSchema(path.join(__dirname, 'src/models'), options)

console.log(JSON.stringify(ret, null, 2))
