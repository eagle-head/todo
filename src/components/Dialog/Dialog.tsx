import React, { FC, type PropsWithChildren } from "react";
import { Paragraph, Dialog, Portal, Button } from "react-native-paper";
import { IDialog } from "../../models";

const DialogComponent: FC<PropsWithChildren<IDialog>> = ({ setIsVisible, isVisible, onDelete }) => {
  const hideDialog = () => setIsVisible(false);

  return (
    <Portal>
      <Dialog visible={isVisible} onDismiss={hideDialog}>
        <Dialog.Title>Warning!</Dialog.Title>
        <Dialog.Content>
          <Paragraph>Do you really want to delete this goal?</Paragraph>
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={hideDialog}>Cancel</Button>
          <Button onPress={onDelete}>Ok</Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};

export { DialogComponent };
