import React from "react";
import { Card, Avatar, Typography, Button, Tooltip } from "antd";
import {
  EnvironmentOutlined,
  FieldTimeOutlined,
  InboxOutlined,
  MoneyCollectOutlined,
  MoreOutlined,
  UserOutlined,
} from "@ant-design/icons";
import "./index.css";
import { hover } from "@testing-library/user-event/dist/hover";

const { Title, Text } = Typography;

interface ListItemCardProps {
  // avatarUrl?: string;
  // name: string;
  // description: string;
  // location: string;
  item: any;
}

const ListItem: React.FC<ListItemCardProps> = ({
  // avatarUrl,
  // name,
  // description,
  // location,
  item,
}) => {
  const {
    active_time,
    city,
    company,
    idx,
    job_description,
    job_title,
    job_url,
    similarity,
    avatarUrl,
  } = item;
  return (
    <div className="list-item-wrapper">
      <div className="list-item-left">
        <Avatar
          src={avatarUrl}
          size={58}
          icon={<UserOutlined />}
          shape="circle"
        />
        <div className="list-item-left-title">
          <Tooltip title={job_title}>
            <div className="list-item-left-title-big">
              {job_title}
              {/* <Button
              type="primary"
              shape="round"
              size={"small"}
              style={{
                backgroundColor: "#2A4CFE",
                color: "white",
                marginLeft: "10px",
                fontSize: 10,
                height: 20,
                width: 70,
              }}
            >
              2 days ago
            </Button> */}
            </div>
          </Tooltip>
          <div className="list-item-left-title-small">{company}</div>
        </div>
      </div>
      <div className="part">
        <div className="part-content">
          <EnvironmentOutlined style={{ color: "#2A4CFE", marginRight: 10 }} />
          {city}
        </div>
        <div className="part-content">
          <FieldTimeOutlined style={{ color: "#2A4CFE", marginRight: 10 }} />
          {active_time}
        </div>
      </div>

      <div className="part">
        <div className="part-content">
          <MoneyCollectOutlined style={{ color: "#2A4CFE", marginRight: 10 }} />
          10k~14k
        </div>
        <div className="part-content">
          <InboxOutlined style={{ color: "#2A4CFE", marginRight: 10 }} />
          Full-time
        </div>
      </div>

      <div className="part">
        <div className="comp-box">
          <div className="comp-box-value">{similarity?.toFixed(2)}</div>
          <div className="comp-box-bottom">compliance</div>
        </div>
      </div>

      <div className="more">
        <MoreOutlined style={{ fontSize: 20, cursor: "pointer" }} />
      </div>
    </div>
  );
};

export default ListItem;
