import '@testing-library/jest-dom/extend-expect'
// NOTE: jest-dom adds handy assertions to Jest and is recommended, but not required

import React from 'react'
import {render, fireEvent} from '@testing-library/react'

test('Testing!', () => {
  const testName = 'Luke Skywalker'
  const {queryByText, getByLabelText, getByText} = render(
    <h1>{testName}</h1>,
  )

  expect(getByText(testName)).toBeInTheDocument();



})