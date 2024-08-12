import { useCallback, useState } from 'react';

import './index.css';
import Input from './components/Input';
import Output from './components/Output';
import { apiHelper } from './utils/api';
import Button from './components/Button';
import { IResponse } from './interface';
import { API_METHODS } from './enums';

function App(): JSX.Element {
  const [isError, setError] = useState<boolean>(false);
  const [value, setValue] = useState<string>('');
  const [isLoading, setLoading] = useState<boolean>(false);
  const [response, setResponse] = useState<IResponse>({} as IResponse);

  const handleChange = useCallback((value: string) => {
    setError(false);
    setValue(value);
  }, []);

  const reset = () => {
    setLoading(false);
  };

  const handleSubmit = useCallback(async () => {
    setLoading(true);
    if (!value?.trim()?.length) {
      setError(true);
      setLoading(false);
      return;
    }
    try {
      if (!import.meta.env.VITE_API_URL) {
        console.error('Dont have env variable');
      }

      const baseUrl = import.meta.env.VITE_API_URL;
      const url = `${baseUrl}/word-count`;
      const res = await apiHelper<IResponse>({
        url,
        method: API_METHODS.POST,
        data: {
          textContent: value,
        },
      });
      setResponse(res.data);
    } catch (error) {
      console.error('error: ', error);
    }
    reset();
  }, [value]);

  return (
    <div className="flex justify-center md:items-center bg-white h-[100vh] ">
      <div className=" h-auto pb-8 sm:px-5 w-[800px] bg-[#F8EDE3] rounded-lg">
        <div className="flex-col justify-end">
          <div>
            <h1 className="text-center text-darkColor font-bold text-3xl mt-8">
              Word Type Counter
            </h1>
          </div>
          <Input
            label="Enter the value"
            value={value}
            onChange={handleChange}
            error={isError}
          />
          <Output result={response} />
          <Button
            isLoading={isLoading}
            handleSubmit={handleSubmit}
            label={'Submit'}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
