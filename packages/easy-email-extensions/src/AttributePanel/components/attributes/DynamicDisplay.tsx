import React, { useMemo } from 'react';
import { TextField } from '../../../components/Form';
import { Stack, useFocusIdx } from 'easy-email-editor';
import { UseFieldConfig } from 'react-final-form';

export function DynamicDisplay({
                                 inline,
                                 config,
                               }: {
  inline?: boolean;
  config?: UseFieldConfig<any>;
}) {
  const { focusIdx } = useFocusIdx();

  return useMemo(() => {
    return (
      <Stack wrap={false}>
        <Stack.Item fill>
          <TextField
            label={t('Module')}
            name={`${focusIdx}.attributes.dynamicModule`}
            config={config}
          />
          <TextField
            label={t('If')}
            name={`${focusIdx}.attributes.dynamicIf`}
            config={config}
          />
        </Stack.Item>
      </Stack>
    );
  }, [focusIdx, inline]);
}
