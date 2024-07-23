import { forwardRef } from "react";

interface IInputLoginProps {
  id: string;
  label: string;
  type: string;
  value: any;
  onChange: (value: string) => void;
  onPressEnter?: () => void;
}

export const InputLogin = forwardRef<HTMLInputElement, IInputLoginProps>(
  ({ id, label, type, value, onChange, onPressEnter }, ref) => {
    return (
      <>
        <label htmlFor={id}>{label}</label>
        <input
          ref={ref}
          id={id}
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={e => e.key === 'Enter' ? onPressEnter && onPressEnter() : undefined}
        />
      </>
    );
  }
);
