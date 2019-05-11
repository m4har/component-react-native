import React from "react";
import { ActivityIndicator, Platform } from "react-native";

import Modal from "../Modal";

const Loading = ({ onDismiss, visible, onRequestClose }) => (
  <Modal
    visible={visible}
    onRequestClose={onRequestClose}
    onDismiss={onDismiss}
  >
    <ActivityIndicator color="#fff" size={Platform.OS === "ios" ? 1 : 100} />
  </Modal>
);

export default Loading;
