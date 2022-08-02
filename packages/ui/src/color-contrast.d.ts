declare module 'relative-luminance' {
  type RGBColor = [number, number, number, number?]
  export default function relativeLuminance(arr: RGBColor): number
}
