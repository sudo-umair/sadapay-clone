import {
  TextInputProps,
  StyleProp,
  TextInput,
  ViewStyle,
  PressableAndroidRippleConfig,
} from 'react-native';

export interface ButtonProps {
  onPress: () => void;
  android_ripple?: PressableAndroidRippleConfig;
  title: string;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
  buttonStyle?: StyleProp<ViewStyle>;
  textStyle?: object;
  children?: React.ReactNode;
  isIcon?: boolean;
}

export interface NumberInputProps {
  innerRef?: React.RefObject<TextInput>;
  previousRef?: React.RefObject<TextInput>;
  nextRef?: React.RefObject<TextInput>;
  value: string;
  index: number;
  onChangeText: (text: string, index: number) => void;
  onSubmitEditing?: () => void;
  autoFocus?: boolean;
  style?: StyleProp<TextInputProps['style']>;
  keyboardType?: TextInputProps['keyboardType'];
  maxLength?: number;
  secureTextEntry?: boolean;
}

export interface KeyPadProps {
  onPress: (text: string) => void;
  style?: StyleProp<ViewStyle>;
}
