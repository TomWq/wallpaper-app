/*
 * @Author       : 尚博信_王强 wangqiang03@sunboxsoft.com
 * @Date         : 2024-04-08 15:14:32
 * @LastEditors  : 尚博信_王强 wangqiang03@sunboxsoft.com
 * @LastEditTime : 2024-04-16 16:37:54
 * @FilePath     : /wallpaper/unistyles.ts
 * @Description  : 主题控制器
 * 
 * Copyright (c) 2024 by 尚博信_王强, All Rights Reserved. 
 */
import { UnistylesRegistry, UnistylesRuntime } from 'react-native-unistyles'
import { breakpoints } from './breakpoints'
import { darkTheme, lightTheme } from './theme'
import '@grapp/stacks'

interface AppThemes{
    light: typeof lightTheme,
    dark: typeof darkTheme,
    [key: string]: any
}

type AppBreakpoints = typeof breakpoints

declare module 'react-native-unistyles' {
    export interface UnistylesThemes extends AppThemes{ }
    export interface UnistylesBreakpoints extends AppBreakpoints { }
}

declare module '@grapp/stacks' {
    export interface StacksBreakpoints extends AppBreakpoints {}
}


UnistylesRegistry
    .addThemes({
        light: lightTheme,
        dark: darkTheme
    })
    .addConfig({
        adaptiveThemes: false,
        initialTheme: 'light',
    })
    .addBreakpoints(breakpoints)

