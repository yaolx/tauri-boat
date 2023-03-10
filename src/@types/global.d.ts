interface Categories {
  name: string
  children: Menu[]
}

interface Menu {
  title: string
  id: string
  url?: string
  icon: string
}

interface Window {
  electron: ElectronAPI
  xElectron: {
    mainView: {
      onToolbar: (val: T) => void
      onPlay: (val: T) => void
      onSendNotice: (val: T) => void
    }
    webView: {
      openInPopup({ url, ...rest }: { [x: string]: string; url: string }): void
      onNewPopup: (func: noop) => void
    }
    appUpdater: {
      checkUpdate: () => void
      quitAndInstall: () => void
      updateProgress: (func: T) => void
      getAppVersion: () => Promise<T>
    }
  }
}
