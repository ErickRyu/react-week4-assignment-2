import React from 'react';

import { render, fireEvent } from '@testing-library/jest-dom';

import Form from './Form';

describe('Form', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const handleClickAdd = jest.fn();
  const handleChangeRestaurantName = jest.fn();
  const handleChangeRestaurantType = jest.fn();
  const handleChangeRestaurantLocation = jest.fn();

  const renderInputContainer = (restaurantInfo = { name: '', type: '', location: '' }) => render((
    <Form
      restaurantInfo={restaurantInfo}
      handleClickAdd={handleClickAdd}
      handleChangeRestaurantName={handleChangeRestaurantName}
      handleChangeRestaurantType={handleChangeRestaurantType}
      handleChangeRestaurantLocation={handleChangeRestaurantLocation}
    />
  ));

  it('버튼에 "등록" 문구가 나온다.', () => {
    const { container } = renderInputContainer();

    expect(container).toHaveTextContent('등록');
  });

  it('버튼이 클릭되면 handleClick이 호출된다.', () => {
    const { getDisplayValue } = renderInputContainer();
    const buttonAdd = getDisplayValue('등록');

    expect(handleClickAdd).not.toBeCalled();
    fireEvent.click(buttonAdd);
    expect(handleClickAdd).toBeCalled();
  });

  context('restaurantInfo가 주어지지 않을 때', () => {
    it('placeholder에 "이름" 문구가 나온다.', () => {
      const { container } = renderInputContainer();

      expect(container).toHaveAttribute('placeholder', '이름');
    });

    it('placeholder에 "분류" 문구가 나온다.', () => {
      const { container } = renderInputContainer();

      expect(container).toHaveAttribute('placeholder', '분류');
    });

    it('placeholder에 "주소" 문구가 나온다.', () => {
      const { container } = renderInputContainer();

      expect(container).toHaveAttribute('placeholder', '주소');
    });
  });
});
