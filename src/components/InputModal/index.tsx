import React, { useEffect } from "react";
import { useState } from "react";
import { Modal, Form, Select, Input } from "antd";

interface ModalFormProps {
  visible: boolean;
  onSave: (values: any) => void;
  onCancel: () => void;
}

const InputModal: React.FC<ModalFormProps> = ({
  visible,
  onSave,
  onCancel,
}) => {
  const [form] = Form.useForm();
  const [options, setOptions] = useState<any>([]);

  const onChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  return (
    <Modal
      open={visible}
      title={"填写邮箱"}
      okText={"确认"}
      cancelText={"取消"}
      onCancel={() => {
        onCancel();
        setOptions([]);
        form.resetFields();
      }}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            onSave({ ...values });
          })
          .catch((info) => {
            console.log("Validate Failed:", info);
          });
      }}
    >
      <Form form={form} layout="vertical" name="form_in_modal">
        <Form.Item
          name="email"
          rules={[
            { required: true, message: "Please input your email!" },
            {
              type: "email",
              message: "Please enter a valid email address!",
            },
          ]}
        >
          <Input placeholder="Email Address" />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default InputModal;
