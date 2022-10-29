import "./App.css";
import { useState } from "react";
import { Button } from "antd";
import { CaretRightOutlined, FormOutlined } from "@ant-design/icons";
import { Typography } from "antd";
import { Divider, Space } from "antd";

const { Title, Text, Paragraph } = Typography;

function App() {
  const [myText, setMyText] = useState("initialText");
  const styles = {
    root: { padding: 100 },
  };

  return (
    <div className="App">
      <div>
        <Title level={2}>Hello it's a title</Title>
        <Text type="danger" style={{ fontSize: 50 }}>
          Hello it is a text
        </Text>
        <Paragraph style={{ fontSize: 50 }} copyable>
          This is a copyable paragraph
        </Paragraph>
        <Paragraph
          style={{ fontSize: 50, width: 700, marginLeft: 350 }}
          editable={{
            tooltip: "Edit me please",
            icon: <FormOutlined />,
            onChange: setMyText,
          }}
        >
          {myText}
        </Paragraph>
        <Button
          style={{ margin: 1 }}
          type="primary"
          size="large"
          icon={<CaretRightOutlined />}
        >
          Hi I am button
        </Button>
      </div>
      <hr />
      <div style={styles.root}>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa neque
          nam numquam quia illum laborum rem praesentium fuga quo nostrum
          placeat esse natus perspiciatis quidem quaerat, consequuntur excepturi
          minus modi?
        </p>
        <Divider>Center Title</Divider>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa neque
          nam numquam quia illum laborum rem praesentium fuga quo nostrum
          placeat esse natus perspiciatis quidem quaerat, consequuntur excepturi
          minus modi?
        </p>
        <Divider orientation="left">Left Title</Divider>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa neque
          nam numquam quia illum laborum rem praesentium fuga quo nostrum
          placeat esse natus perspiciatis quidem quaerat, consequuntur excepturi
          minus modi?
        </p>
        <Divider orientation="right" plain>
          Right Title
        </Divider>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa neque
          nam numquam quia illum laborum rem praesentium fuga quo nostrum
          placeat esse natus perspiciatis quidem quaerat, consequuntur excepturi
          minus modi?
        </p>
        <Divider />
        <a href="https://www.google.com/">Anchor</a>
        <Divider type="vertical" />
        <a href="https://www.google.com/">Anchor</a>
        <Divider type="vertical" />
        <a href="https://www.google.com/">Anchor</a>
        <Divider />
        <Space>
          <a href="https://www.google.com/">Anchor</a>
          <a href="https://www.google.com/">Anchor</a>
          <a href="https://www.google.com/">Anchor</a>
        </Space>
        <Divider />
        <Space direction="vertical">
          <a href="https://www.google.com/">Anchor</a>
          <a href="https://www.google.com/">Anchor</a>
          <a href="https://www.google.com/">Anchor</a>
        </Space>
      </div>
    </div>
  );
}

export default App;
