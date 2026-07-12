import { HomeOutlined } from '@ant-design/icons';
import { App as AntdApp, Button, ConfigProvider, Flex, Result } from 'antd';
import jaJP from 'antd/locale/ja_JP';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { LoginForm } from './components/LoginForm';
import { AntdPlaygroundPage } from './pages/AntdPlaygroundPage';
import { HomePage } from './pages/HomePage';

const AppRoutes = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <>
      {location.pathname !== '/' && (
        <Flex className="app-navigation">
          <Button icon={<HomeOutlined />} onClick={() => navigate('/')}>
            トップへ
          </Button>
        </Flex>
      )}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/antd-playground" element={<AntdPlaygroundPage />} />
        <Route
          path="*"
          element={
            <Result
              status="404"
              title="ページが見つかりません"
              extra={
                <Button type="primary" onClick={() => navigate('/')}>
                  トップへ戻る
                </Button>
              }
            />
          }
        />
      </Routes>
    </>
  );
};

function App() {
  return (
    <ConfigProvider locale={jaJP}>
      <AntdApp>
        <AppRoutes />
      </AntdApp>
    </ConfigProvider>
  );
}

export default App;
