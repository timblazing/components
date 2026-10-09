import 'server-only';
import { readFileSync } from 'node:fs';
import path from 'node:path';

function parseBlock(css: string, selector: string) {
  const start = css.indexOf(`${selector} {`);
  const body = css.slice(start, css.indexOf('}', start));
  return Object.fromEntries(
    [...body.matchAll(/--([\w-]+):\s*([^;]+);/g)].map(([, name, value]) => [name, value.trim()]),
  );
}

/** Light and dark values for every theme variable, read from the stylesheet itself. */
export function readThemeTokens() {
  const css = readFileSync(path.join(process.cwd(), 'src/app/global.css'), 'utf8');
  return { light: parseBlock(css, ':root'), dark: parseBlock(css, '.dark') };
}
