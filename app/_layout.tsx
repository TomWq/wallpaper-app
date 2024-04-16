import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import '@/unistyles';
import { useThemeStore } from '@/store/useTheme';
import Storage from '@/utils/Storage';
import { UnistylesRuntime } from 'react-native-unistyles';
import { useColorScheme } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();



export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });


  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {

  const {theme,isAutoTheme,setTheme} = useThemeStore()
  const colorScheme = useColorScheme();

  useEffect(()=>{
    if(isAutoTheme){
      if(colorScheme ==='dark'){
        setTheme('dark')
      }else{
        setTheme('light')
      }
    }else{
      UnistylesRuntime.setTheme(theme)
    }

  },[theme,colorScheme])

  return (
    <ThemeProvider value={theme === 'light'? DefaultTheme: DarkTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
      </Stack>
       <StatusBar style={theme === 'light' ? 'dark' : 'light'} animated/>
    </ThemeProvider>
  );
}
