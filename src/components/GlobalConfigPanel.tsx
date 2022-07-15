import { List } from '@mui/material'
import React from 'react'
import CSSRuleInput from './CSSRuleInput'
import DropDownInput from './DropDownInput'
import MediaRuleInput from './MediaRuleInput'
import NestedList from './NestedList'

const GlobalConfigPanel = (props: { globalStyleSheet: CSSStyleSheet }) => {
  const { globalStyleSheet } = props

  return (
    <List>
      <NestedList title="container">
        <CSSRuleInput styleSheet={globalStyleSheet} className=".prz-widget-container" cssRuleKey="--primary-color" type="color" />
        <CSSRuleInput styleSheet={globalStyleSheet} className=".prz-widget-container" cssRuleKey="color" type="color" />
        <CSSRuleInput styleSheet={globalStyleSheet} className=".prz-widget-container" cssRuleKey="background-color" type="color" />
        <DropDownInput styleSheet={globalStyleSheet} className=".prz-widget-container" cssRuleKey="font-family" options={['Roboto', 'Montserrat']} />
        <CSSRuleInput styleSheet={globalStyleSheet} className=".prz-widget-container" cssRuleKey="border-width" type="number" />
        <DropDownInput styleSheet={globalStyleSheet} className=".prz-widget-container" cssRuleKey="border-style" options={['Solid', 'Dashed']} />
        <CSSRuleInput styleSheet={globalStyleSheet} className=".prz-widget-container" cssRuleKey="border-color" type="color" />
        <CSSRuleInput styleSheet={globalStyleSheet} className=".prz-widget-container" cssRuleKey="padding" />
      </NestedList>
      <NestedList title="h1">
        <CSSRuleInput styleSheet={globalStyleSheet} className=".prz-widget-h1" cssRuleKey="color" type="color" />
        <CSSRuleInput styleSheet={globalStyleSheet} className=".prz-widget-h1" cssRuleKey="background-color" type="color" />
        <CSSRuleInput styleSheet={globalStyleSheet} className=".prz-widget-h1" cssRuleKey="font-size" type="number" />
        <DropDownInput styleSheet={globalStyleSheet} className=".prz-widget-h1" cssRuleKey="font-family" options={['Roboto', 'Montserrat']} />
        <DropDownInput styleSheet={globalStyleSheet} className=".prz-widget-h1" cssRuleKey="font-weight" options={['200', '400', '500', '800']} />
        <CSSRuleInput styleSheet={globalStyleSheet} className=".prz-widget-h1" cssRuleKey="border-width" type="number" />
        <DropDownInput styleSheet={globalStyleSheet} className=".prz-widget-h1" cssRuleKey="border-style" options={['Solid', 'Dashed']} />
        <CSSRuleInput styleSheet={globalStyleSheet} className=".prz-widget-h1" cssRuleKey="border-color" type="color" />
      </NestedList>
      <NestedList title="button">
        <CSSRuleInput styleSheet={globalStyleSheet} className=".prz-widget-button" cssRuleKey="color" type="color" />
        <CSSRuleInput styleSheet={globalStyleSheet} className=".prz-widget-button" cssRuleKey="--widget-button-bg-color" type="color" />
        <CSSRuleInput styleSheet={globalStyleSheet} className=".prz-widget-button" cssRuleKey="font-size" type="number" />
        <DropDownInput styleSheet={globalStyleSheet} className=".prz-widget-button" cssRuleKey="font-family" options={['Roboto', 'Montserrat']} />
        <DropDownInput styleSheet={globalStyleSheet} className=".prz-widget-button" cssRuleKey="font-weight" options={['200', '400', '500', '800']} />
        <CSSRuleInput styleSheet={globalStyleSheet} className=".prz-widget-button" cssRuleKey="border-width" type="number" />
        <DropDownInput styleSheet={globalStyleSheet} className=".prz-widget-button" cssRuleKey="border-style" options={['Solid', 'Dashed']} />
        <CSSRuleInput styleSheet={globalStyleSheet} className=".prz-widget-button" cssRuleKey="border-color" type="color" />
        <NestedList title="hover">
          <CSSRuleInput styleSheet={globalStyleSheet} className=".prz-widget-button:hover" cssRuleKey="color" type="color" />
          <CSSRuleInput styleSheet={globalStyleSheet} className=".prz-widget-button:hover" cssRuleKey="background-color" type="color" />
          <CSSRuleInput styleSheet={globalStyleSheet} className=".prz-widget-button:hover" cssRuleKey="font-size" type="number" />
          <DropDownInput styleSheet={globalStyleSheet} className=".prz-widget-button:hover" cssRuleKey="font-family" options={['Roboto', 'Montserrat']} />
          <DropDownInput styleSheet={globalStyleSheet} className=".prz-widget-button:hover" cssRuleKey="font-weight" options={['200', '400', '500', '800']} />
          <CSSRuleInput styleSheet={globalStyleSheet} className=".prz-widget-button:hover" cssRuleKey="border-width" type="number" />
          <DropDownInput styleSheet={globalStyleSheet} className=".prz-widget-button:hover" cssRuleKey="border-style" options={['Solid', 'Dashed']} />
          <CSSRuleInput styleSheet={globalStyleSheet} className=".prz-widget-button:hover" cssRuleKey="border-color" type="color" />
        </NestedList>
      </NestedList>
      <NestedList title="logo">
        <DropDownInput styleSheet={globalStyleSheet} className=".prz-widget-logo" cssRuleKey="color" options={['white', 'black']} />
      </NestedList>
      <NestedList title="responsive mobile">
        <NestedList title="container">
          <MediaRuleInput styleSheet={globalStyleSheet} className=".prz-widget-container" cssRuleKey="padding" view="mobile" />
        </NestedList>
        <NestedList title="h1">
          <MediaRuleInput styleSheet={globalStyleSheet} className=".prz-widget-h1" cssRuleKey="font-size" view="mobile" type="number" />
        </NestedList>
      </NestedList>
      <NestedList title="responsive tablet">
        <NestedList title="container">
          <MediaRuleInput styleSheet={globalStyleSheet} className=".prz-widget-container" cssRuleKey="padding" view="tablet" />
        </NestedList>
        <NestedList title="h1">
          <MediaRuleInput styleSheet={globalStyleSheet} className=".prz-widget-h1" cssRuleKey="font-size" view="tablet" type="number" />
        </NestedList>
      </NestedList>
    </List>
  )
}

export default GlobalConfigPanel
