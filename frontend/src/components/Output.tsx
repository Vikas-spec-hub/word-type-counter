import { memo } from 'react';
import { IResponse } from '../interface';

interface IOutputProps {
  result: IResponse;
}
const Output = ({ result }: IOutputProps): JSX.Element => {
  const keys = Object?.keys(result);
  const data = keys?.map(value => ({
    keyName: value,
    count: result?.[value],
  }));
  return (
    <div className="flex-col px-12  flex ">
      <label
        htmlFor="UserEmail"
        className="block text-md font-medium text-[#8D493A] "
      >
        Result
      </label>
      <div className="border border-darkColor rounded-md p-4 min-h-[150px] max-h-[400px] overflow-auto bg-white">
        {data.length > 0 &&
          data?.map(value => (
            <p>
              {value.keyName}: {value.count}
            </p>
          ))}
      </div>
    </div>
  );
};
export default memo(Output);
