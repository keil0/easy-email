import React from 'react';
import { AttributesPanelWrapper, TextField } from 'easy-email-extensions';
import { useFocusIdx } from 'easy-email-editor';
import { Stack } from '@demo/components/Stack';

export function Panel() {
  const { focusIdx } = useFocusIdx();
  return (
    <AttributesPanelWrapper>

    </AttributesPanelWrapper>
  );
}