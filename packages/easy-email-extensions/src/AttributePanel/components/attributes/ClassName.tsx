import React, { useMemo } from 'react';
import { useFocusIdx } from 'easy-email-editor';
import { TextField } from '../../../components/Form';

export function ClassName() {
  const { focusIdx } = useFocusIdx();

  return useMemo(() => {
    return (
      <>
        <TextField label={t('Class name')} name={`${focusIdx}.attributes.css-class`} />
        <div style={{ marginTop: 4, fontSize: 14 }}>Classes available :
          <ul style={{ listStyle: 'inside', padding: 0, margin: 0, fontSize: 12 }}>
            <li>hide-on-mobile</li>
            <li>hide-on-desktop</li>
          </ul>
        </div>
      </>
    );
  }, [focusIdx]);
}
