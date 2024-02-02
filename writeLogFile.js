import fsp from 'node:fs/promises'
import path from 'node:path'
import url from 'node:url'

const __dirname = path.dirname(url.fileURLToPath(import.meta.url))

const writeLogFile = async () => {
    const filepath = path.resolve(__dirname, 'tempDir', 'tempFile.js')
    let timerId
try {
    await fs.access(filepath)
    setInterval(async () => {
        await fsp.appendFile(filepath, new Date().toLocaleString('ru-RU', {timeZone: 'UTC'}), 'utf-8')
    }, 5000)
    console.log('Лог перезаписан')
    }
    catch (e) {
        await fsp.appendFile(filepath, `${new Date().toLocaleString('ru-RU', {timeZone: 'UTC'})}\n`, 'utf-8')
        console.log('Лог сохранен')
    }
    setTimeout(() => writeLogFile(), 2000)
    setTimeout(() => {}, 1000000)
}

writeLogFile()