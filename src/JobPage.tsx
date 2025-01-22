import React from "react";
import { Layout, Row, Col, Card, List, Button, Avatar } from "antd";
import "./App.css";
import ListItem from "./components/ListItem";
import PersonalCard from "./components/PersonalCard";
import SearchComponent from "./components/SearchButton";
import {
  BulbOutlined,
  LineHeightOutlined,
  SettingOutlined,
  UserOutlined,
} from "@ant-design/icons";

const { Header, Content } = Layout;

const JobPage: React.FC = () => {
  const listData = Array.from({ length: 20 }, (_, index) => ({
    id: index + 1,
    name: `Item ${index + 1}`,
    description: `This is the description for item ${index + 1}`,
    location: `Location ${index + 1}`,
    avatarUrl: `https://i.pravatar.cc/150?img=${(index % 10) + 1}`, // 示例头像 URL
  }));

  const cardData = {
    avatarUrl: `https://i.pravatar.cc/150?img=1`,
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      {/* 固定的 Header */}
      <div className="header">
        <div className="header-nav">
          <div className="header-nav-btns">
            <Avatar
              style={{
                marginRight: 15,
                backgroundColor: "white",
                color: "black",
                border: "1px solid #A5A5A5",
                cursor: "hover",
              }}
              icon={<BulbOutlined style={{ fontSize: 10 }} />}
            />
            <Avatar
              style={{
                marginRight: 15,
                backgroundColor: "white",
                color: "black",
                border: "1px solid #A5A5A5",
                cursor: "hover",
              }}
              icon={
                <SettingOutlined style={{ fontSize: 10, cursor: "hover" }} />
              }
            />
            <Avatar
              style={{ backgroundColor: "#87d068", padding: 18 }}
              icon={<UserOutlined />}
            ></Avatar>
          </div>
        </div>
        <div>
          <SearchComponent />
        </div>
      </div>

      {/* 内容区域，占满屏幕剩余部分 */}
      <Content style={{ padding: "20px 10vw", flex: 1 }}>
        <Row gutter={20} style={{ height: "100%" }}>
          {/* 左侧固定组件 */}
          <Col span={6}>
            <PersonalCard info={cardData} />
          </Col>

          {/* 右侧可滑动列表 */}
          <Col span={18}>
            {/* <div className="list-item-header">
              <div className="list-item-header-left">
                We've found <span className="bold">523</span> jobs!
              </div>
              <div className=""></div>
            </div> */}
            <div style={{ maxHeight: "68vh", overflowY: "auto" }}>
              <List
                dataSource={listData}
                renderItem={(item) => (
                  <List.Item
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <ListItem
                      avatarUrl={item.avatarUrl}
                      name={item.name}
                      description={item.description}
                      location={item.location}
                    />
                  </List.Item>
                )}
              />
            </div>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default JobPage;
