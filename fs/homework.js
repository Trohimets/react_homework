import path from 'node:path'
import fs from 'node:fs/promises'

async function getFileInfoInDirectory(dirPath) {
  try {
    const files = await fs.readdir(dirPath);
    let resultString = "Имя файла | Размер | Дата создания\n";
    for (const file of files) {
      const filePath = path.join(dirPath, file);
      const stats = await fs.stat(filePath);
      const fileSize = stats.size;
      const fileCreationDate = new Date(stats.birthtime)
      const day = fileCreationDate.getDate().toString().padStart(2, '0'); // Приводим к двузначному виду, например, 05
      const month = (fileCreationDate.getMonth() + 1).toString().padStart(2, '0'); // Месяцы начинаются с 0, поэтому добавляем 1
      const year = fileCreationDate.getFullYear();
      const formattedDate = `${day}.${month}.${year}`;
      resultString += `${file} | ${fileSize} bytes | ${formattedDate}\n`;
    }
    return resultString;
  } catch (err) {
    console.error('Error reading directory:', err)
  }
}