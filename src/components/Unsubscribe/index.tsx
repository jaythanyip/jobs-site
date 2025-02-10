import { Button, Result } from "antd";
import axios from "axios";
import type { PropsWithChildren } from "react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { baseURL } from "../../api/Request";

const UnsubscribePage: React.FC<PropsWithChildren> = () => {
  const navigate = useNavigate();
  const [id, setId] = useState<any>("");

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    console.log(urlParams, "urlParams");

    const subscriptionId = urlParams.get("subscriptionId");
    console.log(subscriptionId, "subscriptionId");
    setId(subscriptionId);
  }, []);

  const handleClick = async () => {
    try {
      const res = await axios.patch(`${baseURL}/job-subscription/unsubscribe`, {
        subscriptionId: id,
      });

      console.log(res);
    } catch (e: any) {}
  };

  return (
    <div className="pt-[10vh]">
      <Result
        // status="200"
        title="Unsubscribe"
        subTitle="Are you sure to unsubscribe?"
        extra={
          <>
            <Button type="primary" onClick={() => navigate("/")}>
              Back To Search
            </Button>

            <Button onClick={handleClick}>Confirm</Button>
          </>
        }
      />
    </div>
  );
};

export default UnsubscribePage;
