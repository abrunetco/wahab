import { Color, StyleSystemSheet } from "../../styled/types";

export function strippedTable(bg: Color, bd: Color): StyleSystemSheet {
  return {
    extend: [
      {
        select: '[scope=w-tbody] [scope=w-td]',
        sheet: {
          borderBottom: {mode: 'all', c: bd, s: 1 }
        }
      },
      {
        select: '[scope=w-thead] [scope=w-th]',
        sheet: {
          borderBottom: {mode: 'all', c: bd, s: 2 },
          backgroundColor: {v: bg, l: 'darker' },
          typo: "boldText"
        }
      },
      {
        select: '[scope=w-tfoot] [scope=w-th], [scope=w-tfoot] [scope=w-td]',
        sheet: {
          borderTop: {mode: 'all', c: bd, s: 2 },
          backgroundColor: {v: bg, l: 'darker' },
          typo: "default"
        }
      },
      {
        select: '[scope=w-tbody] [scope=w-th]',
        sheet: {
          borderRight: {mode: 'all', c: bd, s: 2 },
          typo: "default"
        }
      },
      {
        select: '[scope=w-tbody] [scope=w-tr]:nth-child(2n)>*',
        sheet: {
          backgroundColor: {v: bg, l: 'lightest', a: 'light' },
          typo: "default"
        }
      },
      {
        select: '[scope=w-tbody] [scope=w-tr]:nth-child(2n-1)>*',
        sheet: {
          backgroundColor: { v: bg, l: 'lighter', a: 'light' },
          typo: "default"
        }
      },
      {
        select: '[scope=w-tbody] [scope=w-tr]:nth-child(2n):hover>*',
        sheet: {
          backgroundColor: {v: bg, l: 'darker', a: 'light' },
          typo: "default"
        }
      },
      {
        select: '[scope=w-tbody] [scope=w-tr]:nth-child(2n-1):hover>*',
        sheet: {
          backgroundColor: { v: bg, a: 'light'},
          typo: "default"
        }
      }
    ]
  }
}