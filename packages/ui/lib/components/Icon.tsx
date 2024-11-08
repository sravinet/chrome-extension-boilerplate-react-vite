import { Icon as IconifyIcon } from '@iconify/react';
import type { ComponentProps } from 'react';
import { cn } from '../utils';

export type IconProps = {
  name: string;
  className?: string;
} & Omit<ComponentProps<typeof IconifyIcon>, 'icon' | 'className'>;

export function Icon({ name, className, ...props }: IconProps) {
  return <IconifyIcon icon={name} className={cn('h-4 w-4', className)} {...props} />;
}
