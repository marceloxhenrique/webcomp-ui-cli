export const jsxTypes = {
  "w-accordion": `
    "w-accordion": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
      header?: string;
    };
  `,
  "w-button": `
    "w-button": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
      variant?: string;
      width?: string;
    };
  `,
  "w-card": `
    "w-card": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
      "card-title"?: string;
      "card-content"?: string;
      "card-img-src"?: string;
      "card-title-color"?: string;
      "card-content-color"?: string;
    };
  `,
  "w-input": `
    "w-input": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
      "input-label"?: string;
      "input-placeholder"?: string;
      "input-width"?: string;
    };
  `,
  "w-spinner": `
    "w-spinner": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {};
  `,
  "w-textarea": `
    "w-textarea": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
      "input-label"?: string;
      "input-placeholder"?: string;
      "input-width"?: string;
      "rows"?: string;
    };
  `,
  "w-tooltip": `
    "w-tooltip": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
      position?: string;
    };
  `,
};

// NOTE: This file should not be edited
