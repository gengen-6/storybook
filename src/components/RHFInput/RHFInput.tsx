import { Form, Input } from 'antd';
import type { InputProps } from 'antd';
import type {
  Control,
  FieldValues,
  Path,
} from 'react-hook-form';
import { Controller } from 'react-hook-form';

type Props<T extends FieldValues> = Omit<
  InputProps,
  'defaultValue' | 'name' | 'onBlur' | 'onChange' | 'status' | 'type' | 'value'
> & {
  name: Path<T>;
  label: string;
  control: Control<T>;
  type?: 'text' | 'password';
};

export const RHFInput = <T extends FieldValues>({
  name,
  label,
  control,
  type = 'text',
  ...inputProps
}: Props<T>) => (
  <Controller
    name={name}
    control={control}
    render={({ field, fieldState }) => {
      const inputPropsWithField = {
        ...inputProps,
        ...field,
        'aria-invalid': Boolean(fieldState.error),
      };

      return (
        <Form.Item
          label={label}
          validateStatus={fieldState.error ? 'error' : undefined}
          help={fieldState.error?.message}
        >
          {type === 'password' ? (
            <Input.Password {...inputPropsWithField} />
          ) : (
            <Input {...inputPropsWithField} />
          )}
        </Form.Item>
      );
    }}
  />
);
