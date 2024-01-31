import { Input } from '@chakra-ui/react';

const CustomInput = ({
  placeholder,
  type = 'text',
}: {
  placeholder: string;
  type?: string;
}) => {
  return (
    <Input
      background="#2b2b2b"
      border="1px dashed #84CC16"
      _hover={{
        border: '1px dashed #5d8f10',
      }}
      _focus={{
        border: '1px dashed #5d8f10',
        outline: 'none',
        boxShadow: 'none',
      }}
      _placeholder={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '14px',
      }}
      type={type}
      placeholder={placeholder}
    />
  );
};

export default CustomInput;
