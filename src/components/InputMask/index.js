import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';
import ReactInputMask from 'react-input-mask';

import { Container } from './styles';

function Input({ name, label, Icon, ...rest }) {
  const inputRef = useRef(null);

  const { fieldName, defaultValue = '', registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);
  return (
    <Container>
      {label && (
        <label htmlFor={fieldName}>
          {Icon ? <Icon /> : ''}
          {label}
        </label>
      )}

      <ReactInputMask
        ref={inputRef}
        name={name}
        defaultValue={defaultValue}
        {...rest}
      />

      {error && <span style={{ color: '#f00' }}>{error}</span>}
    </Container>
  );
}

export default Input;
