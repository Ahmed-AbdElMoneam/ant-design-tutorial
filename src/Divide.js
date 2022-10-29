import { Divider } from "antd";

const Divide = () => {
  return (
    <div style={{ padding: 50 }}>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa neque
        nam numquam quia illum laborum rem praesentium fuga quo nostrum placeat
        esse natus perspiciatis quidem quaerat, consequuntur excepturi minus
        modi?
      </p>
      <Divider>Center Title</Divider>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa neque
        nam numquam quia illum laborum rem praesentium fuga quo nostrum placeat
        esse natus perspiciatis quidem quaerat, consequuntur excepturi minus
        modi?
      </p>
      <Divider orientation="left">Left Title</Divider>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa neque
        nam numquam quia illum laborum rem praesentium fuga quo nostrum placeat
        esse natus perspiciatis quidem quaerat, consequuntur excepturi minus
        modi?
      </p>
      <Divider orientation="right" plain>
        Right Title
      </Divider>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa neque
        nam numquam quia illum laborum rem praesentium fuga quo nostrum placeat
        esse natus perspiciatis quidem quaerat, consequuntur excepturi minus
        modi?
      </p>
      <Divider />
      <a href="https://www.google.com/">Anchor</a>
      <Divider type="vertical" />
      <a href="https://www.google.com/">Anchor</a>
      <Divider type="vertical" />
      <a href="https://www.google.com/">Anchor</a>
      <Divider />
    </div>
  );
};

export default Divide;
