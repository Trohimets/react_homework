import fsp from 'node:fs/promises'
import path from 'node:path'
import url from 'node:url'

const __dirname = path.dirname(url.fileURLToPath(import.meta.url))

const mkfile = async () => {
    const filepath = path.resolve(__dirname, 'tempDir', 'tempFile.js')

    try {
        await fsp.access(filepath)
        console.log('Файл уже существует')
    }
    catch (e) {
        await fsp.writeFile(filepath, 'const obj = 1', 'utf-8')
        console.log('Файл успешно создан')
    }
}

mkfile()