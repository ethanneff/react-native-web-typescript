import React from 'react';
import {Details} from '..';
import renderer from 'react-test-renderer';
import {mockNavigation} from '../../../mocks/Setup';

it('should render correctly', () => {
  const component = renderer.create(<Details />);
  expect(component.toJSON()).toMatchSnapshot();
});

it('navigates back', () => {
  const component = renderer.create(<Details />);
  const button = component.root.findByProps({testID: 'back'});
  button.instance.props.onPress();
  expect(mockNavigation.goBack).toBeCalledTimes(1);
});

it('navigates home', () => {
  const component = renderer.create(<Details />);
  const button = component.root.findByProps({testID: 'home'});
  button.instance.props.onPress();
  expect(mockNavigation.navigate).toBeCalledWith('Home');
});

it('navigates forward', () => {
  const component = renderer.create(<Details />);
  const button = component.root.findByProps({testID: 'again'});
  button.instance.props.onPress();
  expect(mockNavigation.push).toBeCalledWith('Details');
});

it('navigates to beginning', () => {
  const component = renderer.create(<Details />);
  const button = component.root.findByProps({testID: 'first'});
  button.instance.props.onPress();
  expect(mockNavigation.popToTop).toBeCalledTimes(1);
});
