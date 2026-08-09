export default function myImageLoader({ src, width, quality }) {
  // If the image is a local absolute path, prepend the basePath
  if (src.startsWith('/')) {
    return `/akiibua${src}`
  }
  // Otherwise return the external URL as is
  return src
}
