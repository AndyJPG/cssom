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

    if (cssRuleKey === 'font-family') {
      let font = ''
      switch (e.target.value.toLowerCase()) {
        case 'montserrat':
          font = `
          @font-face {
            font-family: Montserrat;
            src: url("https://preeziestaticcontent.blob.core.windows.net/static/fonts/Montserrat-Regular-Preezie.woff2") format("woff2");
          }
          `
          break
        case 'roboto':
          font = `
          @font-face {
            font-family: Roboto;
            src: url("https://preeziestaticcontent.blob.core.windows.net/static/fonts/Roboto-Regular-Preezie.woff2") format("woff2");
          }
          `
          break
        case 'notosans':
          font = `
          @font-face {
            font-family: NotoSans;
            src: url("https://preeziestaticcontent.blob.core.windows.net/static/fonts/NotoSans-Regular-Preezie.woff2") format("woff2");
          }
          `
          break
        default:
          break
      }

      let fontExist = false
      for (const rule of Object.values(styleSheet.cssRules)) {
        if (rule instanceof CSSFontFaceRule) {
          if (rule.style.getPropertyValue('font-family').toLowerCase() === e.target.value.toLowerCase()) {
            fontExist = true
          }
        }
      }

      if (!fontExist) {
        styleSheet.insertRule(font)
      }
    }

    if (cssStyleRule) {
      cssStyleRule.style.setProperty(cssRuleKey, e.target.value)
    } else {
      const styleRule = getCssStyleRule()
      if (styleRule) {
        styleRule.style.setProperty(cssRuleKey, e.target.value)
        setCssStyleRule(styleRule)
      } else {
        const ruleIndex = styleSheet.insertRule(`${className} { ${cssRuleKey}: ${e.target.value}; }`, 10)
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
