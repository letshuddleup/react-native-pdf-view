import * as React from 'react';
import * as ReactNative from 'react-native';

interface Props {
  style?: ReactNative.ViewStyle,
  path: string,
  src?: string,
  asset?: string,
  pageNumber?: number,
  zoom?: number,
  onLoadComplete?: () => void,
  borderWidth?: number,
  backgroundColor?: string,
}

declare class PDFView extends React.Component<Props, any> {}

export default PDFView;
