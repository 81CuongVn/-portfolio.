declare module 'react-typical' {
  import type React from 'react';

  interface Props {
    steps: Array<string | number | React.ReactNode>;
    loop?: number;
    wrapper?: string | React.FC | React.Component;
  }

  export default class Typical extends React.Component<Props> {}
}
