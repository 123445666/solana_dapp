import { Card, Row, Col, Typography } from "antd";
import { useSelector } from "react-redux";
import { AppState } from "./../store";

const Transfer = () => {
    const {
        wallet: { walletAddress, balance }
    } = useSelector((state: AppState) => state);
    return <Card title="Transfer">
        <Row gutter={[24, 24]}>
            <Col span={24}>
                <Typography.Text>Sender Address: {walletAddress}</Typography.Text>
            </Col>
            <Col span={24}>
                <Typography.Text>Sender Balance: {balance}</Typography.Text>
            </Col>
        </Row>
    </Card>
};

export default Transfer;