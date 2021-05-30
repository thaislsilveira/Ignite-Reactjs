import {
  render,
  screen,
  waitForElementToBeRemoved
} from '@testing-library/react'
import { Async } from '.'

test('it renders correctly', async () => {
  render(<Async />)

  expect(screen.getByText('Hello World')).toBeInTheDocument()

  // espera alguma coisa acontecer
  // await waitFor(() => {
  //   return expect(screen.getByText('Button')).toBeInTheDocument()
  // })

  await waitForElementToBeRemoved(screen.queryByText('Button'))
})
