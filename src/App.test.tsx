import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('Equal sign', () => {
  render(<App />);
  const linkElement = screen.getByText('=');
  expect(linkElement).toBeInTheDocument();
});

test('multiply sign', () => {
  render(<App />);
  const linkElement = screen.getByText('*');
  expect(linkElement).toBeInTheDocument();
});

test('minus sign', () => {
  render(<App />);
  const linkElement = screen.getByText('-');
  expect(linkElement).toBeInTheDocument();
});
test('plus sign', () => {
  render(<App />);
  const linkElement = screen.getByText('+');
  expect(linkElement).toBeInTheDocument();
});

test('power sign', () => {
  render(<App />);
  const linkElement = screen.getByText('^');
  expect(linkElement).toBeInTheDocument();
});

test('delete sign', () => {
  render(<App />);
  const linkElement = screen.getByText('<');
  expect(linkElement).toBeInTheDocument();
});

test('reset button', () => {
  render(<App />);
  const linkElement = screen.getByText('RESET');
  expect(linkElement).toBeInTheDocument();
});



test('Number one is Available', () => {
  render(<App />);
  const linkElement = screen.getByText('1');
  expect(linkElement).toBeInTheDocument();
});

test('Number two is Available', () => {
  render(<App />);
  const linkElement = screen.getByText('2');
  expect(linkElement).toBeInTheDocument();
});

test('Number three is Available', () => {
  render(<App />);
  const linkElement = screen.getByText('3');
  expect(linkElement).toBeInTheDocument();
});
test('Number four is Available', () => {
  render(<App />);
  const linkElement = screen.getByText('4');
  expect(linkElement).toBeInTheDocument();
});
test('Number five is Available', () => {
  render(<App />);
  const linkElement = screen.getByText('5');
  expect(linkElement).toBeInTheDocument();
});
test('Number six is Available', () => {
  render(<App />);
  const linkElement = screen.getByText('6');
  expect(linkElement).toBeInTheDocument();
});
test('Number seven is Available', () => {
  render(<App />);
  const linkElement = screen.getByText('7');
  expect(linkElement).toBeInTheDocument();
});

test('Number eight is Available', () => {
  render(<App />);
  const linkElement = screen.getByText('8');
  expect(linkElement).toBeInTheDocument();
});
test('Number nine is Available', () => {
  render(<App />);
  const linkElement = screen.getByText('9');
  expect(linkElement).toBeInTheDocument();
});
test('Number zero is Available', () => {
  render(<App />);
  const linkElement = screen.getByText('0');
  expect(linkElement).toBeInTheDocument();
});