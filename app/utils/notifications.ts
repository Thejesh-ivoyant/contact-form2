import { message } from 'antd';
type MessageTypes = 'success' | 'error' | 'warning';
type OpenMessageType = {
  type: MessageTypes;
  content: React.ReactNode;
  duration?: number;
};
const openMessage = ({ type, content, duration = 2 }: OpenMessageType) => {
  message[type]({
    content,
    duration,
  });
};
export const success = (content: React.ReactNode, duration?: number) => {
  openMessage({ type: 'success', content, duration });
};
export const errorMessage = (content: React.ReactNode, duration?: number) => {
  openMessage({ type: 'error', content, duration });
};
export const warning = (content: React.ReactNode, duration?: number) => {
  openMessage({ type: 'warning', content, duration });
};
