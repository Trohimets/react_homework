import fsp from 'node:fs/promises'
import path from 'node:path'
import url from 'node:url'

const __dirname = path.dirname(url.fileURLToPath(import.meta.url))

const makedir = async () => {
    const dirpath = path.resolve(__dirname, 'tempDir')

    try {
        await fsp.access(dirpath)
        console.log('Директория уже существует')
    }
    catch (e) {
        await fsp.mkdir(dirpath)
        console.log('Директория создана')
    }
}

makedir()