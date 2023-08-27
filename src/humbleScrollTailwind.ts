import plugin from 'tailwindcss/plugin';
import { attrName, varName } from './variables';

function generateTranslateCalc(translateAmount: string, translateRatio: string, negative: boolean) {
  const base = `${translateAmount} * ${translateRatio}`;

  if (negative) {
    return `calc(0px - ${base})`;
  }

  return `calc(${base})`;
}

function humbleScrollPlugin({ addUtilities, config }: PluginOptions) {
  const tailwindConfig = config();

  function generateResponsiveUtilities(name: string, regex: string, prop: string, value: string) {
    const utilities: any = {
      [`[${attrName}${regex}='${name}'] > *`]: {
        [prop]: value,
      }
    }

    for (const [screen, size] of Object.entries(tailwindConfig.theme.screens)) {
      utilities[`@media (min-width: ${size})`] = {
        [`[${attrName}${regex}='${screen}:${name}'] > *`]: {
          [prop]: value,
        }
      };
    }

    return utilities;
  }

  const up = generateResponsiveUtilities('up', '~', `${varName}-translate-y`, generateTranslateCalc(`var(${varName}-translate-y-amount)`, `var(${varName}-translate-ratio)`, false));
  const down = generateResponsiveUtilities('down', '~', `${varName}-translate-y`, generateTranslateCalc(`var(${varName}-translate-y-amount)`, `var(${varName}-translate-ratio)`, true));
  const left = generateResponsiveUtilities('left', '~', `${varName}-translate-x`, generateTranslateCalc(`var(${varName}-translate-x-amount)`, `var(${varName}-translate-ratio)`, false));
  const right = generateResponsiveUtilities('right', '~', `${varName}-translate-x`, generateTranslateCalc(`var(${varName}-translate-x-amount)`, `var(${varName}-translate-ratio)`, true));

  const fade = generateResponsiveUtilities('fade', '*', `${varName}-opacity`, '0');

  const blur = generateResponsiveUtilities('blur', '*', `${varName}-blur`, `${varName}-blur-amount`);

  const zoomIn = generateResponsiveUtilities('zoom-in', '*', `${varName}-scale`, `calc(1 + var(${varName}-scale-ratio))`);
  const zoomOut = generateResponsiveUtilities('zoom-out', '*', `${varName}-scale`, `calc(1 - var(${varName}-scale-ratio))`);

  const skewUp = generateResponsiveUtilities('skew-up', '*', `${varName}-skew-y`, `var(${varName}-skew-amount)`);
  const skewDown = generateResponsiveUtilities('skew-down', '*', `${varName}-skew-y`, `calc(0deg - var(${varName}-skew-amount))`);
  const skewRight = generateResponsiveUtilities('skew-right', '*', `${varName}-skew-x`, `var(${varName}-skew-amount)`);
  const skewLeft = generateResponsiveUtilities('skew-left', '*', `${varName}-skew-x`, `calc(0deg - var(${varName}-skew-amount))`);

  const revealUp = generateResponsiveUtilities('reveal-up', '*', `${varName}-translate-y`, `var(${varName}-reveal-amount)`);
  const revealDown = generateResponsiveUtilities('reveal-down', '*', `${varName}-translate-y`, `calc(0px - var(${varName}-reveal-amount))`);
  const revealRight = generateResponsiveUtilities('reveal-right', '*', `${varName}-translate-x`, `calc(0px - var(${varName}-reveal-amount))`);
  const revealLeft = generateResponsiveUtilities('reveal-left', '*', `${varName}-translate-x`, `var(${varName}-reveal-amount)`);

  const flipUp = generateResponsiveUtilities('flip-up', '*', `${varName}-rotate-x`, `var(${varName}-flip-x-amount)`);
  const flipDown = generateResponsiveUtilities('flip-down', '*', `${varName}-rotate-x`, `calc(0deg - var(${varName}-flip-x-amount))`);
  const flipRight = generateResponsiveUtilities('flip-right', '*', `${varName}-rotate-y`, `calc(0deg - var(${varName}-flip-y-amount))`);
  const flipLeft = generateResponsiveUtilities('flip-left', '*', `${varName}-rotate-y`, `var(${varName}-flip-y-amount)`);

  const utilitiesToAdd = [
    up,
    down,
    left,
    right,
    fade,
    blur,
    zoomIn,
    zoomOut,
    skewUp,
    skewDown,
    skewRight,
    skewLeft,
    revealUp,
    revealDown,
    revealRight,
    revealLeft,
    flipUp,
    flipDown,
    flipRight,
    flipLeft,
  ];

  utilitiesToAdd.forEach((utility) => addUtilities(utility));
}

/**
 * HumbleScroll TailwindCSS plugin 
 */
export default plugin(humbleScrollPlugin);
