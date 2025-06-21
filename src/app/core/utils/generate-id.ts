export function generateId(min = 1, max = 9999): number {
    return Math.floor(Math.random() * (max - min + 1))
}
