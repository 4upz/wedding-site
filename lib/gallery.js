import path from 'path'
import fs from 'fs'

const galleryDirectory = path.join(process.cwd(), 'public/gallery')

export function getGalleryImages() {
  const fileNames = fs.readdirSync(galleryDirectory)

  //get all image file paths from gallery folder
  console.log(galleryDirectory)

  return fileNames.map((fileName) => ({
    src: `/gallery/${fileName}`,
    alt: fileName.replace(/\.[^/.]+$/, ''), // Remove extension from file name
  }))
}
