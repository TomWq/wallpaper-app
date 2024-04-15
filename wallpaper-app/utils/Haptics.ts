/*
 * @Author       : 尚博信_王强 wangqiang03@sunboxsoft.com
 * @Date         : 2024-04-12 10:05:56
 * @LastEditors  : 尚博信_王强 wangqiang03@sunboxsoft.com
 * @LastEditTime : 2024-04-12 10:16:35
 * @FilePath     : /xx-movie/utils/Haptics.ts
 * @Description  : 因为web没有haptics,所以需要单独导出处理
 * 
 * Copyright (c) 2024 by 尚博信_王强, All Rights Reserved. 
 */
import * as Haptics from "expo-haptics";
import { Platform } from "react-native";

type HapticType = 'Light' | 'Medium' | 'Heavy' | 'success' | 'error' | 'warning';

export const HapticsUtil = {
    triggerHaptic: (type: HapticType) => {
        if (Platform.OS !== 'web') {
            switch (type) {
                case 'Medium':
                    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
                    break;
                case 'Light':
                    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
                    break;
                case 'Heavy':
                    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
                    break;
                case 'success':
                    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
                    break;
                case 'error':
                    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
                    break;
                case 'warning':
                    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning);
                    break;
                default:
                    break;
            }
        }
    }
};
