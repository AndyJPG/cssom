import React, { useEffect, useState } from 'react'
import ConfigInput from './components/ConfigInput'
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
            console.log(value)
            break
          }
        }
      }
    }
  }

  if (!globalStyleSheet) return null

  return (
    <div>
      <ConfigInput styleSheet={globalStyleSheet} className=".prz-widget-container" cssRuleKey="--primary-color" type="color" />
      <ConfigInput styleSheet={globalStyleSheet} className=".prz-widget-container" cssRuleKey="color" type="color" />
      <button onClick={() => setRefresh((prevState) => !prevState)}>get stylesheet</button>
      {refresh && <p>{Object.values(globalStyleSheet.cssRules).map((rule) => rule.cssText)}</p>}
      <Widget />
    </div>
  )
}

export default App
