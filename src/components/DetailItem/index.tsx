import React from "react";
import { Card, Avatar, Typography } from "antd";
import { UserOutlined } from "@ant-design/icons";
import "./index.css";

interface DetailItemCardProps {
  icon?: any;
  title: string;
  text: string;
}

const DetailItem: React.FC<DetailItemCardProps> = ({ icon, title, text }) => {
  return (
    <div className="detail-item-wrapper">
      <div className="detail-item-left">
        <Avatar
          size={34}
          icon={icon}
          shape="square"
          style={{
            backgroundColor: "#E7ECFA",
            color: "#2A4CFE",
            fontWeight: "bold",
          }}
        />
        <div className="detail-item-left-title">
          <div className="detail-item-left-title-big">{title}</div>
          <div className="detail-item-left-title-small">{text}</div>
        </div>
      </div>
    </div>
  );
};

export default DetailItem;
