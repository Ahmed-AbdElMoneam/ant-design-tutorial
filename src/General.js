import { useState } from "react";
import { Button, Dropdown, Menu, Typography } from "antd";
import {
  CaretRightOutlined,
  SearchOutlined,
  SmileTwoTone,
  HeartTwoTone,
  FormOutlined,
} from "@ant-design/icons";
const { Title, Paragraph, Text } = Typography;

const General = () => {
  const [myText, setMyText] = useState("initialText");
  const menu = (
    <Menu
      items={[
        { key: 1, label: "clear fields" },
        {
          key: 2,
          label: "Submit Without",
        },
      ]}
    />
  );
  const article =
    "To be, or not to be, that is a question: Whether it is nobler in the mind to suffer. The slings and arrows of outrageous fortune Or to take arms against a sea of troubles, And by opposing end them? To die: to sleep; No more; and by a sleep to say we end The heart-ache and the thousand natural shocks That flesh is heir to, 'tis a consummation Devoutly to be wish'd. To die, to sleep To sleep- perchance to dream: ay, there's the rub! For in that sleep of death what dreams may come When we have shuffled off this mortal coil, Must give us pause. There 's the respect That makes calamity of so long life";
  return (
    <div>
      <div className="buttons">
        <h1 style={{ textAlign: "center" }}>Buttons</h1>
        <Button
          style={{ margin: 10 }}
          type="primary"
          size="large"
          icon={<CaretRightOutlined />}
          shape="round"
          ghost
        >
          Hi I am button
        </Button>
        <Button
          type="dashed"
          size="small"
          icon={<SearchOutlined />}
          block
          disabled
        >
          Search
        </Button>
        <Button type="link">Click Here</Button>
        <Dropdown.Button overlay={menu} style={{ margin: 10 }}>
          Submit
        </Dropdown.Button>
      </div>
      <div className="icons">
        <SmileTwoTone style={{ margin: 10 }} />
        <HeartTwoTone twoToneColor="#eb2f96" />
      </div>
      <div className="Typography">
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
        <Paragraph
          ellipsis={{
            rows: 2,
            expandable: true,
            suffix: "--William Shakespeare",
            onEllipsis: (ellipsis) => {
              console.log("Ellipsis changed:", ellipsis);
            },
          }}
          title={`${article}--William Shakespeare`}
        >
          {article}
        </Paragraph>
      </div>
    </div>
  );
};

export default General;
