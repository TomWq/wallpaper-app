import React ,{ useCallback, useEffect, useState } from 'react'
import Animated, { Easing,useSharedValue, withTiming,useAnimatedStyle, runOnJS,} from 'react-native-reanimated'
import * as SplashScreen from "expo-splash-screen";
import { ImageSourcePropType, useColorScheme, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { useThemeStore } from '@/store/useTheme';
import { UnistylesRuntime } from 'react-native-unistyles';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

type Props = {
    children: React.ReactNode //渲染的内容
    image?: ImageSourcePropType  //启动图
    showLoadingAnimation?: boolean  //是否加载动画
    longTasks?: (() => Promise<void>)[]  //耗时任务的数组
}

SplashScreen.preventAutoHideAsync();

export default function AnimatedSplashLoader({
    children,
    image,
    showLoadingAnimation = true,
    longTasks
}: Props) {

    const [loaded, error] = useFonts({
        SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
        ...FontAwesome.font,
      });
    const [isAppReady, setAppReady] = useState(false);
    const [isSplashAnimationComplete, setAnimationComplete] = useState(showLoadingAnimation);
    const splashOpacity = useSharedValue(1);
    const splasScale = useSharedValue(1);
    const {theme,isAutoTheme,setTheme} = useThemeStore()
    const colorScheme = useColorScheme();

    useEffect(()=>{
        async function prepare() {
            try {
              //进行一些耗时的初始化任务
              await Promise.all([longTasks?.map((task) => task())]);
            } catch (e) {
              console.warn(e);
            } finally {
              // Tell the application to render
              setAppReady(true);
              
            }
        }
        prepare()
    },[])

    useEffect(() => {
       
        splashOpacity.value = withTiming(0, {
            duration: 1000,
            easing: Easing.ease,
        },(finished)=>{
            if(finished){ 
                runOnJS(setAnimationComplete)(false)
            }
        })
        splasScale.value = withTiming(1.5, {
            duration: 1000,
            easing: Easing.ease,
        })

    },[isAppReady])

  
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

      useEffect(() => {
        if (error) throw error;
    }, [error]);

    const animatedStyle = useAnimatedStyle(() => {
        return {
            opacity: splashOpacity.value,
            transform: [{scale: splasScale.value}],
            width: '100%',
            height: '100%',
            resizeMode: 'contain',
        }
    })  

    const onLayoutRootView = useCallback(async () => {
        if (isAppReady && loaded) {
            await SplashScreen.hideAsync();
        }
    },[isAppReady,loaded])


    
    if (!isAppReady) {
        return null;
    }

    return (
         <View style={{flex:1}}>
              {isAppReady && 
              <ThemeProvider value={theme === 'light'? DefaultTheme: DarkTheme}>
                    {children}
              </ThemeProvider>
             }
              {isSplashAnimationComplete && (
                <Animated.Image
                  source={image}
                  onLoadEnd={onLayoutRootView}
                  style={animatedStyle}
                  fadeDuration={0}
                />
              )}
              <StatusBar style={theme === 'light' ? 'dark' : 'light'} animated/>
        </View>
    )

}

