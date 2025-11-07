import React, { useState } from "react";
import { Form, Input, Button, Card, Typography } from "antd";

const { Title, Paragraph } = Typography;

function App() {
  // Состояние для формы
  const [formData, setFormData] = useState({ name: "", description: "" });
  const [submittedData, setSubmittedData] = useState(null);

  // Обновление состояния при изменении полей
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Отправка формы
  const handleSubmit = () => {
    setSubmittedData(formData);
    setFormData({ name: "", description: "" }); // очищаем форму
  };

  return (
    <div style={{ maxWidth: "500px", margin: "50px auto" }}>
      <Title level={2}>Форма</Title>
      <Form layout="vertical">
        <Form.Item label="Имя">
          <Input
            placeholder="Введите имя"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </Form.Item>

        <Form.Item label="Описание">
          <Input
            placeholder="Введите описание"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </Form.Item>

        <Form.Item>
          <Button type="primary" onClick={handleSubmit}>
            Отправить
          </Button>
        </Form.Item>
      </Form>

      {submittedData && (
        <Card style={{ marginTop: "20px" }} title={submittedData.name}>
          <Paragraph>{submittedData.description}</Paragraph>
        </Card>
      )}
    </div>
  );
}

export default App;
