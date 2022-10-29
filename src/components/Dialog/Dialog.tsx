import React, { FC, type PropsWithChildren } from "react";
import { Paragraph, Dialog, Portal, Button } from "react-native-paper";

interface IDialog {
  isVisible: boolean;
  setIsVisible: (arg: boolean) => void;
  onDelete: () => void;
}

const DialogComponent: FC<PropsWithChildren<IDialog>> = ({ setIsVisible, isVisible, onDelete }) => {
  const confirmDialog = () => {
    onDelete();
    setIsVisible(false);
  };

  return (
    <Portal>
      <Dialog visible={isVisible} onDismiss={setIsVisible.bind(this, false)}>
        <Dialog.Title>Warning!</Dialog.Title>
        <Dialog.Content>
          <Paragraph>Do you really want to delete this goal?</Paragraph>
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={setIsVisible.bind(this, false)}>Cancel</Button>
          <Button onPress={confirmDialog}>Ok</Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};

export { DialogComponent };
