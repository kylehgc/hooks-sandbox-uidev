import React from "react";




/*
  Instructions:
    Assume you're creating an app that allows the user to 
    post status updates (ala Twitter). Your UI should have a
    textarea and a button. The button should be disabled if the
    length of the textarea is 0 or greater than 240 characters.
    The document's title should inform the user on how many
    characters they have left to type before they hit the 240
    character limit - "115 characters left."
*/

const CharacterLimit = () => {
  const [fieldText, setFieldText] = React.useState('')
  const maxFieldLength = 240
  const handleChange = (event) => {
   setFieldText(event.target.value) 
  }
  const isButtonDisabled = () => {
    return fieldText.length === 0 || fieldText.length > 240
  }
  React.useEffect(() => {
    if(fieldText.length > maxFieldLength) {
      document.title = 'Your message is over the character limit'
    } else {
      document.title = `${maxFieldLength-fieldText.length} characters left`
    }
  },[fieldText])

  
  return (
    <form>
      {console.log(isButtonDisabled())}
      <textarea 
      value ={fieldText}
      placeholder='tweet like thing'
      onChange={handleChange}
      />
      <button disabled={isButtonDisabled()}> Post me</button>
    </form>
  );
}

export default CharacterLimit