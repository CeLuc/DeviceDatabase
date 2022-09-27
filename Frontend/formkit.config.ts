import { de, en } from "@formkit/i18n";
import { DefaultConfigOptions } from "@formkit/vue";
import { generateClasses } from "@formkit/themes";

const config: DefaultConfigOptions = {
  locales: { de, en },
  locale: "de",

  classes: generateClasses({
    text: {
      outer: "mb-4",
      label: "mb-1 text-sm text-text-secondary",
      inner:
        "max-w-md rounded-sm mb-1 overflow-hidden border border-bg-primary focus-visible:border-primary transition-all duration-150 ease-in",
      input:
        "rounded-sm px-4 py-2 w-full transition-all duration-150 ease-in placeholder:text-text-secondary text-text-primary hover:bg-bg-primary bg-bg-tertiary focus-visible:outline-none focus-visible:bg-bg-secondary",
      help: "text-xs text-text-secondary",
      messages: "list-none p-0 mt-1 mb-0",
      message: "text-danger mb-1 text-xs",
    },
  }),
};

export default config;
