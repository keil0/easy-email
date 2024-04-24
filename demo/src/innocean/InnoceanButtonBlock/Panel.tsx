import React from 'react';
import { AttributesPanelWrapper, TextField } from 'easy-email-extensions';
import { useFocusIdx } from 'easy-email-editor';
import { Stack } from '@demo/components/Stack';

export function Panel() {
  const { focusIdx } = useFocusIdx();
  return (
    <AttributesPanelWrapper>
      <Stack vertical>
        <TextField
          label="Button text"
          name={`${focusIdx}.data.value.buttonText`}
          inline
          alignment="center"
        />
        <TextField
          label="Button link"
          name={`${focusIdx}.data.value.buttonLink`}
          inline
          alignment="center"
        />
      </Stack>
    </AttributesPanelWrapper>
  );
}