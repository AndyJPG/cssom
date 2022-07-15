import React, { useEffect, useState } from 'react'
import GlobalConfigPanel from './components/GlobalConfigPanel'
import Widget from './components/Widget'

function App() {
  const [globalStyleSheet, setGlobalStyleSheet] = useState<CSSStyleSheet | null>(null)
  const [refresh, setRefresh] = useState(true)

  useEffect(() => {
    getStyleSheet()
  }, [])

  const getStyleSheet = () => {
    if (!globalStyleSheet) {
      for (const value of Object.values(document.styleSheets)) {
        const node = value.ownerNode
        if (node instanceof HTMLElement) {
          if (node.dataset.preezie === 'global') {
            setGlobalStyleSheet(value)
            break
          }
        }
      }
    }
  }

  if (!globalStyleSheet) return null

  return (
    <>
      <div style={{ position: 'absolute', maxWidth: '200px' }}>
        <GlobalConfigPanel globalStyleSheet={globalStyleSheet} />
      </div>
      <div style={{ marginLeft: '220px' }}>
        <Widget />
      </div>
      <button onClick={() => setRefresh((prevState) => !prevState)}>get stylesheet</button>
      {refresh && <p>{Object.values(globalStyleSheet.cssRules).map((rule) => rule.cssText)}</p>}
    </>
  )
}

export default App
