/*
 * @Author       : 尚博信_王强 wangqiang03@sunboxsoft.com
 * @Date         : 1985-10-26 16:15:00
 * @LastEditors  : 尚博信_王强 wangqiang03@sunboxsoft.com
 * @LastEditTime : 2024-04-17 17:08:29
 * @FilePath     : /wallpaper/app/(tabs)/_layout.tsx
 * @Description  : 
 * 
 * Copyright (c) 2024 by 尚博信_王强, All Rights Reserved. 
 */
import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable } from 'react-native';
import CommonConstants from '@/constants/CommonConstants';


// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  

  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: CommonConstants.TAB_ONE,
          tabBarIcon: ({ color }) => <TabBarIcon name="photo" color={color} />,
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: CommonConstants.TAB_TWO,
          tabBarIcon: ({ color }) => <TabBarIcon name="film" color={color} />,
        }}
      />
      <Tabs.Screen
        name="three"
        options={{
          title: CommonConstants.TAB_THREE,
          tabBarIcon: ({ color }) => <TabBarIcon name="th-large" color={color} />,
        }}
      />
    </Tabs>
  );
}
