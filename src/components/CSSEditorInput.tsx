import React, { useEffect, useState } from 'react'

interface CSSEditorInputProps {
  styleSheet: CSSStyleSheet
}

const CSSEditorInput = (props: CSSEditorInputProps) => {
  const { styleSheet } = props
  const [value, setValue] = useState('')

  useEffect(() => {
    if (value === '') {
      for (const value of Object.values(styleSheet.cssRules)) {
        setValue((prevState) => (prevState += value.cssText))
      }
    }
  }, [])

  const onChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value)
    changeStyle(e.target.value)
  }

  const changeStyle = (value: string) => {
    const styleRulesList = value.replace(/(\r\n|\n|\r)/gm, '').split(/[{}]+/)
    let classList = ''
    console.log(styleRulesList)

    for (let index = 0; index < styleRulesList.length; index += 2) {
      classList += styleRulesList[index]
      const styleRuleIndex = getCssStyleRuleIndex(styleRulesList[index].trim())
      if (styleRuleIndex && styleRulesList[index + 1]) {
        styleSheet.deleteRule(parseInt(styleRuleIndex, 10))
      }

      if (styleRulesList[index + 1]) {
        console.log(`${styleRulesList[index]}{${styleRulesList[index + 1]}}`)
        styleSheet.insertRule(`${styleRulesList[index].trim()}{${styleRulesList[index + 1].trim()}}`)
      }
    }

    for (const [key, value] of Object.entries(styleSheet.cssRules)) {
      if (value instanceof CSSStyleRule) {
        if (!classList.includes(value.selectorText)) {
          styleSheet.deleteRule(parseInt(key, 10))
        }
      }
    }
  }

  const getCssStyleRuleIndex = (className: string): string | null => {
    for (const [key, value] of Object.entries(styleSheet.cssRules)) {
      if (value instanceof CSSStyleRule) {
        if (value.selectorText === className) {
          return key
        }
      }
    }

    return null
  }

  return (
    <div>
      <label htmlFor="css editor">css editor</label>
      <br />
      <textarea id="css editor" value={value} onChange={onChangeHandler} />
    </div>
  )
}

export default CSSEditorInput
