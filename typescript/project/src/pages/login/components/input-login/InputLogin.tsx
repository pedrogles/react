import { forwardRef } from "react";

interface IInputLoginProps {
  id: string;
  label: string;
  type: string;
  value: any;
  onChange: (value: string) => void;
}

export const InputLogin = forwardRef<HTMLInputElement, IInputLoginProps>(
  ({ id, label, type, value, onChange }, ref) => {
    return (
      <>
        <label htmlFor={id}>{label}</label>
        <input
          ref={ref}
          id={id}
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </>
    );
  }
);
