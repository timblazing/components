import userEvent from '@testing-library/user-event';
import { hydrateRoot } from 'react-dom/client';
import { renderToString } from 'react-dom/server';
import { act, cleanup, render, screen, within } from '@testing-library/react';
import { afterEach, expect, test } from 'vitest';
import FormattingExample from '../src/registry/examples/ui-sdk-formatting';

afterEach(cleanup);

test('names the formatting controls and exposes the initial selection', () => {
  render(<FormattingExample />);
  expect(screen.getByRole('button', { name: 'Bold' }).getAttribute('aria-pressed')).toBe('true');
  expect(screen.getByRole('button', { name: 'Italic' }).getAttribute('aria-pressed')).toBe('false');
  expect(screen.getByRole('button', { name: 'Underline' }).getAttribute('aria-disabled')).toBe('true');
  expect(screen.getByRole('status').textContent).toBe('Selected: Bold');
});

test('Space changes selection while arrows move focus without selecting', async () => {
  const user = userEvent.setup();
  render(<FormattingExample />);
  await user.tab();
  const bold = screen.getByRole('button', { name: 'Bold' });
  expect(document.activeElement).toBe(bold);
  await user.keyboard('{ArrowRight}');
  const italic = screen.getByRole('button', { name: 'Italic' });
  expect(document.activeElement).toBe(italic);
  expect(italic.getAttribute('aria-pressed')).toBe('false');
  await user.keyboard(' ');
  expect(italic.getAttribute('aria-pressed')).toBe('true');
  expect(screen.getByRole('status').textContent).toBe('Selected: Bold, Italic');
  await user.keyboard('{ArrowLeft} ');
  expect(bold.getAttribute('aria-pressed')).toBe('false');
  expect(screen.getByRole('status').textContent).toBe('Selected: Italic');
});

test('disabled formatting remains discoverable but cannot be selected', async () => {
  const user = userEvent.setup();
  render(<FormattingExample />);
  await user.tab();
  await user.keyboard('{ArrowRight}{ArrowRight}');
  const underline = screen.getByRole('button', { name: 'Underline' });
  expect(document.activeElement).toBe(underline);
  expect(document.getElementById(underline.getAttribute('aria-describedby')!)?.textContent).toContain('Underline is unavailable');
  await user.keyboard(' {Enter}');
  await user.click(underline);
  expect(underline.getAttribute('aria-pressed')).toBe('false');
  expect(screen.getByRole('status').textContent).toBe('Selected: Bold');
});

test('left arrow advances focus in right-to-left text', async () => {
  const user = userEvent.setup();
  render(<div dir="rtl"><FormattingExample /></div>);
  await user.tab();
  await user.keyboard('{ArrowLeft}');
  expect(document.activeElement).toBe(screen.getByRole('button', { name: 'Italic' }));
});

test('server markup hydrates with its names and selection intact', async () => {
  const container = document.createElement('div');
  container.innerHTML = renderToString(<FormattingExample />);
  document.body.appendChild(container);
  const recoverable: unknown[] = [];
  let root!: ReturnType<typeof hydrateRoot>;
  try {
    await act(async () => {
      root = hydrateRoot(container, <FormattingExample />, { onRecoverableError: (error) => recoverable.push(error) });
    });
    const user = userEvent.setup();
    await user.click(within(container).getByRole('button', { name: 'Italic' }));
    expect(within(container).getByRole('status').textContent).toBe('Selected: Bold, Italic');
    expect(recoverable).toEqual([]);
  } finally {
    if (root) await act(async () => root.unmount());
    container.remove();
  }
});
