import { memo } from 'react';
import Loading from './Loading';

interface IButtonProps {
  isLoading?: boolean;
  handleSubmit: () => void;
  label: string;
}
const Button = ({ isLoading = false, handleSubmit, label }: IButtonProps) => {
  return (
    <div className="flex justify-end mt-10 px-12">
      <div className="relative">
        <button
          disabled={isLoading}
          onClick={handleSubmit}
          className={`items-end  shadow-md ${
            isLoading ? 'bg-white' : 'bg-darkColor'
          } font-semibold ${
            isLoading ? 'text-darkColor' : 'text-white'
          } py-2 px-4 border border-darkColor  rounded cursor-pointer`}
        >
          {label}
        </button>
        {isLoading && <Loading className="absolute top-1 left-6" />}
      </div>
    </div>
  );
};
export default memo(Button);
