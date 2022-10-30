import { Breadcrumb } from "antd";
const BreadCrumb = () => {
  return (
    <Breadcrumb>
      <Breadcrumb.Item>Home</Breadcrumb.Item>
      <Breadcrumb.Item>
        <a href="https://www.google.com/">Application Center</a>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        <a href="https://www.google.com/">Application List</a>
      </Breadcrumb.Item>
      <Breadcrumb.Item>An Application</Breadcrumb.Item>
    </Breadcrumb>
  );
};

export default BreadCrumb;
