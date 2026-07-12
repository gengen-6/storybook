import {
  Alert,
  Button,
  Card,
  Checkbox,
  Col,
  DatePicker,
  Flex,
  Input,
  Row,
  Select,
  Space,
  Switch,
  Typography,
} from 'antd';

export const AntdPlaygroundPage = () => (
  <main className="page-container playground-page">
    <div className="page-heading">
      <Typography.Title>Ant Design検証ページ</Typography.Title>
      <Typography.Text type="secondary">
        コンポーネントやレスポンシブレイアウトの表示確認用ページです。
      </Typography.Text>
    </div>

    <Space direction="vertical" size="large" className="playground-sections">
      <Alert
        showIcon
        type="info"
        message="画面幅を変えると、下のカードが1列と2列に切り替わります。"
      />

      <Row gutter={[24, 24]}>
        <Col xs={24} lg={12}>
          <Card title="入力コンポーネント">
            <Space direction="vertical" className="control-stack">
              <Input placeholder="テキストを入力" />
              <Select
                placeholder="項目を選択"
                options={[
                  { value: 'one', label: '項目1' },
                  { value: 'two', label: '項目2' },
                ]}
              />
              <DatePicker className="full-width" />
              <Checkbox>チェック項目</Checkbox>
            </Space>
          </Card>
        </Col>

        <Col xs={24} lg={12}>
          <Card title="操作コンポーネント">
            <Space direction="vertical" size="large">
              <Flex gap="small" wrap>
                <Button type="primary">Primary</Button>
                <Button>Default</Button>
                <Button danger>Danger</Button>
                <Button disabled>Disabled</Button>
              </Flex>
              <Flex gap="middle" align="center">
                <Switch defaultChecked />
                <Typography.Text>設定のON／OFF</Typography.Text>
              </Flex>
            </Space>
          </Card>
        </Col>
      </Row>
    </Space>
  </main>
);
