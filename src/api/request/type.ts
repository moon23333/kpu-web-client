import type { AxiosError, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios'

export interface RequestInterceptors<T = AxiosResponse> {

  requestInterceptor?: (config: InternalAxiosRequestConfig) => InternalAxiosRequestConfig

  requestInterceptorCatch?: (error: AxiosError) => any

  responseInterceptor?: (res: any) => any

  responseInterceptorCatch?: (error: AxiosError) => any

}

export interface RequestConfig<T = AxiosResponse> extends AxiosRequestConfig {

  interceptors?: RequestInterceptors<T>
  noLoading?: boolean

}
// export interface VInternalAxiosRequestConfig<D = any> extends InternalAxiosRequestConfig<D> {
//   showLoading?: boolean
// }

declare module 'axios' {
  interface InternalAxiosRequestConfig {
    noLoading?: boolean
  }
}
