import type { Preview } from '@storybook/react-vite';
import { ConfigProvider } from 'antd';
import jaJP from 'antd/locale/ja_JP';
import '../src/index.css';

const preview: Preview = {
  decorators: [
    (Story) => (
      <ConfigProvider locale={jaJP}>
        <Story />
      </ConfigProvider>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
