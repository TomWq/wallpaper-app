/*
 * @Author       : 尚博信_王强 wangqiang03@sunboxsoft.com
 * @Date         : 2024-04-11 11:56:55
 * @LastEditors  : 尚博信_王强 wangqiang03@sunboxsoft.com
 * @LastEditTime : 2024-04-17 10:56:30
 * @FilePath     : /wallpaper/utils/HttpUtil.ts
 * @Description  : 
 * 
 * Copyright (c) 2024 by 尚博信_王强, All Rights Reserved. 
 */
import { ApiResponse, create } from 'apisauce'
import { router } from 'expo-router'


const BASE_URL = process.env.EXPO_PUBLIC_API_URL
const API_KEY = process.env.EXPO_PUBLIC_API_KEY


const BaseApi = create({
    baseURL:BASE_URL,
    timeout: 5000,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
})



BaseApi.addRequestTransform((request) => {

    if (request.headers) {
        //request.headers['Authorization'] = 'Bearer ' + API_TOKEN
        //添加一个请求的公共参数
        request.params = {
            ...(request.params || {}),
            "key":API_KEY
        }

    }
    return request
})

BaseApi.addResponseTransform((response) => {

    if(!response.ok){
        //请求超时
        if(response.problem === 'TIMEOUT_ERROR'){
            //超时处理
            console.log('请求超时',response)
        }
    }
    return response
})

export default BaseApi