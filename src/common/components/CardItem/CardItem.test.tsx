import { fireEvent, render, screen } from '@testing-library/react';
import CardItem from './CardItem';
import '@testing-library/jest-dom';

jest.mock('@nextui-org/react', () => ({
  Button: ({ children, ...props }: any) => (
    <button {...props}>{children}</button>
  ),
  Image: ({ alt, src, isLoading, ...props }: any) => (
    <img alt={alt} src={src} data-loading={isLoading} {...props} />
  ),
}));

jest.mock('@iconify/react', () => ({
  Icon: ({ icon, ...props }: any) => <span {...props} data-icon={icon}></span>,
}));

jest.mock('@/utils/cn', () => ({
  cn: (...classes: string[]) => classes.filter(Boolean).join(' '),
}));

describe('CardItem', () => {
  const placeItemProps = {
    name: 'Test Place',
    price: 100,
    rating: 4.5,
    description: 'A wonderful place to visit',
    imageSrc: '/test-image.jpg',
    isLoading: false,
    removeWrapper: false,
  };
  it('render without errors', () => {
    render(<CardItem id={''} href={''} {...placeItemProps} />);

    expect(screen.getByText('Test Place')).toBeInTheDocument();
    expect(screen.getByText('$100')).toBeInTheDocument();
    expect(screen.getByText('4.5')).toBeInTheDocument();
    expect(screen.getByText('A wonderful place to visit')).toBeInTheDocument();
  });

  it('toggles like state', () => {
    render(<CardItem id={''} href={''} {...placeItemProps} />);
    const likeButton = screen.getByRole('button');
    const icon = screen.getByText('solar:heart-bold');

    // check initial state
    expect(icon).not.toHaveClass('text-danger-400');

    // check to like
    fireEvent.click(likeButton);
    expect(icon).toHaveClass('text-danger-400');
  });
});
