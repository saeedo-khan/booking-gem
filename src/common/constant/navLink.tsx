'use client';

import { Icon } from '@iconify/react';
import type { IconProps } from '@iconify/react';

type SocialIconProps = Omit<IconProps, 'icon'>;

export const navLinks = [
  {
    name: 'Home',
    href: '#',
  },
  {
    name: 'About',
    href: '#',
  },
  {
    name: 'Services',
    href: '#',
  },
  {
    name: 'Projects',
    href: '#',
  },
  {
    name: 'Contact',
    href: '#',
  },
  {
    name: 'Blog',
    href: '#',
  },
  {
    name: 'Careers',
    href: '#',
  },
];

export const socialItems = [
  {
    name: 'Facebook',
    href: '#',
    icon: (props: SocialIconProps) => (
      <Icon {...props} icon='fontisto:facebook' />
    ),
  },
  {
    name: 'Instagram',
    href: '#',
    icon: (props: SocialIconProps) => (
      <Icon {...props} icon='fontisto:instagram' />
    ),
  },
  {
    name: 'Twitter',
    href: '#',
    icon: (props: SocialIconProps) => (
      <Icon {...props} icon='fontisto:twitter' />
    ),
  },
  {
    name: 'GitHub',
    href: '#',
    icon: (props: SocialIconProps) => (
      <Icon {...props} icon='fontisto:github' />
    ),
  },
  {
    name: 'YouTube',
    href: '#',
    icon: (props: SocialIconProps) => (
      <Icon {...props} icon='fontisto:youtube' />
    ),
  },
];
