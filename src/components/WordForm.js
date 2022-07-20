function WordForm(props) {

  function displayText(text) {
    props.updateMadLibWord(text.target.id, text.target.value)
  }

  // render
  const renderInputs = () => {
    let htmlContent = []
    props.words.map((elem, index)  => {
      htmlContent.push(<input type="text" id={index} placeholder={elem['label']} key={`${elem['key']}`} onChange={(e) => displayText(e)} contentEditable={true}/>)
    });
    return htmlContent
  }
  
  return (
    <div id="div-words">
      { renderInputs() }
    </div>
  )
}

export default WordForm
