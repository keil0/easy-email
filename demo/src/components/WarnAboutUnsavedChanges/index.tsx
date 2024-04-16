import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useFormState } from 'react-final-form';
import { getIsFormTouched } from '@demo/utils/getIsFormTouched';
import { ConfirmBeforeLeavePage } from '@demo/utils/ConfirmBeforeLeavePage';
import { Modal } from '@arco-design/web-react';

export function WarnAboutUnsavedChanges() {
  const formState = useFormState<any>();
  const callbackRef = useRef<null | ((isOk: boolean) => any)>(null);
  const [visible, setVisible] = useState(false);
  const [dirty, setIsDirty] = useState<boolean>(false);

  const openConfirmModal = useCallback(() => {
    setVisible(true);
  }, []);

  useEffect(() => {
    setIsDirty(getIsFormTouched(formState.touched as any));
  }, [formState.touched]);

  useEffect(() => {
    ConfirmBeforeLeavePage.register((callback) => {
      if (dirty) {
        callbackRef.current = callback;
        openConfirmModal();
      }
    });
    return () => {
      ConfirmBeforeLeavePage.unregister();
    };
  }, [openConfirmModal, dirty]);

  const onCancel = useCallback(() => {
    callbackRef.current?.(false);
    setVisible(false);
  }, []);

  const onOk = useCallback(() => {
    callbackRef.current?.(true);
  }, []);

  return (
    <Modal
      title='Discard changes?'
      visible={visible}
      onCancel={onCancel}
      onOk={onOk}
      okText='Discard'
      cancelText='Cancel'
      style={{ zIndex: 10000 }}
    >
      <p>Are you sure you want to discard all unsaved changes?</p>
    </Modal>
  );
}
