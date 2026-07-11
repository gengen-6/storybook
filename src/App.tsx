import { App as AntdApp, ConfigProvider } from 'antd';
import jaJP from 'antd/locale/ja_JP';
import { LoginForm } from './components/LoginForm';

function App() {
  return (
    <ConfigProvider locale={jaJP}>
      <AntdApp>
        <LoginForm />
      </AntdApp>
    </ConfigProvider>
  );
}

export default App;
