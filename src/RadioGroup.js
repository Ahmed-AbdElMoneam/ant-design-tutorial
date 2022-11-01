import { Radio } from "antd";
import { useState } from "react";

const RadioGroup = () => {
  const [value, setValue] = useState(1);
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <Radio.Group onChange={handleChange} value={value}>
      <Radio value={1}>option 1</Radio>
      <Radio value={2}>option 2</Radio>
      <Radio value={3}>option 3</Radio>
      <Radio value={4}>option 4</Radio>
    </Radio.Group>
  );
};

export default RadioGroup;
