import { numerologyConfig } from '@/config/numerologyConfig';

export function reduceNumber(value: number, preserveMaster = numerologyConfig.preserveMasterNumbers): number {
  let current = Math.abs(Math.round(value));
  while (current > 9 && !(preserveMaster && numerologyConfig.masterNumbers.includes(current))) {
    current = String(current).split('').reduce((sum, digit) => sum + Number(digit), 0);
  }
  return current;
}

export function calculateLifePathNumber(day: number, month: number, year: number): number {
  const digits = `${day}${month}${year}`.replace(/\D/g, '').split('').reduce((sum, digit) => sum + Number(digit), 0);
  return reduceNumber(digits);
}

export function calculateNameNumber(name: string): number {
  return reduceNumber(cleanName(name).split('').reduce((sum, letter) => sum + (numerologyConfig.letterValues[letter] ?? 0), 0));
}

export function calculateDestinyNumber(name: string): number { return calculateNameNumber(name); }

export function calculateSoulUrgeNumber(name: string): number {
  return reduceNumber(cleanName(name).split('').filter((letter) => 'AEIOU'.includes(letter)).reduce((sum, letter) => sum + (numerologyConfig.letterValues[letter] ?? 0), 0));
}

export function calculatePersonalityNumber(name: string): number {
  return reduceNumber(cleanName(name).split('').filter((letter) => !'AEIOU'.includes(letter)).reduce((sum, letter) => sum + (numerologyConfig.letterValues[letter] ?? 0), 0));
}

export function calculatePersonalYearNumber(day: number, month: number, year: number): number {
  return reduceNumber(Number(`${day}${month}${year}`.replace(/\D/g, '')));
}

export function calculateCompatibility(first: { day: number; month: number; year: number }, second: { day: number; month: number; year: number }): { first: number; second: number; combined: number } {
  const firstNumber = calculateLifePathNumber(first.day, first.month, first.year);
  const secondNumber = calculateLifePathNumber(second.day, second.month, second.year);
  return { first: firstNumber, second: secondNumber, combined: reduceNumber(firstNumber + secondNumber) };
}

export function calculateBusinessNameNumber(name: string): number { return calculateNameNumber(name); }

export function calculateMobileNumber(phone: string): number { return reduceNumber(phone.replace(/\D/g, '').split('').reduce((sum, digit) => sum + Number(digit), 0)); }

export function calculateVehicleNumber(registration: string): number {
  return reduceNumber(cleanName(registration).split('').reduce((sum, value) => {
    const mapped = numerologyConfig.letterValues[value];
    if (mapped !== undefined) return sum + mapped;
    const numeric = Number(value);
    return sum + (Number.isNaN(numeric) ? 0 : numeric);
  }, 0));
}

function cleanName(name: string): string { return name.toUpperCase().replace(/[^A-Z]/g, ''); }
