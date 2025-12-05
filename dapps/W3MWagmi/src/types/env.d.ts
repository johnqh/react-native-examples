declare module 'react-native-config' {
  export interface NativeConfig {
    ENV_PROJECT_ID: string;
  }

  export const Config: NativeConfig;
  export default Config;
}
