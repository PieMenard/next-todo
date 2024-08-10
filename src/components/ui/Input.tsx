type inputProps = {
  name: string;
  type: string;
  placeholder?: string;
  value?: string;
};

const Input = ({ name, type, placeholder, value }: inputProps) => {
  return (
    <>
      <input
        className="w-ful p-2 border border-gray-200"
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
      />
    </>
  );
};

export default Input;
