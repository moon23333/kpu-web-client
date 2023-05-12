import api from '@/api'

// 前缀 变量
const prefix = '/menu'
export default {
  // 后端获取路由数据
  list: <T>() => api.get<T>({
    url: `${prefix}/list`,
    // noLoading: true,
    baseURL: '/mock/',
  }),
  // // 基于文件系统路由模式下，后端获取导航菜单数据
  detail: <T> (id: string) => api.get<T>({
    url: `${prefix}/detail`,
    params: {
      id,
    },
    baseURL: '/mock/',
  }),
  create: <T> (data: any) => api.post<T>({
    url: `${prefix}/create`,
    data,
    baseURL: '/mock/',
  }),
  edit: <T> (data: any) => api.post<T>({
    url: `${prefix}/edit`,
    data,
    baseURL: '/mock/',
  }),
  delete: <T> (id: string) => api.post<T>({
    url: `${prefix}/delete`,
    data: {
      id,
    },
    baseURL: '/mock/',
  }),

}
