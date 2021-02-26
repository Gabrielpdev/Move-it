import React, {
  InputHTMLAttributes,
  useRef,
  useState,
  useCallback,
} from 'react';

import { FiArrowRight, FiLoader } from 'react-icons/fi';
import { Container } from '../styles/components/Input';

const Input: React.FC<InputHTMLAttributes<HTMLInputElement>> = ({
  ...rest
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [isLoading, setIsLoading] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!inputRef.current?.value);
  }, []);

  return (
    <Container
      isFilled={isFilled}
      isFocused={isFocused}
      isLoading={isLoading}
    >
      <input
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        ref={inputRef}
        {...rest}
      />
      <button type="submit" onClick={() => {isFilled && setIsLoading(true)}}>
        {isLoading ? <FiLoader/> : <FiArrowRight/>}
      </button>
    </Container>
  );
};

export default Input;