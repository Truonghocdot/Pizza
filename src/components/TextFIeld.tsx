type Props = {
  value?: string;
  width?: string;
  height?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
};
function TextFiedld({
  width = "100px",
  height = "100px",
  onChange,
  ...restProps
}: Props) {
  return (
    <input
      className="text-field"
      {...restProps}
      style={{ width, height }}
      onChange={(e) => onChange && onChange(e.target.value)}
    />
  );
}

export default TextFiedld;
