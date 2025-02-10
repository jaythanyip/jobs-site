import React, { useState } from "react";
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
import axios from "axios";
import { baseURL } from "./api/Request";
import InputModal from "./components/InputModal";

const { Header, Content } = Layout;

const JobPage: React.FC = () => {
  const [searchValues, setSearchValues] = useState<any>({
    jobTitle: "",
    company: "",
    city: "",
    jobDescription: "",
  });

  const [listData, setListData] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [pdfId, setPdfId] = useState<any>("");
  const [inputVisible, setInputVisible] = useState<boolean>(false);

  const handleSearchChange = (values: any) => {
    setSearchValues(values);
  };

  const handleSearch = async () => {
    console.log("Search value:", searchValues);
    setLoading(true);

    const params = {
      // tag: searchValues.tag,
      // key_word: searchValues.key_word,
      // debug: false,
      ...searchValues,
    };
    try {
      const res = await axios.post(`${baseURL}/job-search/search`, params);
      const data = res?.data?.results.map((item: any) => {
        return {
          ...item,
          id: item?.idx,
          name: item?.job_title,
          description: item?.job_description,
          // location: `Location ${index + 1}`,
          avatarUrl: `https://i.pravatar.cc/150?img=${(item?.idx % 10) + 1}`, // 示例头像 URL
        };
      });

      console.log(res, data);
      setListData(data);
      setLoading(false);
    } catch (e: any) {
      setLoading(false);
    }
  };

  // const listData = Array.from({ length: 20 }, (_, index) => ({
  //   id: index + 1,
  //   name: `Item ${index + 1}`,
  //   description: `This is the description for item ${index + 1}`,
  //   location: `Location ${index + 1}`,
  //   avatarUrl: `https://i.pravatar.cc/150?img=${(index % 10) + 1}`, // 示例头像 URL
  // }));

  const cardData = {
    avatarUrl: `https://i.pravatar.cc/150?img=1`,
  };

  const onConfirm = async (values: any) => {
    const params = {
      ...searchValues,
      ...values,
      pdfId,
    };
    console.log(params);

    setInputVisible(false);

    try {
      const res = await axios.post(
        `${baseURL}/job-subscription/subscribe`,
        params
      );

      console.log(res);
    } catch (e: any) {}
  };

  return (
    <>
      <InputModal
        visible={inputVisible}
        onSave={onConfirm}
        onCancel={() => {
          setInputVisible(false);
        }}
      />

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
            <SearchComponent
              setInputVisible={setInputVisible}
              handleSearch={handleSearch}
              searchValues={searchValues}
              onChange={handleSearchChange}
            />
          </div>
        </div>

        {/* 内容区域，占满屏幕剩余部分 */}
        <Content style={{ padding: "20px 10vw", flex: 1 }}>
          <Row gutter={20} style={{ height: "100%" }}>
            {/* 左侧固定组件 */}
            <Col span={6}>
              <PersonalCard
                info={cardData}
                setListData={setListData}
                pdfId={pdfId}
                setPdfId={setPdfId}
              />
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
                  loading={loading}
                  dataSource={listData}
                  renderItem={(item: any) => (
                    <List.Item
                      id={item?.idx}
                      style={{ display: "flex", justifyContent: "center" }}
                    >
                      <ListItem
                        item={item}
                        // avatarUrl={item.avatarUrl}
                        // name={item.name}
                        // description={item.description}
                        // location={item.location}
                      />
                    </List.Item>
                  )}
                />
              </div>
            </Col>
          </Row>
        </Content>
      </Layout>
    </>
  );
};

export default JobPage;
