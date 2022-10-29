import { Divider, Space, Card, Button, Typography } from "antd";

const Spacing = () => {
  return (
    <div className="spacing" style={{ marginLeft: 50 }}>
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
      <Divider />
      <Space
        direction="vertical"
        size="middle" //small | middle | large
        style={{
          display: "flex",
        }}
      >
        <Card title="Card" size="small">
          <p>Card content</p>
          <p>Card content</p>
        </Card>
        <Card title="Card" size="small">
          <p>Card content</p>
          <p>Card content</p>
        </Card>
      </Space>
      <Divider />
      <div className="space-align-block">
        <Space align="start">
          {/*align= "center | start | end | baseline"
						 size= 0~100
						 wrap */}
          center
          <Button type="primary">Primary</Button>
          <span className="mock-block">Block</span>
        </Space>
      </div>
      <div>
        <Space split={<Divider type="vertical" />}>
          <Typography.Link>Link</Typography.Link>
          <Typography.Link>Link</Typography.Link>
          <Typography.Link>Link</Typography.Link>
        </Space>
      </div>
    </div>
  );
};

export default Spacing;
