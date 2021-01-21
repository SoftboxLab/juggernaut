import { render } from '@testing-library/react';
import { Container } from '../styles'
import Loading from '..'

describe('[components] Loading', () => {
  it('should render', () => {
    const { getByRole } = render(<Loading />);

    expect(getByRole('progressbar')).toBeVisible()
  })

  it('should render container with width 100%', () => {
    const { container } = render(<Container />)

    expect(container.firstChild).toHaveStyleRule('width', '100%')
  })
})
