import React, { useEffect, useState } from 'react'

interface ConfigInputProps {
  styleSheet: CSSStyleSheet
  className: string
  cssRuleKey: string
  type?: string
}

const ConfigInput = (props: ConfigInputProps) => {
  const { styleSheet, className, cssRuleKey, type } = props
  const [cssStyleRule, setCssStyleRule] = useState<CSSStyleRule | null>(null)
  const [value, setValue] = useState(type === 'color' ? '#ffffff' : '')

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)

    if (cssStyleRule) {
      cssStyleRule.style.setProperty(cssRuleKey, e.target.value)
    } else {
      const styleRule = getCssStyleRule()
      if (styleRule) {
        styleRule.style.setProperty(cssRuleKey, e.target.value)
        setCssStyleRule(styleRule)
      } else {
        const ruleIndex = styleSheet.insertRule(`${className} { ${cssRuleKey}: ${e.target.value}; }`)
        setCssStyleRule(styleSheet.cssRules[ruleIndex] as CSSStyleRule)
      }
    }
  }

  const getCssStyleRule = (): CSSStyleRule | null => {
    for (const value of Object.values(styleSheet.cssRules)) {
      if (value instanceof CSSStyleRule) {
        if (value.selectorText === className) {
          return value
        }
      }
    }

    return null
  }

  return (
    <>
      <label htmlFor={cssRuleKey}>{cssRuleKey}</label>
      <input id={cssRuleKey} type={type} value={value} onChange={onChangeHandler} />
    </>
  )
}

export default ConfigInput
