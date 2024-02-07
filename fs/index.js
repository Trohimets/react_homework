import path from 'node:path'
import fsp from 'node:fs/promises'
import fs from 'node:fs/promises'



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

const writeFile = async () => {
    const filepath = path.resolve(process.cwd(), '..', 'path', 'file1.js')

    try {
        await fsp.writeFile(filepath, 'new file data 1', 'utf8')
    }
    catch (e) {
        console.log(e)
    }
}

const appendFile = async () => {
    const filepath = path.resolve(process.cwd(), '..', 'path', 'file1.js')

    try {
        await fsp.appendFile(filepath, 'new file data 111111', 'utf8')
    }
    catch (e) {
        console.log(e)
    }
}

const readFileExists = async () => {
    const filepath = path.resolve(process.cwd(), '..', 'path', 'file1.js')

    try {
        await fsp.access(filepath)
        const filedata = await fsp.readFile(filepath, { encoding: 'utf8'})
        console.log(filedata)
    }
    catch (e) {
        console.log('File is not exists')
    }
}

const createDir = async () => {
    const dirpath = path.resolve(process.cwd(), '..', 'tempDir')

    try {
        await fsp.mkdir(dirpath)
        console.log('New dir created')
    }
    catch (e) {
        console.log('ERROR dir creation')
    }
}

const readDir = async () => {
    const dirpath = path.resolve(process.cwd(), '..', 'tempDir')

    try {
        const dirData = await fsp.readdir(dirpath)
        console.log(dirData)
    }
    catch (e) {
        console.log(e)
    }
}



const dirpath = path.resolve(process.cwd(), '..', 'tempDir')
const file1Path = path.resolve(dirpath, 'file1.js')
const file2Path = path.resolve(dirpath, 'file2.js')



const readFilesOrder = (filePath) => {
    fsp.lstat(filePath).then((res)=>{
        const fileName = path.basename(filePath);
        const dateFile = new Date(res.birthtime)
        const day = dateFile.getDate().toString().padStart(2, '0'); // Приводим к двузначному виду, например, 05
        const month = (dateFile.getMonth() + 1).toString().padStart(2, '0'); // Месяцы начинаются с 0, поэтому добавляем 1
        const year = dateFile.getFullYear();
        const formattedDate = `${day}.${month}.${year}`;
        result += `${fileName}      ${res.size}       ${formattedDate}\n`
        })
}

const getAllFilesInDirectory = async (dirPath) => {
    let result = `имя файла | размер | дата создания\n`
    try {
        const files = await fs.readdir(dirPath);
        for (const file of files) {
          const filePath = path.join(dirPath, file);
          readFilesOrder(filePath)
        }
        console.log(result)
      } catch (err) {
        console.error('Error reading directory:', err);
      }
    }
  
  getAllFilesInDirectory(dirpath)

// readFilesOrder([file1Path, file2Path])



