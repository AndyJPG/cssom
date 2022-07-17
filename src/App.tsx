import React, { useEffect, useState } from 'react'
import ComponentConfigPanel from './components/ComponentConfigPanel'
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
      <div style={{ display: 'flex' }}>
        <div style={{ width: '30%' }}>
          <h4>Global Config</h4>
          <GlobalConfigPanel globalStyleSheet={globalStyleSheet} />
          <h4>Component Config</h4>
          <ComponentConfigPanel globalStyleSheet={globalStyleSheet} />
        </div>
        <Widget />
      </div>
      <button onClick={() => setRefresh((prevState) => !prevState)}>get stylesheet</button>
      {refresh && (
        <>
          {Object.values(globalStyleSheet.cssRules).map((rule) => (
            <pre>{rule.cssText}</pre>
          ))}
        </>
      )}
    </>
  )
}

export default App
