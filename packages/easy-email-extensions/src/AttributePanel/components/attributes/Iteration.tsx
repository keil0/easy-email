import { useBlock, useFocusIdx } from 'easy-email-editor';
import { AdvancedBlock, AdvancedType } from 'easy-email-core';
import React, { useCallback } from 'react';

export function Iteration() {
  const { focusIdx } = useFocusIdx();
  const { focusBlock, change } = useBlock();
  const iteration = focusBlock?.data.value?.iteration as
    | undefined
    | AdvancedBlock['data']['value']['iteration'];

  const enabled = Boolean(iteration && iteration.enabled);

  const onIterationToggle = useCallback(
    (enabled: boolean) => {
      if (enabled) {
        if (!iteration) {
          change(`${focusIdx}.data.value.iteration`, {
            enabled: true,
            dataSource: '',
            itemName: 'item',
            limit: 9999,
            mockQuantity: 1,
          } as AdvancedBlock['data']['value']['iteration']);
        }
      }
      change(`${focusIdx}.data.value.iteration.enabled`, enabled);
    },
    [change, focusIdx, iteration]
  );

  if (
    !focusBlock?.type ||
    !Object.values(AdvancedType).includes(focusBlock?.type as any)
  ) {
    return null;
  }

  return (
    <></>
  );
}
