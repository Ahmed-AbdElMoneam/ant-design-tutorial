import { Dropdown, Menu, Space } from "antd";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";

const menu = (
  <Menu
    items={[
      { key: 1, label: "First option", danger: "true" },
      { type: "divider" },
      {
        key: 2,
        label: (
          <a
            href="https://www.google.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Second option
          </a>
        ),
        disabled: "true",
        icon: <SmileOutlined />,
      },
    ]}
  />
);

const DropDownList = () => {
  return (
    <>
      <Dropdown
        overlay={menu}
        placement="bottom"
        trigger={["click", "hover", "contextMenu"]}
        arrow
      >
        {/*placement="top | topLeft | topRight | bottom | bottomRight | bottomLeft"*/}
        <a onClick={(e) => e.preventDefault()} href="_">
          <Space>
            Hover Me
            <DownOutlined />
          </Space>
        </a>
      </Dropdown>
    </>
  );
};

export default DropDownList;
