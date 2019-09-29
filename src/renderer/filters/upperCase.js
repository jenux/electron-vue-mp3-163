export default function (val) {
  if (!val) return ''
  return typeof val === 'string' ? val.toUpperCase() : val
}
