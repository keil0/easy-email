import { useBlock, useFocusIdx } from 'easy-email-editor';
import { AdvancedBlock, OperatorSymbol, AdvancedType, Operator, ICondition, IConditionGroup } from 'easy-email-core';
import { Message } from '@arco-design/web-react';
import React, { useCallback } from 'react';
import { cloneDeep, get } from 'lodash';

export function Condition() {
  const { focusIdx } = useFocusIdx();
  const { focusBlock, change, values } = useBlock();
  const condition = focusBlock?.data.value?.condition as
    | undefined
    | AdvancedBlock['data']['value']['condition'];

  const enabled = Boolean(condition && condition.enabled);

  const onConditionToggle = useCallback(
    (enabled: boolean) => {
      if (enabled) {
        if (!condition) {
          change(`${focusIdx}.data.value.condition`, {
            enabled: true,
            symbol: OperatorSymbol.AND,
            groups: [
              {
                symbol: OperatorSymbol.AND,
                groups: [
                  {
                    left: '',
                    operator: Operator.TRUTHY,
                    right: ''
                  }
                ],
              }
            ] as unknown[],
          } as ICondition);
        }
      }
      change(`${focusIdx}.data.value.condition.enabled`, enabled);
    },
    [change, condition, focusIdx]
  );

  const onAddCondition = useCallback((path: string) => {
    const groups = get(values, path) as IConditionGroup[];

    groups.push({
      symbol: OperatorSymbol.AND,
      groups: [
        {
          left: '',
          operator: Operator.TRUTHY,
          right: ''
        }
      ],
    });
    change(path, [...groups]);
  }, [change, values]);

  const onAddSubCondition = useCallback((path: string) => {
    const groups = get(values, path) as IConditionGroup['groups'];

    groups.push({
      left: '',
      operator: Operator.TRUTHY,
      right: ''

    });
    change(path, [...groups]);
  }, [change, values]);

  // content.children.[0].children.[0].data.value.condition.groups.1.groups
  const onDelete = useCallback((path: string, gIndex: number, ggIndex: number) => {
    if (!condition) return;
    const subPath = `${path}.${gIndex}.groups`;
    const groups = cloneDeep(get(values, path)) as any[];
    const subGroups = cloneDeep(get(values, subPath)) as any[];

    subGroups.splice(ggIndex, 1);
    if (subGroups.length === 0) {
      if (groups.length === 1) {
        Message.warning(t('At least one condition'));
        return;
      }
      // remove empty array
      groups.splice(gIndex, 1);
      change(path, [...groups]);
    } else {
      change(subPath, [...subGroups]);
    }

  }, [change, condition, values]);

  if (
    !focusBlock?.type ||
    !Object.values(AdvancedType).includes(focusBlock?.type as any)
  ) {
    return null;
  }

  const isEmpty = !condition?.groups.length;

  return (
    <></>
  );
}
