import React from 'react';
import { AttributesPanelWrapper, ImageUploaderField, TextField } from 'easy-email-extensions';
import { useFocusIdx, Stack, } from 'easy-email-editor'
import { onUploadImage } from '@demo/pages/Editor';

export function Panel() {
  const { focusIdx } = useFocusIdx();
  return (
    <AttributesPanelWrapper>
      <Stack vertical>
        <TextField
          label="Link url"
          name={`${focusIdx}.data.value.link`}
          inline
          alignment="center"
        />
        <ImageUploaderField
          label='Desktop Image'
          name={`${focusIdx}.data.value.desktopImageUrl`}
          inline
          alignment='center'
          uploadHandler={onUploadImage}
        />
        <ImageUploaderField
          label='Mobile Image'
          name={`${focusIdx}.data.value.mobileImageUrl`}
          inline
          alignment='center'
          uploadHandler={onUploadImage}
        />
      </Stack>
    </AttributesPanelWrapper>
  );
}