import { memo } from 'react';
import LoadingSvg from '../assets/loading';

interface ILoading {
  className?: string;
}
export const Loading = ({ className }: ILoading): JSX.Element => {
  return (
    <div role="status" className={className}>
      <LoadingSvg />
    </div>
  );
};
export default memo(Loading);
