import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';

import { Container } from './styles';

// eslint-disable-next-line react/prop-types
function Input({ name, label, Icon, small, ...rest }) {
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

      <input
        className={small}
        ref={inputRef}
        name={name}
        defaultValue={defaultValue}
        {...rest}
      />

      {error && <span style={{ color: '#fff' }}>{error}</span>}
    </Container>
  );
}

export default Input;
