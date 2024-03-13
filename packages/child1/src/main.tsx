import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { renderWithQiankun, qiankunWindow, QiankunProps} from 'vite-plugin-qiankun/dist/helper'


const initQianKun = () => {
  renderWithQiankun({
    bootstrap() { },
    mount(props: QiankunProps) {
      render(props.container)

      props.onGlobalStateChange((res) => {
        console.log(res.count)
      })
    },
    update: () => {},
    unmount() { },
  })
}

function render(container?: HTMLElement) {
  ReactDOM.createRoot(container || document.getElementById('root')!).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )

}

// 判断当前应用是否在主应用中
qiankunWindow.__POWERED_BY_QIANKUN__ ? initQianKun() : render()
