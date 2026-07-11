import { Button as AntButton, type ButtonProps } from "antd";

type Props = ButtonProps;

export const Button = ({ children, ...props }: Props) => {
  return <AntButton {...props}>{children}</AntButton>;
};