import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from '../src/components/Button';

describe('Button', () => {
  it('renders children', () => {
    render(<Button>提交</Button>);
    expect(screen.getByRole('button', { name: '提交' })).toBeInTheDocument();
  });

  it('handles click events', () => {
    const onClick = jest.fn();
    render(<Button onClick={onClick}>点击</Button>);
    fireEvent.click(screen.getByRole('button', { name: '点击' }));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('does not handle clicks when disabled', () => {
    const onClick = jest.fn();
    render(<Button disabled onClick={onClick}>禁用</Button>);
    const button = screen.getByRole('button', { name: '禁用' });
    expect(button).toBeDisabled();
    fireEvent.click(button);
    expect(onClick).not.toHaveBeenCalled();
  });
});
