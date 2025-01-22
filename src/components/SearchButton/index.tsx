import React, { useState } from "react";
import { Input, Button, Select, Row, Col } from "antd";
import {
  SearchOutlined,
  FilterOutlined,
  FieldTimeOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";
import "./index.css"; // 引入 CSS 文件

const { Option } = Select;

const SearchComponent: React.FC = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [region, setRegion] = useState<string | undefined>(undefined);

  const handleSearch = () => {
    console.log("Search value:", searchValue);
    console.log("Selected region:", region);
  };

  const handleRegionChange = (value: string) => {
    setRegion(value);
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
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Job title or keyword"
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

      <Select
        value={region}
        onChange={handleRegionChange}
        placeholder={
          <>
            <EnvironmentOutlined style={{ marginRight: 10 }} />
            Select Location
          </>
        }
      >
        <Option value="Asia">Asia</Option>
        <Option value="Europe">Europe</Option>
        <Option value="America">America</Option>
      </Select>

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
