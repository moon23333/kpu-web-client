import './util/baidu'
import './util/system.copyright'

import VXETable from 'vxe-table'
import VXETablePluginElement from 'vxe-table-plugin-element'
import 'vxe-table-plugin-element/dist/style.css'
import 'overlayscrollbars/overlayscrollbars.css'

import FloatingVue from 'floating-vue'
import App from './App.vue'

// 加载 iconify 图标

import errorLog from './util/error.log'
import ui from './ui-provider'
import { downloadAndInstall } from '@/iconify'
import icons from '@/iconify/index.json'

import 'uno.css'

import 'virtual:uno.css'

import pinia from '@/store'
import router from '@/router'

import './permission'
import { i18n, useI18n } from '@/locales'

// 自定义指令
import directive from '@/directive'

// 加载svg图标
import 'virtual:svg-icons-register'
import '@imengyu/vue3-context-menu/lib/vue3-context-menu.css'
import 'floating-vue/dist/style.css'

// 全局样式
import '@/assets/styles/globals.scss'

if (icons.useType === 'offline') {
  for (const info of icons.collections) {
    downloadAndInstall(info)
  }
}
VXETable.setup({
  // 对组件内置的提示语进行国际化翻译
  size: 'medium',
  table: {
    keepSource: true,
    showOverflow: true,
    showHeaderOverflow: true,
    stripe: true,
    border: true,
    rowConfig: {
      keyField: 'id',
      isHover: true,
    },
    columnConfig: {
      resizable: true,
      minWidth: 100,
    },
    checkboxConfig: {
      labelField: '序号',
      reserve: true,
      highlight: true,
      range: true,
      trigger: 'cell',
    },
    sortConfig: {
      remote: true,
      trigger: 'cell',
      showIcon: true,
      orders: ['asc', 'desc', null],
      chronological: false,
      defaultSort: {
        field: 'createdTime',
        order: 'desc',
      },
    },
    filterConfig: {
      remote: true,
    },
  },
  grid: {
    editConfig: {
      trigger: 'manual',
      mode: 'row',
      showStatus: true,
      autoClear: false,
    },
    toolbarConfig: {
      refresh: true,
      zoom: true,
      custom: true,
    },
    formConfig: {
      titleWidth: 100,
      titleAlign: 'right',
      titleOverflow: 'tooltip',
    },
    pagerConfig: {
      pageSize: 10,
      pageSizes: [5, 10, 15, 20, 50, 100, 200, 500, 1e3],
    },
    proxyConfig: {
      autoLoad: false,
      seq: true,
      sort: true,
      filter: true,
      form: true,
      message: false,
      props: {
        result: 'records',
        total: 'total',
        message: 'msg',
      },
    },
  },
  pager: {
    pageSize: 10,
    pageSizes: [10, 20, 50, 100, 500, 1e3, 5e3],
  },
  // eslint-disable-next-line ts/ban-ts-comment
  // @ts-expect-error
  i18n: (key: any, ...args: any) => i18n.global.t(key, args),
})
async function bootstrap() {
  const app = createApp(App)
  VXETable.use(VXETablePluginElement)

  // app.use(VWave)

  app.use(pinia)
  app.use(router)
  await useI18n(app)
  app.use(directive)
  errorLog(app)

  app.use(FloatingVue)
  app.use(ui)
  app.use(VXETable)
  app.mount('#app')
}
bootstrap()
