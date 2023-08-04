import React from 'react';
import { WebView } from 'react-native-webview';

const MyWebView = () => {
  return (
    <WebView
      source={{ uri: 'https://www.baidu.com' }}
      style={{ flex: 1 }}
    />
  );
};

export default MyWebView;