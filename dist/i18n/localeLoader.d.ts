import { Locale } from "./locale";
export interface LocaleLoader {
    load(availableLocales: {
        [name: string]: Locale;
    }): void;
}
//# sourceMappingURL=localeLoader.d.ts.map