import { render, screen } from '@testing-library/react'
import { Layout } from './index'

test('should render with hello world', () => {
  render(
    <Layout>
      <span>Hello World!</span>
    </Layout>
  )

  expect(screen.getByText(/hello world!/i)).toBeInTheDocument()
})
