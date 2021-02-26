import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';

import { Container } from './styles';

// eslint-disable-next-line react/prop-types
function UploadImage({ name, label, smallLabel, Icon, ...rest }) {
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
          {label}
          <small> {smallLabel}</small>
        </label>
      )}

      <label htmlFor="image" className="insert-image">
        +
      </label>
      <input
        ref={inputRef}
        defaultValue={defaultValue}
        type="file"
        id="image"
        {...rest}
      />

      {error && <span style={{ color: '#fff' }}>{error}</span>}
    </Container>
  );
}

export default UploadImage;
