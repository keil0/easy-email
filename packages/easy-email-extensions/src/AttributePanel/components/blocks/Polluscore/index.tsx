import React from 'react';
import { Stack, useFocusIdx } from 'easy-email-editor';
import { AttributesPanelWrapper } from '@extensions/AttributePanel/components/attributes/AttributesPanelWrapper';
import { TextField } from '@extensions';

export function PolluscorePanel() {
  const { focusIdx } = useFocusIdx();
  return (
    <AttributesPanelWrapper>
      <Stack vertical>
        <TextField
          label="Ligne 1"
          name={`${focusIdx}.data.value.line1`}
          inline
        />
        <TextField
          label="Ligne 2"
          name={`${focusIdx}.data.value.line2`}
          inline
        />
        <TextField
          label="Valeur"
          name={`${focusIdx}.data.value.val`}
          inline
        />
        <TextField
          label="Largeur"
          name={`${focusIdx}.data.value.width`}
          inline
        />
        <TextField
          label="Couleur"
          name={`${focusIdx}.data.value.color`}
          inline
        />
        <TextField
          label="Alt"
          name={`${focusIdx}.data.value.alt`}
          inline
        />
      </Stack>
    </AttributesPanelWrapper>
  );
}