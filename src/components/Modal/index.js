import React from "react";
import { Modal, View } from "react-native";

const ModalView = ({ visible, onDismiss, children, onRequestClose }) => (
  <Modal
    visible={visible}
    onDismiss={onDismiss}
    transparent
    animationType="fade"
    onRequestClose={onRequestClose}
  >
    <View
      style={{
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.3)",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      {children}
    </View>
  </Modal>
);

export default ModalView;
