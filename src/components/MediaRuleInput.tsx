import React, { useEffect, useState } from 'react'

interface MediaRuleInputProps {
  styleSheet: CSSStyleSheet
  className: string
  cssRuleKey: string
  type?: string
  view: 'mobile' | 'tablet'
}

const MediaRuleInput = (props: MediaRuleInputProps) => {
  const { styleSheet, className, cssRuleKey, view, type } = props
  const [cssStyleRule, setCssStyleRule] = useState<CSSStyleRule | null>(null)
  const [value, setValue] = useState('')

  useEffect(() => {
    if (type === 'color' && value === '') {
      setValue('#ffffff')
    }

    if (!cssStyleRule) {
      const mediaRule = getCssMediaRule()
      if (mediaRule) {
        const styleRule = getCssStyleRule(mediaRule.cssRules)
        if (styleRule) {
          setCssStyleRule(styleRule)
          const ruleValue = styleRule.style.getPropertyValue(cssRuleKey).trim()
          if (ruleValue) {
            setValue(ruleValue)
          }
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
      const mediaRule = getCssMediaRule()
      if (mediaRule) {
        const styleRule = getCssStyleRule(mediaRule.cssRules)
        if (styleRule) {
          styleRule.style.setProperty(cssRuleKey, value)
          setCssStyleRule(styleRule)
        } else {
          const ruleIndex = mediaRule.insertRule(`${className} { ${cssRuleKey}: ${value}; }`, mediaRule.cssRules.length)
          setCssStyleRule(mediaRule.cssRules[ruleIndex] as CSSStyleRule)
        }
      } else {
        const conditionText = view === 'mobile' ? '@media screen and (max-width: 480px)' : view === 'tablet' ? '@media screen and (max-width: 900px)' : ''
        const mediaRuleIndex = styleSheet.insertRule(`${conditionText} { ${className} { ${cssRuleKey}: ${value}; } }`, styleSheet.cssRules.length)
        const mediaRule = styleSheet.cssRules[mediaRuleIndex] as CSSMediaRule
        setCssStyleRule(mediaRule.cssRules[0] as CSSStyleRule)
      }
    }
  }

  const getCssMediaRule = (): CSSMediaRule | null => {
    const conditionText = view === 'mobile' ? '(max-width: 480px)' : view === 'tablet' ? '(max-width: 900px)' : ''

    for (const value of Object.values(styleSheet.cssRules)) {
      if (value instanceof CSSMediaRule) {
        if (value.conditionText.includes(conditionText)) {
          return value
        }
      }
    }

    return null
  }

  const getCssStyleRule = (rules: CSSRuleList): CSSStyleRule | null => {
    for (const value of Object.values(rules)) {
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

export default MediaRuleInput
