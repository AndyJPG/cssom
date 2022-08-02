import { useState } from 'react'

const AnswerComponent = (props: { img: string; content: string }) => {
  const [selected, setSelected] = useState(false)

  return (
    <div className={`prz-widget-answer ${selected && 'selected'}`} key={props.content} onClick={() => setSelected((prevState) => !prevState)}>
      <div className="prz-widget-answer-img-wrapper">
        <img className="prz-widget-answer-img" src={props.img} />
      </div>
      <p className="prz-widget-p prz-widget-answer-content">{props.content}</p>
      <div style={{ flexGrow: 1 }} />
      <button className="prz-widget-answer-button" />
    </div>
  )
}

export default AnswerComponent
