// stories/MyButton.stories.tsx

import {ComponentMeta, StoryObj} from '@storybook/react';

import {ButtonProps, MyButton} from './Button';

export default {
  title: 'components/MyButton',
  argTypes: {onPress: {action: 'pressed'}},
  component: MyButton,
};

export const Basic: StoryObj<ButtonProps> = {
  args: {
    text: 'Hello World testing!!',
    color: 'purple',
  },
};
