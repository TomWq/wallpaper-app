/*
 * @Author       : 尚博信_王强 wangqiang03@sunboxsoft.com
 * @Date         : 2024-04-16 15:49:10
 * @LastEditors  : 尚博信_王强 wangqiang03@sunboxsoft.com
 * @LastEditTime : 2024-04-16 17:40:32
 * @FilePath     : /wallpaper/store/useTheme.ts
 * @Description  : 
 * 
 * Copyright (c) 2024 by 尚博信_王强, All Rights Reserved. 
 */
import { MiddlewareStorage } from '@/utils/Storage';
import { UnistylesRuntime } from 'react-native-unistyles';
import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import {StatusBar} from 'react-native'
 
type Theme = 'light' | 'dark' ;

interface ThemeState {
    theme: Theme, //主题
    isAutoTheme: boolean, //是否跟随系统
}

interface ThemeActions {
    setTheme: (theme: Theme) => void //设置主题
    setAutoTheme: () => void //跟随系统
}

export const useThemeStore = create<ThemeState & ThemeActions>()(
    persist(
        (set) => ({
            theme: 'light',
            isAutoTheme:false,
            setTheme: (theme) => {
                set({ theme: theme, isAutoTheme: false })
                UnistylesRuntime.setTheme(theme)
            },
            setAutoTheme: () => {
               set(state => ({...state,isAutoTheme: true }))
            }
        }),
        {
            name: 'theme',
            storage: createJSONStorage(() => MiddlewareStorage),
            partialize: (state) => ({ 
                theme: state.theme , 
                isAutoTheme: state.isAutoTheme 
            }),
        }
    ) 
)

/** 
 *   使用示例
 *  const {theme,isAutoTheme,setTheme,setAutoTheme} = useThemeStore()
 *  //设置主题
 *  setTheme('dark') || setTheme('light')
 *  //跟随系统
 *  setAutoTheme()
 *  //获取主题的值
 *  theme
 *  //是否跟随系统
 *  isAutoTheme
 *  */ 
