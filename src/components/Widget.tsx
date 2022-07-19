const Widget = () => {
  const answers = [
    {
      img: 'https://preezieimages.blob.core.windows.net/production/prz-storage-cli-79%2F7d51c584-ad76-4253-2fd8-08d9719d685d%2FBoost%20engagement%202.png',
      content: 'Improve customer experience'
    },
    {
      img: 'https://preezieimages.blob.core.windows.net/production/prz-storage-cli-79%2F7d51c584-ad76-4253-2fd8-08d9719d685d%2FIncrease%20conversion.png',
      content: 'Increase revenue & conversion rate'
    },
    {
      img: 'https://preezieimages.blob.core.windows.net/production/prz-storage-cli-79%2F7d51c584-ad76-4253-2fd8-08d9719d685d%2FEnhance%20marketing.png',
      content: 'Capture more emails & build a database'
    },
    {
      img: 'https://preezieimages.blob.core.windows.net/production/prz-storage-cli-79%2F7d51c584-ad76-4253-2fd8-08d9719d685d%2FGain%20insights.png',
      content: 'Gain consumer insights'
    },
    {
      img: 'https://preezieimages.blob.core.windows.net/production/prz-storage-cli-79%2F7d51c584-ad76-4253-2fd8-08d9719d685d%2FDeath%20of%20cookies.png',
      content: 'Survive the death of cookies'
    },
    {
      img: 'https://preezieimages.blob.core.windows.net/production/prz-storage-cli-79%2F7d51c584-ad76-4253-2fd8-08d9719d685d%2FBuild%20loyalty.png',
      content: 'Reduce return rates'
    }
  ]

  const progresses = ['question-3', 'question-4', 'question-5']

  return (
    <div className="prz-widget-container">
      <h1 className="prz-widget-h1 prz-widget-h1-id123">Start your journey</h1>
      <div className="prz-widget-progress-bar">
        <div className="prz-widget-progress-bar-item previous">
          <p className="prz-widget-progress-bar-text">question-1</p>
          <div className="prz-widget-progress-bar-icon previous" />
        </div>
        <div className="prz-widget-progress-bar-item current">
          <p className="prz-widget-progress-bar-text">question-2</p>
          <div className="prz-widget-progress-bar-icon current" />
        </div>
        {progresses.map((progress) => (
          <div className="prz-widget-progress-bar-item">
            <p className="prz-widget-progress-bar-text">{progress}</p>
            <div className="prz-widget-progress-bar-icon" />
          </div>
        ))}
      </div>
      <h4 className="prz-widget-h4 prz-widget-h4-id123">Find out how global brands have optimised their customer experience</h4>
      <p className="prz-widget-p prz-widget-p-id123">What would you like to do better to accelerate your growth?</p>
      <p className="prz-widget-p prz-widget-p-id456">You can choose more than one!</p>
      <div className="prz-widget-answer-wrapper prz-widget-answer-wrapper-id123">
        {answers.map((answer, index) => (
          <div className={`prz-widget-answer ${index === 0 && 'selected'}`} key={answer.content}>
            <div className="prz-widget-answer-img">
              <img src={answer.img} />
            </div>
            <p className="prz-widget-p prz-widget-answer-content">{answer.content}</p>
            <button className="prz-widget-button prz-widget-answer-button" />
          </div>
        ))}
      </div>
      <div className="prz-widget-button-wrapper prz-widget-button-wrapper-id123">
        <button className="prz-widget-button prz-widget-button-id123">back</button>
        <button className="prz-widget-button prz-widget-button-id456">next</button>
      </div>
      <div className="prz-widget-logo">partnered with preezie</div>
    </div>
  )
}

export default Widget
