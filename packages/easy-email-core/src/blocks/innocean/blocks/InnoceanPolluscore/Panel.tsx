import React from 'react';
import { AttributesPanelWrapper, TextField } from 'easy-email-extensions';
import { Stack, useFocusIdx } from 'easy-email-editor';

export function PolluscorePanel() {
  const { focusIdx } = useFocusIdx();
  return (
    <AttributesPanelWrapper>
      <Stack vertical>
        <TextField
          label="Ligne 1"
          name={`${focusIdx}.data.value.line1`}
          inline
          alignment="center"
        />
        <TextField
          label="Ligne 2"
          name={`${focusIdx}.data.value.line2`}
          inline
          alignment="center"
        />
        <TextField
          label="Valeur"
          name={`${focusIdx}.data.value.val`}
          inline
          alignment="center"
        />
        <TextField
          label="Largeur"
          name={`${focusIdx}.data.value.width`}
          inline
          alignment="center"
        />
        <TextField
          label="Couleur"
          name={`${focusIdx}.data.value.color`}
          inline
          alignment="center"
        />
        <TextField
          label="Alt"
          name={`${focusIdx}.data.value.alt`}
          inline
          alignment="center"
        />
      </Stack>
    </AttributesPanelWrapper>
  );
}