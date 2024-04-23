import React from 'react';
import { AttributesPanelWrapper, ImageUploaderField } from 'easy-email-extensions';
import { useFocusIdx, Stack, } from 'easy-email-editor'
import { Collapse } from 'antd';
import { onUploadImage } from '@demo/pages/Editor';

export function Panel() {
  const { focusIdx } = useFocusIdx();
  return (
    <AttributesPanelWrapper>
      <Collapse defaultActiveKey={['1']}>
        <Collapse.Panel key='1' header='Setting'>
          <Stack vertical>
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
        </Collapse.Panel>
      </Collapse>

    </AttributesPanelWrapper>

  );
}