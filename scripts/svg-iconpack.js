
const fs = require("fs")
const path = require("path")

const srcFolderPath = path.join(__dirname, "../assets/iconpack")
const distFolderPath = path.join(__dirname, "../src/atoms/icon/icons")

if(fs.existsSync(distFolderPath)) {
  const files = fs.readdirSync(distFolderPath)

  for (const file of files) {
    fs.rmSync( path.join(distFolderPath, file))
  }
  fs.rmdirSync(distFolderPath)
}
fs.mkdirSync(distFolderPath)
if(!fs.existsSync(distFolderPath)) {
  throw "dist not exists " + distFolderPath
}

// Array to store the TSX file names
const tsxFileNames = []

// Read the source folder
fs.readdir(srcFolderPath, (err, files) => {
  if (err) {
    console.error("Error reading source folder:", err)

    return
  }

  // Process each SVG file
  files.forEach((file) => {
    const svgPath = path.join(srcFolderPath, file)

    // Check if the file is an SVG
    if (path.extname(file) === ".svg") {
      // Read the SVG file
      fs.readFile(svgPath, "utf8", (err, data) => {
        if (err) {
          console.error("Error reading SVG file:", err)

          return
        }

        // Modify the SVG content
        const modifiedContent = modifySVGContent(data)

        // Generate the TSX content
        const tsxContent = generateTSXContent(modifiedContent,file)

        // Get the file name without the extension
        const fileName = path.basename(file, ".svg")

        // Write the TSX file to the destination folder
        const tsxFilePath = path.join(distFolderPath, `${fileName}.tsx`)

        fs.writeFile(tsxFilePath, tsxContent, "utf8", (err) => {
          if (err) {
            console.error("Error writing TSX file:", err)

            return
          }
          // console.log(`Converted ${file} to ${path.basename(tsxFilePath)} successfully.`);

          // Add the TSX file name to the array
          tsxFileNames.push(fileName)

          // Check if all TSX files have been generated
          if (tsxFileNames.length === files.length) {
            // Generate the index.ts content
            const indexFileContent = tsxFileNames
              .map((tsxFileName) => `export * from './${tsxFileName}';`)
              .join("\n")

            // Write the index.ts file to the destination folder
            const indexPath = path.join(distFolderPath, "index.ts")

            fs.writeFile(indexPath, indexFileContent, "utf8", (err) => {
              if (err) {
                console.error("Error writing index.ts file:", err)

                return
              }
              console.log("Created index.ts file successfully.")
            })
          }
        })
      })
    }
  })
})

// Modify the SVG content as per your requirements
function modifySVGContent (svgContent) {
  // You can modify the SVG content here (e.g., add/remove attributes, change element structure, etc.)
  return svgContent
}

// Generate the TSX content using the modified SVG content
function generateTSXContent (modifiedContent,fileName) {
  const c = modifiedContent.split("\n")
  const content = c.filter(a => !!a).map(line =>{
    line = line.replace("fill-rule", "fillRule")
    line = line.replace("clip-rule", "clipRule")
    line = line.replace("clip-path", "clipPath")
    if (line.startsWith("<svg")) return "    " + line
    if (line.startsWith("</svg")) return "    " + line

    return "      " + line
  })

  const tsxTemplate = `import React from "react";

export const ${getComponentName(fileName)}: React.FC<React.SVGProps<SVGSVGElement>> = () => {
  return (
${content.join("\n")}
  )
}`

  return tsxTemplate
}

function getComponentName (fileName) {
  const baseName = path.basename(fileName, path.extname(fileName))
  const words = baseName.split(/[-_]/)
  const pascalCaseWords = words.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1)
  })

  return pascalCaseWords.join("")
}