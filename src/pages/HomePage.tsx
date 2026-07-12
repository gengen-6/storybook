import { ExperimentOutlined, LoginOutlined } from '@ant-design/icons';
import { Button, Card, Col, Row, Space, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';

export const HomePage = () => {
  const navigate = useNavigate();

  return (
    <main className="page-container home-page">
      <div className="page-heading">
        <Typography.Title>検証メニュー</Typography.Title>
        <Typography.Text type="secondary">
          確認したいページを選択してください。
        </Typography.Text>
      </div>

      <Row gutter={[24, 24]}>
        <Col xs={24} md={12}>
          <Card title="ログインページ" className="navigation-card">
            <Space direction="vertical" size="large">
              <Typography.Text>
                React Hook FormとZodを利用したログインフォームです。
              </Typography.Text>
              <Button
                type="primary"
                icon={<LoginOutlined />}
                onClick={() => navigate('/login')}
              >
                ログインページを開く
              </Button>
            </Space>
          </Card>
        </Col>

        <Col xs={24} md={12}>
          <Card title="Ant Design検証ページ" className="navigation-card">
            <Space direction="vertical" size="large">
              <Typography.Text>
                Gridやフォーム部品など、Ant Designの表示を確認できます。
              </Typography.Text>
              <Button
                icon={<ExperimentOutlined />}
                onClick={() => navigate('/antd-playground')}
              >
                検証ページを開く
              </Button>
            </Space>
          </Card>
        </Col>
      </Row>
    </main>
  );
};
