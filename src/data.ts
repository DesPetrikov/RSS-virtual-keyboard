import backspaceSvg from './assets/svg/keyboard-delete.svg';
import enterSvg from './assets/svg/keyboard-return.svg';
import spaceSvg from './assets/svg/keyboard-space-bar.svg';
import languageSvg from './assets/svg/language.svg';
import { dataType } from './commonTypes/dataType.types';

export const data: dataType[][] = [
  [
    {
      ru: { key: 'ё', shift: 'Ё' },
      en: { key: '`', shift: '~' },
      code: 'Backquote',
    },
    {
      ru: { key: '1', shift: '!' },
      en: { key: '1', shift: '!' },
      code: 'Digit1',
    },
    {
      ru: { key: '2', shift: '"' },
      en: { key: '2', shift: '@' },
      code: 'Digit2',
    },
    {
      ru: { key: '3', shift: '№' },
      en: { key: '3', shift: '#' },
      code: 'Digit3',
    },
    {
      ru: { key: '4', shift: ';' },
      en: { key: '4', shift: '$' },
      code: 'Digit4',
    },
    {
      ru: { key: '5', shift: '%' },
      en: { key: '5', shift: '%' },
      code: 'Digit5',
    },
    {
      ru: { key: '6', shift: ':' },
      en: { key: '6', shift: '^' },
      code: 'Digit6',
    },
    {
      ru: { key: '7', shift: '?' },
      en: { key: '7', shift: '&' },
      code: 'Digit7',
    },
    {
      ru: { key: '8', shift: '*' },
      en: { key: '8', shift: '*' },
      code: 'Digit8',
    },
    {
      ru: { key: '9', shift: '(' },
      en: { key: '9', shift: '(' },
      code: 'Digit9',
    },
    {
      ru: { key: '0', shift: ')' },
      en: { key: '0', shift: ')' },
      code: 'Digit0',
    },
    {
      ru: { key: '-', shift: '_' },
      en: { key: '-', shift: '_' },
      code: 'Minus',
    },
    {
      ru: { key: '=', shift: '+' },
      en: { key: '=', shift: '+' },
      code: 'Equal',
    },
    {
      ru: { key: '', shift: '' },
      en: { key: '', shift: '' },
      code: 'Backspace',
      image: backspaceSvg,
    },
  ],
  [
    {
      ru: { key: 'Tab', shift: 'Tab' },
      en: { key: 'Tab', shift: 'Tab' },
      code: 'Tab',
    },
    {
      ru: { key: 'й', shift: 'Й' },
      en: { key: 'q', shift: 'Q' },
      code: 'KeyQ',
    },
    {
      ru: { key: 'ц', shift: 'Ц' },
      en: { key: 'w', shift: 'W' },
      code: 'KeyW',
    },
    {
      ru: { key: 'у', shift: 'У' },
      en: { key: 'e', shift: 'E' },
      code: 'KeyE',
    },
    {
      ru: { key: 'к', shift: 'К' },
      en: { key: 'r', shift: 'R' },
      code: 'KeyR',
    },
    {
      ru: { key: 'е', shift: 'Е' },
      en: { key: 't', shift: 'T' },
      code: 'KeyT',
    },
    {
      ru: { key: 'н', shift: 'Н' },
      en: { key: 'y', shift: 'Y' },
      code: 'KeyY',
    },
    {
      ru: { key: 'г', shift: 'Г' },
      en: { key: 'u', shift: 'U' },
      code: 'KeyU',
    },
    {
      ru: { key: 'ш', shift: 'Ш' },
      en: { key: 'i', shift: 'I' },
      code: 'KeyI',
    },
    {
      ru: { key: 'щ', shift: 'Щ' },
      en: { key: 'o', shift: 'O' },
      code: 'KeyO',
    },
    {
      ru: { key: 'з', shift: 'З' },
      en: { key: 'p', shift: 'P' },
      code: 'KeyP',
    },
    {
      ru: { key: 'х', shift: 'Х' },
      en: { key: '[', shift: '{' },
      code: 'BracketLeft',
    },
    {
      ru: { key: 'ъ', shift: 'Ъ' },
      en: { key: ']', shift: '}' },
      code: 'BracketRight',
    },
    {
      ru: { key: '\\', shift: '/' },
      en: { key: '\\', shift: '|' },
      code: 'Backslash',
    },
    {
      ru: { key: 'Del', shift: 'Del' },
      en: { key: 'Del', shift: 'Del' },
      code: 'Delete',
    },
  ],
  [
    {
      ru: { key: 'Caps Lock', shift: 'Caps Lock' },
      en: { key: 'Caps Lock', shift: 'Caps Lock' },
      code: 'CapsLock',
    },
    {
      ru: { key: 'ф', shift: 'Ф' },
      en: { key: 'a', shift: 'A' },
      code: 'KeyA',
    },
    {
      ru: { key: 'ы', shift: 'Ы' },
      en: { key: 's', shift: 'S' },
      code: 'KeyS',
    },
    {
      ru: { key: 'в', shift: 'В' },
      en: { key: 'd', shift: 'D' },
      code: 'KeyD',
    },
    {
      ru: { key: 'а', shift: 'А' },
      en: { key: 'f', shift: 'F' },
      code: 'KeyF',
    },
    {
      ru: { key: 'п', shift: 'П' },
      en: { key: 'g', shift: 'G' },
      code: 'KeyG',
    },
    {
      ru: { key: 'р', shift: 'Р' },
      en: { key: 'h', shift: 'H' },
      code: 'KeyH',
    },
    {
      ru: { key: 'о', shift: 'О' },
      en: { key: 'j', shift: 'J' },
      code: 'KeyJ',
    },
    {
      ru: { key: 'л', shift: 'Л' },
      en: { key: 'k', shift: 'K' },
      code: 'KeyK',
    },
    {
      ru: { key: 'д', shift: 'Д' },
      en: { key: 'l', shift: 'L' },
      code: 'KeyL',
    },
    {
      ru: { key: 'ж', shift: 'Ж' },
      en: { key: ';', shift: ':' },
      code: 'Semicolon',
    },
    {
      ru: { key: 'э', shift: 'Э' },
      en: { key: "'", shift: '"' },
      code: 'Quote',
    },
    {
      ru: { key: '', shift: '' },
      en: { key: '', shift: '' },
      code: 'Enter',
      image: enterSvg,
    },
  ],
  [
    {
      ru: { key: 'Shift', shift: 'Shift' },
      en: { key: 'Shift', shift: 'Shift' },
      code: 'ShiftLeft',
    },
    {
      ru: { key: 'я', shift: 'Я' },
      en: { key: 'z', shift: 'Z' },
      code: 'KeyZ',
    },
    {
      ru: { key: 'ч', shift: 'Ч' },
      en: { key: 'x', shift: 'X' },
      code: 'KeyX',
    },
    {
      ru: { key: 'с', shift: 'С' },
      en: { key: 'c', shift: 'C' },
      code: 'KeyC',
    },
    {
      ru: { key: 'м', shift: 'М' },
      en: { key: 'v', shift: 'V' },
      code: 'KeyV',
    },
    {
      ru: { key: 'и', shift: 'И' },
      en: { key: 'b', shift: 'B' },
      code: 'KeyB',
    },
    {
      ru: { key: 'т', shift: 'Т' },
      en: { key: 'n', shift: 'N' },
      code: 'KeyN',
    },
    {
      ru: { key: 'ь', shift: 'Ь' },
      en: { key: 'm', shift: 'M' },
      code: 'KeyM',
    },
    {
      ru: { key: 'б', shift: 'Б' },
      en: { key: ',', shift: '<' },
      code: 'Comma',
    },
    {
      ru: { key: 'ю', shift: 'Ю' },
      en: { key: '.', shift: '>' },
      code: 'Period',
    },
    {
      ru: { key: '.', shift: ',' },
      en: { key: '/', shift: '?' },
      code: 'Slash',
    },
    {
      ru: { key: '▲', shift: '▲' },
      en: { key: '▲', shift: '▲' },
      code: 'ArrowUp',
    },
    {
      ru: { key: 'Shift', shift: 'Shift' },
      en: { key: 'Shift', shift: 'Shift' },
      code: 'ShiftRight',
    },
  ],
  [
    {
      ru: { key: 'Ctrl', shift: 'Ctrl' },
      en: { key: 'Ctrl', shift: 'Ctrl' },
      code: 'ControlLeft',
    },
    {
      ru: { key: '', shift: '' },
      en: { key: '', shift: '' },
      code: 'ChangeLang',
      image: languageSvg,
    },
    {
      ru: { key: 'Alt', shift: 'Alt' },
      en: { key: 'Alt', shift: 'Alt' },
      code: 'AltLeft',
    },
    {
      ru: { key: '', shift: '' },
      en: { key: '', shift: '' },
      code: 'Space',
      image: spaceSvg,
    },
    {
      ru: { key: 'Alt', shift: 'Alt' },
      en: { key: 'Alt', shift: 'Alt' },
      code: 'AltRight',
    },
    {
      ru: { key: 'Ctrl', shift: 'Ctrl' },
      en: { key: 'Ctrl', shift: 'Ctrl' },
      code: 'ControlRight',
    },
    {
      ru: { key: '◄', shift: '◄' },
      en: { key: '◄', shift: '◄' },
      code: 'ArrowLeft',
    },
    {
      ru: { key: '▼', shift: '▼' },
      en: { key: '▼', shift: '▼' },
      code: 'ArrowDown',
    },
    {
      ru: { key: '►', shift: '►' },
      en: { key: '►', shift: '►' },
      code: 'ArrowRight',
    },
  ],
];

export const serviceCodes = [
  'Backspace',
  'Tab',
  'CapsLock',
  'Delete',
  'Enter',
  'ShiftLeft',
  'ShiftRight',
  'ArrowUp',
  'ControlLeft',
  'AltLeft',
  'Space',
  'ControlRight',
  'AltRight',
  'ArrowLeft',
  'ArrowDown',
  'ArrowRight',
  'ChangeLang',
];

export const wideButtons = [
  'Backspace',
  'CapsLock',
  'Enter',
  'ShiftLeft',
  'ShiftRight',
];
