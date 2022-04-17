import { Splash } from './Splash';
import { render, screen } from '../../test-utils/test-utils';

describe('Splash', () => {
  it('renders without crashing', () => {
    const { baseElement } = render(<Splash variant="splash" />);

    expect(baseElement.querySelector('[data-ui-caps="splash"]')).toBeInTheDocument();
  });

  it('should render the text as children when passing a string', () => {
    const LOADING_TEXT = 'Loading...';

    render(<Splash variant="splash">{LOADING_TEXT}</Splash>);

    expect(screen.getByText(LOADING_TEXT)).toBeInTheDocument();
  });

  it('should render a component as children when passing a component', () => {
    const COMPONENT_TEST_ID = 'test-component';

    const Component = () => <div data-testid={COMPONENT_TEST_ID}>Loading...</div>;

    render(
      <Splash variant="splash">
        <Component />
      </Splash>,
    );

    expect(screen.getByTestId(COMPONENT_TEST_ID)).toBeInTheDocument();
  });
});
