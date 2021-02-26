import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';

import { Container } from './styles';

function TextArea({ name, label, Icon, ...rest }) {
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

      <textarea
        ref={inputRef}
        name={name}
        defaultValue={defaultValue}
        {...rest}
      />

      {error && <span style={{ color: '#fff' }}>{error}</span>}
    </Container>
  );
}

export default TextArea;
