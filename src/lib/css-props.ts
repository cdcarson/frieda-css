export type CssThemedValue = {light: string; dark: string};
export type CssValue = string | CssThemedValue
export type CssProp<T extends CssValue = CssValue> = {
  name: string;
  value: T;
  description?: string;
}

export const SurfaceProps: CssProp<CssThemedValue>[] = [
  {
    name: 'body-background-color',
    description: 'The body background color.',
    value: {
      light: 'rgb(255 255 255 / 100%)',
      dark: 'rgb(0 0 0 / 100%)'
    }
  },
  {
    name: 'body-text-color',
    description: 'The base body text color.',
    value: {
      dark: 'rgb(255 255 255 / 100%)',
      light: 'rgb(0 0 0 / 100%)'
    }
  },
] as const;