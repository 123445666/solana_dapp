import { Col, Row } from "antd";
import { useSelector } from "react-redux";
import { AppState } from "../store";
const WalletInfo = () => {
    const {
        wallet: { walletAddress, balance }
    } = useSelector((state: AppState) => state);
    return (
        <Row gutter={[24, 24]}>
            {/* Wallet address */}
            <Col span={24}>
                <Row gutter={[12, 12]}>
                    <Col>Wallet Address:</Col>
                    <Col>{walletAddress}</Col>
                </Row>
            </Col>
            {/* Wallet balance */}
            <Col span={24}>
                <Row gutter={[12, 12]}>
                    <Col>Balance:</Col>
                    <Col>{balance}</Col>
                </Row>
            </Col>
        </Row>
    );
}

({ address, balance }: { address: string; balance: number }) => {

};

export default WalletInfo;