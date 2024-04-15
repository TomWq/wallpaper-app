/*
 * @Author       : 尚博信_王强 wangqiang03@sunboxsoft.com
 * @Date         : 2024-04-08 15:14:05
 * @LastEditors  : 尚博信_王强 wangqiang03@sunboxsoft.com
 * @LastEditTime : 2024-04-12 15:20:34
 * @FilePath     : /xx-movie/theme.ts
 * @Description  : 主题配色
 * 
 * Copyright (c) 2024 by 尚博信_王强, All Rights Reserved. 
 */

import { DarkTheme, DefaultTheme } from '@react-navigation/native';

export const lightTheme = {
    dark:false,
    colors: {
      accent: 'pink',
      ...DefaultTheme.colors,
      Orange: '#FF5524',
      White: '#FFFFFF',
      Black: '#000000',
      tint:'light'
    },
    margins: {
      sm: 2,
      md: 4,
      lg: 8,
      xl: 12
    }
  } as const
 
  export const darkTheme = {
    dark:true,
    colors: {
      accent: 'pink',
      ...DarkTheme.colors,
      Orange: '#FF5524',
      White: '#FFFFFF',
      Black: '#000000',
      tint:'dark'
    },
    margins: {
      sm: 2,
      md: 4,
      lg: 8,
      xl: 12
    }
  } as const