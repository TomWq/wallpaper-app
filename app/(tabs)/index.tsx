import { Button, StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { Stack,Box ,Columns, Column,Grid,Rows,Row,Tiles,useSpacingHelpers} from '@grapp/stacks';

import {Screen} from '@/components/Screen';
import { UnistylesRuntime } from 'react-native-unistyles';
import { useThemeStore } from '@/store/useTheme';

export default function TabOneScreen() {

   const {theme,setTheme,setAutoTheme} = useThemeStore()

  return (
        
      <Screen space={4} paddingX={4} topInset={4}>
         <Screen.Content flex={'content'}>
            <Button title='切换主题' onPress={()=>{
               if(theme === 'light'){
                setTheme('dark')
               }else{
                setTheme('light')
               }
            }}/>
            <Button title='跟随系统' onPress={()=>{
              setAutoTheme()
            }}/>
        </Screen.Content>
      </Screen>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    width:100
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
