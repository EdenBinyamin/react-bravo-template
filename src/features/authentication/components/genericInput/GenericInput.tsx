/* eslint-disable no-unused-vars */
import { ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';

interface Props {
  value: string;
  type: string;
  name: string;
  setValue: (value: string) => void;
  children: string;
}
const GenericInput = ({ value, type, name, setValue, children }: Props) => {
  const dispatch = useDispatch();
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setValue(e.target.value));
  };
  return (
    <>
      <p>{children}</p>
      <input value={value} type={type} name={name} onChange={onChange} />
    </>
  );
};

export default GenericInput;
