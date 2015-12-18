import React, { Component } from 'react'
import SimpleFormat from 'react-simple-format'

export default class App extends Component {
  render () {
    const forwardText = "You can't connect the dots looking forward;\n\n You can only connect them looking backward."
    const hungryText = 'Stay hungry.\n\nStay foolish.'
    return (
      <div>
        <h1> SimpleFormat </h1>
        <div>
          The goal of this component is to simplify the formatting of strings.  It turns double newlines into different paragraphs. `wrapperTag` and `wrapperProps` are optional.
        </div>

        <br/>

        <div>
          In the simplest case you pass in a string with double newlines and it will format it as two paragraphs separated with a break.
          <br/>
          For example, if you set the 'text' attribute equal to : "You can't connect the dots looking forward;\n\n You can only connect them looking backward."
          <br/>
          SimpleFormat will render :
          <br/>
          <SimpleFormat text={ forwardText } />
        </div>

        <br/>

        <div>
          You can also specifie the wrapperTag and wrapperTagProps on the component.
          <br/> <br/>
          If you specify the text attribute as : 'Stay hungry.\n\nStay foolish.'
          <br/> <br/>
          and the wrapperTag as an 'h2', SimpleFormat will render:
          <br/>
          <SimpleFormat text={hungryText} wrapperTag={'h2'} />
        </div>

        <div>
          In a similar manner you can specify the wrapperTagProps.
        </div>

      </div>
    )
  }
}
