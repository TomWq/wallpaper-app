/*
 * @Author       : 尚博信_王强 wangqiang03@sunboxsoft.com
 * @Date         : 2024-04-08 15:14:32
 * @LastEditors  : 尚博信_王强 wangqiang03@sunboxsoft.com
 * @LastEditTime : 2024-04-12 18:14:32
 * @FilePath     : /xx-movie/unistyles.ts
 * @Description  : 主题控制器
 * 
 * Copyright (c) 2024 by 尚博信_王强, All Rights Reserved. 
 */
import { UnistylesRegistry, UnistylesRuntime } from 'react-native-unistyles'
import { breakpoints } from './breakpoints'
import { darkTheme, lightTheme } from './theme'
import { Dimensions, Platform } from 'react-native'

type AppThemes = {
    light: typeof lightTheme,
    dark: typeof darkTheme
}

type AppBreakpoints = typeof breakpoints

declare module 'react-native-unistyles' {
    export interface UnistylesThemes extends AppThemes { }
    export interface UnistylesBreakpoints extends AppBreakpoints { }
}

//屏幕宽度
const ScreenWidth = UnistylesRuntime.screen.width
//屏幕高度
const ScreenHeight = Dimensions.get('window').height
//状态栏高度
const StatuBarHeight = UnistylesRuntime.statusBar.height
//安全区域的高度
const InsetsTop = Platform.OS === 'ios'?UnistylesRuntime.insets.top : StatuBarHeight
const InsetsBottom = UnistylesRuntime.insets.bottom


UnistylesRegistry
    .addThemes({
        light: lightTheme,
        dark: darkTheme
    })
    .addConfig({
        adaptiveThemes: true,
        initialTheme: 'light',
    })
    .addBreakpoints(breakpoints)


export {
    ScreenWidth,
    ScreenHeight,
    StatuBarHeight,
    InsetsTop,
    InsetsBottom
}