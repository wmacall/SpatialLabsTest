import {I18n, TranslateOptions} from 'i18n-js';
import en from './translations/en.json';

const i18n = new I18n({
  en,
});

i18n.defaultLocale = 'en';
i18n.locale = 'en';
i18n.enableFallback = true;

type DefaultLocale = typeof en;
type RecursiveKeyOf<TObj extends Record<string, any>> = {
  [TKey in keyof TObj & string]: TObj[TKey] extends Record<string, any>
    ? `${TKey}` | `${TKey}.${RecursiveKeyOf<TObj[TKey]>}`
    : `${TKey}`;
}[keyof TObj & string];

export type TxKeyPath = RecursiveKeyOf<DefaultLocale>;

export function translate(key: TxKeyPath, options?: TranslateOptions) {
  return key ? i18n.t(key, options) : '';
}

export default i18n;
