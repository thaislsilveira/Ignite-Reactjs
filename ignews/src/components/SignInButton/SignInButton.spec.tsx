import { screen, render } from '@testing-library/react'
import { mocked } from 'ts-jest/utils'
import { useSession } from 'next-auth/client'
import { SignInButton } from '.'

jest.mock('next-auth/client')

describe('SignInButton component', () => {
  it('renders correctly when usen is not authenticated', () => {
    const useSessionMocked = mocked(useSession)

    useSessionMocked.mockReturnValueOnce([null, false])

    render(<SignInButton />)

    expect(screen.getByText('Sign in with GitHub')).toBeInTheDocument()
  })

  it('renders correctly when usen is not authenticated', () => {
    const useSessionMocked = mocked(useSession)

    useSessionMocked.mockReturnValue([
      {
        user: {
          name: 'John Doe',
          email: 'john.doe@example.com'
        },
        expires: 'fake-expires'
      },
      false
    ])

    render(<SignInButton />)

    expect(screen.getByText('John Doe')).toBeInTheDocument()
  })
})
