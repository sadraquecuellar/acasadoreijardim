import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

import { Container } from './styles';

const animatedComponents = makeAnimated();

// eslint-disable-next-line react/prop-types
function MultiSelect({ name, label, options, Icon, ...rest }) {
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

      <Select
        ref={inputRef}
        name={name}
        defaultValue={defaultValue}
        placeholder="Selecione as opções..."
        {...rest}
        closeMenuOnSelect={false}
        components={animatedComponents}
        isMulti
        options={options}
      />

      {error && <span style={{ color: '#fff' }}>{error}</span>}
    </Container>
  );
}

export default MultiSelect;
