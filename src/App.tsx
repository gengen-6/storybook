import { App as AntdApp, ConfigProvider } from 'antd';
import jaJP from 'antd/locale/ja_JP';
import { Button } from '../src/components/Button';

function App() {
  return (
    <ConfigProvider locale={jaJP}>
      <AntdApp>
        <Button children={'テスト'} type='primary'/>
      </AntdApp>
    </ConfigProvider>
  );
}

export default App;
