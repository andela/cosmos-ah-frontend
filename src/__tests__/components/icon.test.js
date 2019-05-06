import React from 'react';
import 'jest-dom/extend-expect';
import { render, cleanup } from 'react-testing-library';
import DefaultLink from '../../components/shared/Links/DefaultLink';

afterEach(cleanup);

test('should render <DefaultLink /> Component', () => {
		const defaultLink = render( <DefaultLink /> );
		const { asFragment, getByTestId, getByText } = render(<DefaultLink className="test" children="Andela Simulations"/>);
		expect(getByText('Andela Simulations')).toBeInTheDocument();
		expect(asFragment).toMatchSnapshot();
		expect(defaultLink).toBeTruthy();
});