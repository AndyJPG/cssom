import React, { useState } from 'react'

interface ConfigInputProps {
  styleSheet: CSSStyleSheet
  className: string
  cssRuleKey: string
  options: string[]
}

const DropDownInput = (props: ConfigInputProps) => {
  const { styleSheet, className, cssRuleKey, options } = props
  const [cssStyleRule, setCssStyleRule] = useState<CSSStyleRule | null>(null)
  const [value, setValue] = useState('')

  const onChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
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
    <div>
      <label htmlFor={cssRuleKey}>{cssRuleKey}</label>
      <br />
      <select id={cssRuleKey} name={cssRuleKey} value={value} onChange={onChangeHandler}>
        <option value={''} disabled>
          select your option
        </option>
        {options.map((option) => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  )
}

export default DropDownInput
