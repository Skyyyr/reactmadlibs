function Selector(props) {
    console.log(props.data[0]['title'])
    const renderChoices = () => {
        let htmlContent = []
        for (let i = 0; i < props.data.length; i++) {
            htmlContent.push(
                <option key={props.data[i]['title']}>
                    {props.data[i]['title']}
                </option>
            )
        }
        return htmlContent
    }

  return (
    <div id="div-selector">
      <span>Select Story: </span>
      <select>
        { renderChoices() }
      </select>
    </div>
  )
}

export default Selector