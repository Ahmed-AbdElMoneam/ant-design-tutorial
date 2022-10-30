import { Row, Col, Divider } from "antd";

const style = {
  background: "#0092ff",
  padding: "8px 0",
};

const GridSystem = () => {
  return (
    <>
      <div style={{ textAlign: "center", marginBottom: 10 }}>
        <Row>
          <Col className="columns" span={24}>
            col
          </Col>
        </Row>
        <Row>
          <Col className="columns" span={12}>
            col-12
          </Col>
          <Col className="columns" span={12}>
            col-12
          </Col>
        </Row>
        <Row>
          <Col className="columns" span={8}>
            col-8
          </Col>
          <Col className="columns" span={8}>
            col-8
          </Col>
          <Col className="columns" span={8}>
            col-8
          </Col>
        </Row>
        <Row>
          <Col className="columns" span={6}>
            col-6
          </Col>
          <Col className="columns" span={6}>
            col-6
          </Col>
          <Col className="columns" span={6}>
            col-6
          </Col>
          <Col className="columns" span={6}>
            col-6
          </Col>
        </Row>
      </div>
      <div className="gutters">
        <Divider orientation="left">Horizontal</Divider>
        <Row gutter={16}>
          <Col className="gutter-row" span={6}>
            <div style={style}>col-6</div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div style={style}>col-6</div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div style={style}>col-6</div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div style={style}>col-6</div>
          </Col>
        </Row>
        <Divider orientation="left">Responsive</Divider>
        <Row
          gutter={{
            xs: 8,
            sm: 16,
            md: 24,
            lg: 32,
          }}
        >
          <Col className="gutter-row" span={6}>
            <div style={style}>col-6</div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div style={style}>col-6</div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div style={style}>col-6</div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div style={style}>col-6</div>
          </Col>
        </Row>
        <Divider orientation="left">Vertical</Divider>
        <Row gutter={[16, 24]}>
          <Col className="gutter-row" span={6}>
            <div style={style}>col-6</div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div style={style}>col-6</div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div style={style}>col-6</div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div style={style}>col-6</div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div style={style}>col-6</div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div style={style}>col-6</div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div style={style}>col-6</div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div style={style}>col-6</div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default GridSystem;
