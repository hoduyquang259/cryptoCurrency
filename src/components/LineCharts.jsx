import React from "react";
import { Col, Row, Typography } from "antd";
import {
  ResponsiveContainer,
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Line,
  Tooltip,
  Legend,
} from "recharts";

const { Title } = Typography;

const LineCharts = ({ coinHistory, currentPrice, coinName }) => {
  const dataLineChart = [];

  for (let i = 0; i < coinHistory?.data?.history?.length; i += 60) {
    dataLineChart.push({
      price: coinHistory?.data?.history[i].price,
      timestamp: new Date(
        coinHistory?.data?.history[i].timestamp
      ).toLocaleString(),
    });
  }

  return (
    <div className="line-chart">
      <Row className="chart-header">
        <Title level={2} className="chart-title">
          {coinName} Price Chart{" "}
        </Title>
        <Col className="price-container">
          <Title level={5} className="price-change">
            Change: {coinHistory?.data?.change}%
          </Title>
          <Title level={5} className="current-price">
            Current {coinName} Price: $ {currentPrice}
          </Title>
        </Col>
      </Row>
      <div className="line-chart-container">
        <ResponsiveContainer width="100%" height={250}>
          <LineChart
            data={dataLineChart}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="timestamp" />
            <YAxis />
            <Tooltip />
            <Legend verticalAlign="top" height={36} />
            <Line type="linear" dataKey="price" stroke="#0071bd" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default LineCharts;
