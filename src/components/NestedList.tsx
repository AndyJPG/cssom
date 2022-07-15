import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import { List } from '@mui/material'
import Collapse from '@mui/material/Collapse'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import { useState } from 'react'

const NestedList = (props: { title?: string; children?: React.ReactNode }) => {
  const { children, title } = props
  const [expand, setExpand] = useState(false)

  const handleClick = () => {
    setExpand((prevState) => !prevState)
  }

  return (
    <>
      <ListItemButton onClick={handleClick}>
        <ListItemText primary={title || 'section'} />
        {expand ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={expand} timeout="auto" unmountOnExit>
        <div style={{ paddingLeft: '12px' }}>{children}</div>
      </Collapse>
    </>
  )
}

export default NestedList
