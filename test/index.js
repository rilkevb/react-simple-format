import React from 'react'
import SimpleFormat from '../src/index'
import TestUtils from 'react-addons-test-utils'
import { expect } from 'chai'

import { renderIntoDocument } from 'react-addons-test-utils'

describe('SimpleFormat', () => {

  it('renders text without newlines correctly', () => {
    expect(
      React.renderToStaticMarkup(
        <SimpleFormat text={ 'You cannot connect the dots looking forward; You can only connect them looking backward.' } />
      )
    ).to.equal('<div><p>You cannot connect the dots looking forward; You can only connect them looking backward.</p></div>')
  })

  it('renders text with 1 newline correctly', () => {
    expect(
      React.renderToStaticMarkup(
        <SimpleFormat text={ 'You cannot connect the dots looking forward;\n You can only connect them looking backward.' } />
      )
    ).to.equal('<div><p>You cannot connect the dots looking forward; You can only connect them looking backward.</p></div>')
  })

  it('renders text with 2 consecutive newlines correctly', () => {
    expect(
      React.renderToStaticMarkup(
        <SimpleFormat text={ 'You cannot connect the dots looking forward;\n\n You can only connect them looking backward.' } />
      )
    ).to.equal('<div><p>You cannot connect the dots looking forward;</p><p> You can only connect them looking backward.</p></div>')
  })

  it('renders text with multiple linebreaks correctly', () => {
    expect(
      React.renderToStaticMarkup(
        <SimpleFormat text={ 'You cannot connect the dots looking forward;\n\n You can only connect them \n\n looking backward.' } />
      )
    ).to.equal('<div><p>You cannot connect the dots looking forward;</p><p> You can only connect them </p><p>looking backward.</p></div>')
  })

  it('renders an empty string correctly', () => {
    expect(
      React.renderToStaticMarkup(
        <SimpleFormat text={''} />
      )
    ).to.equal('<div><p></p></div>')
  })

  it('renders the optional wrapperTag correctly', () => {
    expect(
      React.renderToStaticMarkup(
        <SimpleFormat
          text={ 'You cannot connect the dots looking forward; You can only connect them looking backward.' }
          wrapperTag={'h1'} />
      )
    ).to.equal('<h1><p>You cannot connect the dots looking forward; You can only connect them looking backward.</p></h1>')
  })

  it('does not change the text passed in', () => {
    var component = renderIntoDocument(
        <SimpleFormat text={ "You cannot connect the dots looking forward; You can only connect them looking backward." } />
    )
    expect(
      React.findDOMNode(component).textContent
    ).to.equal('You cannot connect the dots looking forward; You can only connect them looking backward.')
  })

})


