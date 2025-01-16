import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getFirstLetters(name: string) {
  return name
    .split(' ')
    .map(word => word[0])
    .join('');
}

export function formatName(name: string) {
  return name.replace(/([A-Z])/g, ' $1').trim();
}
