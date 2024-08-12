interface InputProps {
  onChange: (value: string) => void;
  value: string;
  label: string;
  error: boolean;
}
const Input = ({ onChange, value, label, error }: InputProps) => {
  return (
    <div className="px-12 flex-col g:items-center mt-6">
      <div>
        <label className="block text-md font-medium text-darkColor ">
          {label}
        </label>

        <textarea
          value={value}
          onChange={event => {
            onChange(event.target.value);
          }}
          className={`textarea min-h-28 max-h-40 mt-1  w-full rounded-md border border-darkColor  p-2 ${
            error
              ? 'outline-red-500 border-red-500'
              : 'outline-darkColor border-darkColor'
          }  shadow-sm sm:text-md`}
        />
        {error && (
          <p className="text-red-500 text-xs font-bold ml-2">Enter the text</p>
        )}
      </div>
      <div className="flex justify-end mt-5"></div>
    </div>
  );
};
export default Input;
