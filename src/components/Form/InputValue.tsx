import { MouseEvent } from 'react';
import sytles from './InputRadio.module.scss';

type InputValueProps = {
  name: string,
  children: string,
  isSelected?: boolean,
  handleClick?: (event: MouseEvent<HTMLButtonElement>) => void,
} & JSX.IntrinsicElements['button']

export function InputValue(
  { name, children, isSelected = false, handleClick, ...rest }: InputValueProps) {
  return (
    <button
      type="button"
      name={name}
      className={isSelected ? sytles.selected : ''}
      onClick={handleClick}
      {...rest}
    >
      {children}
    </button>
  )
}