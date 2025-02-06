import React, { useState } from "react";
import { Input, Button, Select, Row, Col } from "antd";
import {
  SearchOutlined,
  FilterOutlined,
  FieldTimeOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";
import "./index.css"; // 引入 CSS 文件
import axios from "axios";

const { Option } = Select;

const SearchComponent = ({ searchValues, onChange, handleSearch }: any) => {
  const handleRegionChange = (value: string) => {
    // setRegion(value);
    onChange({ ...searchValues, tag: value });
  };

  return (
    <div className="region-search-wrapper">
      {/* Input with round button */}
      <Input
        // style={{}}
        prefix={
          <SearchOutlined
            style={{ color: "rgba(0,0,0,.25)", marginRight: 12 }}
          />
        }
        value={searchValues.jobTitle}
        onChange={(e) =>
          onChange({ ...searchValues, jobTitle: e.target.value })
        }
        placeholder="Job title"
        suffix={
          <Button
            shape="round"
            icon={<FieldTimeOutlined />}
            onClick={() => console.log("Filter button clicked")}
            style={{ fontSize: 12 }}
          >
            Add Reminder
          </Button>
        }
      />
      <Input
        prefix={
          <SearchOutlined
            style={{ color: "rgba(0,0,0,.25)", marginRight: 12 }}
          />
        }
        value={searchValues.company}
        onChange={(e) => onChange({ ...searchValues, company: e.target.value })}
        placeholder="company"
        suffix={
          <Button
            shape="round"
            icon={<FieldTimeOutlined />}
            onClick={() => console.log("Filter button clicked")}
            style={{ fontSize: 12 }}
          >
            Add Reminder
          </Button>
        }
      />
      <Input
        // style={{}}
        prefix={
          <SearchOutlined
            style={{ color: "rgba(0,0,0,.25)", marginRight: 12 }}
          />
        }
        value={searchValues.city}
        onChange={(e) => onChange({ ...searchValues, city: e.target.value })}
        placeholder="city"
        suffix={
          <Button
            shape="round"
            icon={<FieldTimeOutlined />}
            onClick={() => console.log("Filter button clicked")}
            style={{ fontSize: 12 }}
          >
            Add Reminder
          </Button>
        }
      />
      <Input
        // style={{}}
        prefix={
          <SearchOutlined
            style={{ color: "rgba(0,0,0,.25)", marginRight: 12 }}
          />
        }
        value={searchValues.jobDescription}
        onChange={(e) =>
          onChange({ ...searchValues, jobDescription: e.target.value })
        }
        placeholder="jobDescription"
        suffix={
          <Button
            shape="round"
            icon={<FieldTimeOutlined />}
            onClick={() => console.log("Filter button clicked")}
            style={{ fontSize: 12 }}
          >
            Add Reminder
          </Button>
        }
      />

      {/* <Select
        value={searchValues.tag}
        onChange={handleRegionChange}
        placeholder={
          <>
            <EnvironmentOutlined style={{ marginRight: 10 }} />
            Select TAG
          </>
        }
      >
        <Option value="job_title">职位名称</Option>
        <Option value="company">公司</Option>
        <Option value="city">城市</Option>
        <Option value="job_description">职位描述</Option>
      </Select> */}

      <Button
        type="primary"
        onClick={handleSearch}
        style={{ height: "90%", fontSize: 20, marginLeft: 20, width: 150 }}
      >
        Search
      </Button>
    </div>
  );
};

export default SearchComponent;
