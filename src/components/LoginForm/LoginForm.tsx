import { zodResolver } from '@hookform/resolvers/zod';
import { Card, Typography } from 'antd';
import { useForm } from 'react-hook-form';
import { Button } from '../Button';
import { RHFInput } from '../RHFInput';
import { loginSchema, type LoginFormValues } from './LoginForm.schema';

export const LoginForm = () => {
  //レンダーされるとuseFormが実行されて、戻り値として、control, handleSubmit, formStateを受け取っている
  //React Hook Formがフォームの状態を管理、入力値の検証をZodのloginSchemaに任せている
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<LoginFormValues>({
    //zodResolverで入力値をloginSchemaのルールで検証する
    resolver: zodResolver(loginSchema),
    //id, passwordの初期値を空文字に設定
    defaultValues: {
      id: '',
      password: '',
    },
  });

  const onSubmit = (_values: LoginFormValues) => {
    // 認証APIとの接続は、ここに追加します。
  };

  return (
    <main className="page-container">
      <Card style={{ width: '100%', maxWidth: 400, margin: '64px auto 0' }}>
        <Typography.Title level={2}>ログイン</Typography.Title>

        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <RHFInput
            name="id"
            label="ID"
            control={control}
            autoComplete="username"
            placeholder="IDを入力"
          />

          <RHFInput
            name="password"
            label="パスワード"
            control={control}
            type="password"
            autoComplete="current-password"
            placeholder="パスワードを入力"
          />

          <Button type="primary" htmlType="submit" loading={isSubmitting} block>
            ログイン
          </Button>
        </form>
      </Card>
    </main>
  );
};
