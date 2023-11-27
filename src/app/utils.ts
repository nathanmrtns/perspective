const shimmer = (w: number, h: number) => `
    <svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <defs>
        <linearGradient id="g">
        <stop stop-color="#e6e6e6" offset="20%" />
        <stop stop-color="#bfbfbf" offset="50%" />
        <stop stop-color="#e6e6e6" offset="70%" />
        </linearGradient>
    </defs>
    <rect width="${w}" height="${h}" fill="#e6e6e6" />
    <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
    <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
    </svg>`

const toBase64 = (str: string) =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str)

export const base64Shimmer = (w:number, h: number) => toBase64(shimmer(w, h));