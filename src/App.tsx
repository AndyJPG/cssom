import React, { useEffect, useState } from 'react'
import ConfigInput from './components/ConfigInput'
import DropDownInput from './components/DropDownInput'
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
        <div style={{ width: '20%' }}>
          <div>
            <b>container</b> <br />
            <ConfigInput styleSheet={globalStyleSheet} className=".prz-widget-container" cssRuleKey="--primary-color" type="color" />
            <ConfigInput styleSheet={globalStyleSheet} className=".prz-widget-container" cssRuleKey="color" type="color" />
            <ConfigInput styleSheet={globalStyleSheet} className=".prz-widget-container" cssRuleKey="background-color" type="color" />
            <DropDownInput styleSheet={globalStyleSheet} className=".prz-widget-container" cssRuleKey="font-family" options={['Roboto', 'Montserrat']} />
          </div>
          <div>
            <b>h1</b> <br />
            <ConfigInput styleSheet={globalStyleSheet} className=".prz-widget-h1" cssRuleKey="color" type="color" />
            <ConfigInput styleSheet={globalStyleSheet} className=".prz-widget-h1" cssRuleKey="background-color" type="color" />
            <DropDownInput styleSheet={globalStyleSheet} className=".prz-widget-h1" cssRuleKey="font-family" options={['Roboto', 'Montserrat']} />
            <DropDownInput styleSheet={globalStyleSheet} className=".prz-widget-h1" cssRuleKey="font-weight" options={['200', '400', '500', '800']} />
            <ConfigInput styleSheet={globalStyleSheet} className=".prz-widget-h1" cssRuleKey="border-width" type="number" />
            <DropDownInput styleSheet={globalStyleSheet} className=".prz-widget-h1" cssRuleKey="border-style" options={['Solid', 'Dashed']} />
            <ConfigInput styleSheet={globalStyleSheet} className=".prz-widget-h1" cssRuleKey="border-color" type="color" />
          </div>
          <div>
            <b>logo</b> <br />
            <DropDownInput styleSheet={globalStyleSheet} className=".prz-widget-logo" cssRuleKey="color" options={['white', 'black']} />
          </div>
        </div>
        <Widget />
      </div>
      <button onClick={() => setRefresh((prevState) => !prevState)}>get stylesheet</button>
      {refresh && <p>{Object.values(globalStyleSheet.cssRules).map((rule) => rule.cssText)}</p>}
    </>
  )
}

export default App
