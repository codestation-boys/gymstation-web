import { cloneElement, Dispatch, ReactElement, SetStateAction, MouseEvent } from "react"

import styles from './InputRadio.module.scss';

type InputRadioProps = {
  name: string,
  label?: string,
  value: string,
  onSelect: Dispatch<SetStateAction<string>>,
  children: ReactElement[]
}

export function InputRadio({ name, label, value, onSelect, children }: InputRadioProps) {
  function handleInputRadioSelect(event: MouseEvent<HTMLButtonElement>) {
    onSelect(event.currentTarget.name);
  }

  return (
    <>
      {!!label && <label htmlFor={name}>{label}</label>}

      <div id={name} className={styles.inputContainer}>
        {children.map(children => {
          return cloneElement(children, {
            key: children.props.name,
            isSelected: value === children.props.name,
            handleClick: handleInputRadioSelect
          })
        })}
      </div>
    </>
  )
}