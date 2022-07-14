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

  return (
    <div className="prz-widget-container">
      <h1 className="prz-widget-h1 prz-widget-h1-c123">Start your journey</h1>
      <h4 className="prz-widget-h4 prz-widget-h4-c123">Find out how global brands have optimised their customer experience</h4>
      <p className="prz-widget-p prz-widget-p-c123">What would you like to do better to accelerate your growth?</p>
      <p className="prz-widget-p prz-widget-p-c456">You can choose more than one!</p>
      <div className="prz-widget-answer-wrapper prz-widget-answer-wrapper-c123">
        {answers.map((answer) => (
          <div className="prz-widget-answer" key={answer.content}>
            <div className="prz-widget-answer-img">
              <img src={answer.img} />
            </div>
            <p className="prz-widget-p prz-widget-answer-content">{answer.content}</p>
            <button className="prz-widget-button prz-widget-answer-button" />
          </div>
        ))}
      </div>
      <div className="prz-widget-button-wrapper prz-widget-button-wrapper-c123">
        <button className="prz-widget-button prz-widget-button-c123">back</button>
        <button className="prz-widget-button prz-widget-button-c456">next</button>
      </div>
      <div className="prz-widget-logo">partnered with preezie</div>
    </div>
  )
}

export default Widget
