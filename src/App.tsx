import { App as AntdApp, ConfigProvider } from 'antd';
import jaJP from 'antd/locale/ja_JP';
import { Button } from '../src/components/Button';

function App() {
  return (
    <ConfigProvider locale={jaJP}>
      <AntdApp>
        <Button />
      </AntdApp>
    </ConfigProvider>
  );
}

export default App;
