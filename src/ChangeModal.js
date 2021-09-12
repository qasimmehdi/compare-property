import { Modal } from "antd";
import React, { useState } from "react";
import SearchProperty from "./SearchProperty";

export default function ChangeModal({ show, setShow }) {
  const [clear, setClear] = useState(false);
  return (
    <Modal
      title="Change Comp"
      visible={show}
      onCancel={() => {
        setShow(false);
        setClear((s) => !s);
      }}
      footer={null}
    >
      <SearchProperty
        clear={clear}
        btnName="Change"
        onSave={(d) => console.log(d)}
      />
    </Modal>
  );
}
