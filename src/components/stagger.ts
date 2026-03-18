export function stagger(idx: number, perGroup = 2): string {
  const delay = Math.min(Math.floor(idx / perGroup) + 1, 3);
  return `slide-enter-delay-${delay}`;
}
