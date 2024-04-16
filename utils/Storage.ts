/*
 * @Author       : 尚博信_王强 wangqiang03@sunboxsoft.com
 * @Date         : 2024-01-16 14:26:50
 * @LastEditors  : 尚博信_王强 wangqiang03@sunboxsoft.com
 * @LastEditTime : 2024-01-16 14:26:55
 * @FilePath     : /Judgeguest/utils/storage.ts
 * @Description  : 
 * 
 * Copyright (c) 2024 by 尚博信_王强, All Rights Reserved. 
 */

import {MMKV} from 'react-native-mmkv';
import { StateStorage } from 'zustand/middleware';

const Storage = new MMKV();

export const MiddlewareStorage: StateStorage = {
    setItem: (name: string, value: string) => {
       return Storage.set(name, value)
    },
    getItem: (name: string) => {
        const value = Storage.getString(name)
        return value ?? null
    },
    removeItem: (name: string) => {
        return Storage.delete(name)
    }
  }

  export default Storage;