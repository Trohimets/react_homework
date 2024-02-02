import path from 'node:path'
import fsp from 'node:fs/promises'



const readFile = async () => {
    const filepath = path.resolve(process.cwd(), '..', 'path', 'file1.js')
    console.log(filepath)
    
    try {
        const filedata = await fsp.readFile(filepath, { encoding: 'utf8'})
        console.log(filedata)
    }
    catch (e) {
        console.log(e)
    }
    
}
readFile()