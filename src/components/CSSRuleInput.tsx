import React, { useEffect, useState } from 'react'

interface ConfigInputProps {
  styleSheet: CSSStyleSheet
  className: string
  cssRuleKey: string
  type?: string
}

const CSSRuleInput = (props: ConfigInputProps) => {
  const { styleSheet, className, cssRuleKey, type } = props
  const [cssStyleRule, setCssStyleRule] = useState<CSSStyleRule | null>(null)
  const [value, setValue] = useState('')

  useEffect(() => {
    if (type === 'color' && value === '') {
      setValue('#ffffff')
    }

    if (!cssStyleRule) {
      const styleRule = getCssStyleRule()
      if (styleRule) {
        setCssStyleRule(styleRule)
        const ruleValue = styleRule.style.getPropertyValue(cssRuleKey).trim()
        if (ruleValue) {
          setValue(ruleValue)
        }
      }
    }
  }, [])

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
    changeStyle(`${e.target.value}${type === 'number' ? 'px' : ''}`)
  }

  const onRemove = () => {
    changeStyle('')
    setValue('#ffffff')
  }

  const changeStyle = (value: string) => {
    if (cssStyleRule) {
      cssStyleRule.style.setProperty(cssRuleKey, value)
    } else {
      const styleRule = getCssStyleRule()
      if (styleRule) {
        styleRule.style.setProperty(cssRuleKey, value)
        setCssStyleRule(styleRule)
      } else {
        const ruleIndex = styleSheet.insertRule(`${className} { ${cssRuleKey}: ${value}; }`, styleSheet.cssRules.length - 2)
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
    <div>
      <label htmlFor={cssRuleKey}>{cssRuleKey}</label>
      <br />
      <input id={cssRuleKey} type={type} value={value} onChange={onChangeHandler} />
      {type === 'color' && <button onClick={onRemove}>remove</button>}
    </div>
  )
}

export default CSSRuleInput
