type FnType = (
  ref: React.RefObject<HTMLTextAreaElement>,
  value: string,
  setValue: (s: string) => void,
  setPosition: (n: number) => void
) => [(s: string) => void];

const doubles: { [key: string]: string } = {
  '{': '}',
  '(': ')',
  '[': ']',
  '"': '"',
  "'": "'",
};

export const useDoubleKey: FnType = (ref, value, setValue, setCaretPosition) => {
  const doubleKey = (keyValue: string) => {
    const double = keyValue === 'Tab' ? '  ' : keyValue + doubles[keyValue];

    if (ref.current) {
      const { selectionStart, selectionEnd } = ref.current as HTMLTextAreaElement;
      setValue(value.substring(0, selectionStart) + double + value.substring(selectionEnd));
      setCaretPosition(selectionStart + (keyValue === 'Tab' ? 2 : 1));
    }
  };
  return [doubleKey];
};
