import { render, screen } from '@testing-library/react'
import { useSession } from 'next-auth/react'
import { SignInButton } from '.'

jest.mock('next-auth/react')

describe('SigInButton component', () => {
  it('renders correctly when user is not logged in', () => {
    const useSessionMocked = jest.mocked(useSession)
    useSessionMocked.mockReturnValueOnce([null, false])
    render(
      <SignInButton />    
    )
  
    expect(screen.getByText('Sign in with Github')).toBeInTheDocument()
  })
  it('renders correctly when user is logged in', () => {
    const useSessionMocked = jest.mocked(useSession)
    useSessionMocked.mockReturnValueOnce([
      { user: { name: 'John Doe', email: 'john.doe@example.com'}, expires: 'fake-expires' },
      false
    ])
    render(
      <SignInButton />    
    )
  
    expect(screen.getByText('Sign in with Github')).toBeInTheDocument()
  })
})

