/*
 * @Author       : 尚博信_王强 wangqiang03@sunboxsoft.com
 * @Date         : 1985-10-26 16:15:00
 * @LastEditors  : 尚博信_王强 wangqiang03@sunboxsoft.com
 * @LastEditTime : 2024-04-17 16:58:52
 * @FilePath     : /wallpaper/app/_layout.tsx
 * @Description  : 
 * 
 * Copyright (c) 2024 by 尚博信_王强, All Rights Reserved. 
 */
import { Stack } from 'expo-router';
import '@/unistyles';
import AnimatedSplashLoader from '@/components/AnimatedSplashComponent';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};


export default function RootLayout() {

  return <RootLayoutNav />;
}

function RootLayoutNav() {

  return (
    <AnimatedSplashLoader image={require('@/assets/images/splash.png')}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
        </Stack>
    </AnimatedSplashLoader>
  );
}
