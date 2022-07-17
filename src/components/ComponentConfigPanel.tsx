import { List } from '@mui/material'
import React from 'react'
import CSSRuleInput from './CSSRuleInput'
import DropDownInput from './DropDownInput'
import NestedList from './NestedList'

const ComponentConfigPanel = (props: { globalStyleSheet: CSSStyleSheet }) => {
  const { globalStyleSheet } = props

  return (
    <List>
      <NestedList title="button c123">
        <CSSRuleInput styleSheet={globalStyleSheet} className=".prz-widget-button-id123" cssRuleKey="color" type="color" />
        <CSSRuleInput styleSheet={globalStyleSheet} className=".prz-widget-button-id123" cssRuleKey="background-color" type="color" />
        <DropDownInput styleSheet={globalStyleSheet} className=".prz-widget-button-id123" cssRuleKey="font-family" options={['Roboto', 'Montserrat']} />
        <CSSRuleInput styleSheet={globalStyleSheet} className=".prz-widget-button-id123" cssRuleKey="border-width" type="number" />
        <DropDownInput styleSheet={globalStyleSheet} className=".prz-widget-button-id123" cssRuleKey="border-style" options={['Solid', 'Dashed']} />
        <CSSRuleInput styleSheet={globalStyleSheet} className=".prz-widget-button-id123" cssRuleKey="border-color" type="color" />
        <CSSRuleInput styleSheet={globalStyleSheet} className=".prz-widget-button-id123" cssRuleKey="padding" />
        <NestedList title="button c123 hover">
          <CSSRuleInput styleSheet={globalStyleSheet} className=".prz-widget-button-id123:hover" cssRuleKey="color" type="color" />
          <CSSRuleInput styleSheet={globalStyleSheet} className=".prz-widget-button-id123:hover" cssRuleKey="background-color" type="color" />
          <DropDownInput styleSheet={globalStyleSheet} className=".prz-widget-button-id123:hover" cssRuleKey="font-family" options={['Roboto', 'Montserrat']} />
          <CSSRuleInput styleSheet={globalStyleSheet} className=".prz-widget-button-id123:hover" cssRuleKey="border-width" type="number" />
          <DropDownInput styleSheet={globalStyleSheet} className=".prz-widget-button-id123:hover" cssRuleKey="border-style" options={['Solid', 'Dashed']} />
          <CSSRuleInput styleSheet={globalStyleSheet} className=".prz-widget-button-id123:hover" cssRuleKey="border-color" type="color" />
          <CSSRuleInput styleSheet={globalStyleSheet} className=".prz-widget-button-id123:hover" cssRuleKey="padding" />
        </NestedList>
      </NestedList>
    </List>
  )
}

export default ComponentConfigPanel
