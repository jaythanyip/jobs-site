import React, { useState } from "react";
import {
  Card,
  Avatar,
  Typography,
  Button,
  Upload,
  UploadProps,
  message,
} from "antd";
import {
  DesktopOutlined,
  InboxOutlined,
  UserOutlined,
} from "@ant-design/icons";
import "./index.css";
import DetailItem from "../DetailItem";
import axios from "axios";
import { baseURL } from "../../api/Request";

const { Title, Text } = Typography;

interface ListItemCardProps {
  info: any;
  setListData?: any;
  pdfId?: any;
  setPdfId?: any;
}

const PersonalCard: React.FC<ListItemCardProps> = ({
  info,
  setListData,
  pdfId,
  setPdfId,
}) => {
  const [fileList, setFileList] = useState<any>([]);
  const props: UploadProps = {
    name: "file",

    onChange(info: any) {
      // if (info.file.status !== "uploading") {
      //   console.log(info.file, info.fileList);
      // }
      // if (info.file.status === "done") {
      //   message.success(`${info.file.name} file uploaded successfully`);
      // } else if (info.file.status === "error") {
      //   message.error(`${info.file.name} file upload failed.`);

      // }
      let fileList = [...info.fileList];

      // 1. Limit the number of uploaded files
      // Only to show the last recent uploaded files, and old ones will be replaced by the new
      fileList = fileList.slice(-1);
      setFileList(fileList);
    },
    progress: {
      strokeColor: {
        "0%": "#108ee9",
        "100%": "#87d068",
      },
      strokeWidth: 3,
      format: (percent) => percent && `${parseFloat(percent.toFixed(2))}%`,
    },
    customRequest: (options: any) => {
      uploadFile(options);
    },

    beforeUpload: (file: File) => {
      const isPdf = file.type === "application/pdf";
      if (!isPdf) {
        message.error("只能上传 PDF 文件!");
      }
      return isPdf; // 如果是 PDF，则返回 true，允许上传，否则返回 false，阻止上传
    },

    onPreview: async (file: any) => {
      if (file.type === "application/pdf") {
        const fileUrl = URL.createObjectURL(file.originFileObj); // 获取文件的 URL
        window.open(fileUrl); // 在新标签页中打开 PDF
      } else {
        message.error("无法预览非 PDF 文件");
      }
    },
  };

  const uploadFile = async (options: any) => {
    const { onSuccess, file, onProgress } = options;

    try {
      const res = await axios.post(
        `${baseURL}/file-upload/upload`,
        {
          file: file,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data", // 必须指定为 multipart/form-data
          },
        }
      );

      if (res?.data?.results) {
        console.log(res?.data?.pdfId);
        setPdfId(res?.data?.pdfId ?? "");
        const data = res?.data?.results.map((item: any) => {
          return {
            ...item,
            avatarUrl: `https://i.pravatar.cc/150?img=${(item?.idx % 10) + 1}`, // 示例头像 URL
          };
        });

        setListData(data);
        onSuccess(res, file);
        message.success(`file uploaded successfully`);
      }
    } catch (e: any) {
      message.success(`file upload error`);
    }
  };

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

        {/* <Button
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
        </Button> */}
        <Upload {...props} fileList={fileList}>
          <Button
            // icon={<UploadOutlined />}
            type="primary"
            style={{
              backgroundColor: "#E8E8E8",
              color: "black",
              padding: 20,
              width: "100%",
              marginTop: 20,
            }}
          >
            Upload Profile
          </Button>
        </Upload>
      </div>
    </Card>
  );
};

export default PersonalCard;
