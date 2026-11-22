'use client';

import { useId, useState } from 'react';
import { Toggle, ToggleGroup } from '@ui-sdk/react/toggle';

const formats = [
  { value: 'bold', label: 'Bold' },
  { value: 'italic', label: 'Italic' },
  { value: 'underline', label: 'Underline', disabled: true },
];

export default function FormattingExample() {
  const [value, setValue] = useState<string[]>(['bold']);
  const hintId = useId();
  const selected = formats.filter((format) => value.includes(format.value)).map((format) => format.label);

  return (
    <div className="w-full max-w-sm space-y-3">
      <ToggleGroup
        aria-label="Text formatting"
        className="flex flex-wrap gap-1 rounded-lg border border-border bg-background p-1"
        multiple
        onValueChange={setValue}
        value={value}
      >
        {formats.map((format) => (
          <Toggle
            aria-describedby={format.disabled ? hintId : undefined}
            className="min-h-11 rounded-md px-3 text-sm text-foreground outline-none transition-colors hover:bg-accent focus-visible:ring-2 focus-visible:ring-ring data-pressed:bg-accent data-pressed:text-accent-foreground data-disabled:cursor-not-allowed data-disabled:text-muted-foreground"
            disabled={format.disabled}
            key={format.value}
            value={format.value}
          >
            {format.label}
          </Toggle>
        ))}
      </ToggleGroup>
      <p className="text-sm text-muted-foreground" id={hintId}>Underline is unavailable in this example. Arrow keys move focus; Space selects.</p>
      <p aria-live="polite" className="text-sm" role="status">Selected: {selected.join(', ') || 'None'}</p>
    </div>
  );
}
