import React from "react";
import { Card, Avatar, Typography, Button } from "antd";
import {
  DesktopOutlined,
  InboxOutlined,
  UserOutlined,
} from "@ant-design/icons";
import "./index.css";
import DetailItem from "../DetailItem";

const { Title, Text } = Typography;

interface ListItemCardProps {
  info: any;
}

const PersonalCard: React.FC<ListItemCardProps> = ({ info }) => {
  return (
    <Card className="personal-card-wrapper">
      <div className="personal-card-header">
        <Avatar
          src={info.avatarUrl}
          size={88}
          icon={<UserOutlined />}
          shape="circle"
        />
        <div className="personal-card-header-text">USER NAME</div>
      </div>
      <div className="personal-card-main">
        <div className="personal-card-main-part1">
          <div className="personal-card-main-title">Personal Details</div>
          <DetailItem
            icon={<UserOutlined />}
            title={"Occupation"}
            text={"Designer"}
          />
          <DetailItem
            icon={<DesktopOutlined />}
            title={"Work Experience"}
            text={"2 Years Experience"}
          />
          <DetailItem
            icon={<InboxOutlined />}
            title={"Employee type"}
            text={"Full Time, Part Time"}
          />
        </div>
        <div className="personal-card-main-part1">
          <div className="personal-card-main-title">Subscribed</div>
          <Button
            type="primary"
            shape="round"
            size={"small"}
            style={{
              backgroundColor: "#E7ECFA",
              color: "#2A4CFE",
              marginRight: "10px",
              marginBottom: "15px",
            }}
          >
            UI designer
          </Button>
          <Button
            type="primary"
            shape="round"
            size={"small"}
            style={{
              backgroundColor: "#E7ECFA",
              color: "#2A4CFE",
              marginRight: "10px",
              marginBottom: "15px",
            }}
          >
            UX designer
          </Button>
          <Button
            type="primary"
            shape="round"
            size={"small"}
            style={{
              backgroundColor: "#E7ECFA",
              color: "#2A4CFE",
              marginRight: "10px",
              marginBottom: "15px",
            }}
          >
            product designer
          </Button>
        </div>

        <Button
          type="primary"
          style={{
            backgroundColor: "#E8E8E8",
            color: "black",
            padding: 20,
            width: "100%",
            marginTop: 20,
          }}
        >
          Edit Profile
        </Button>
      </div>
    </Card>
  );
};

export default PersonalCard;
