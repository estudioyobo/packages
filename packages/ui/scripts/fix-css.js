import fs from 'fs'
import path from 'path'
const FILENAME = '../dist/style.css'
const FILE = new URL(FILENAME, import.meta.url)

fs.readFile(FILE, 'utf8', function(err, data) {
  if (err) {
    return console.log(err)
  }
  const result = data.replace(
    /theme\(colors\.primary\.5\)/g,
    'theme(colors.primary.500)'
  )

  fs.writeFile(FILE, result, 'utf8', function(err) {
    if (err) return console.log(err)
  })
})
