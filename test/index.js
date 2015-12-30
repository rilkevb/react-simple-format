import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { findDOMNode } from 'react-dom'
import SimpleFormat from '../src'
import { expect } from 'chai'

import { renderIntoDocument } from 'react-addons-test-utils'

describe('SimpleFormat', () => {
  const str1 = 'You cannot connect the dots looking forward;'
  const str2First = 'You can only connect them'
  const str2Second = 'looking backward.'
  const str2 = `${str2First} ${str2Second}`
  const str = `${str1} ${str2}`

  it('renders text without newlines correctly', () => {
    expect(
      renderToStaticMarkup(
        <SimpleFormat text={ str } />
      )
    ).to.equal(`<div><p>${str}</p></div>`)
  })

  it('renders text with 1 newline correctly', () => {
    expect(
      renderToStaticMarkup(
        <SimpleFormat text={ `${str1}\n${str2}` } />
      )
    ).to.equal(`<div><p>${str1}\n<br />${str2}</p></div>`)
  })

  it('renders text with 2 consecutive newlines correctly', () => {
    expect(
      renderToStaticMarkup(
        <SimpleFormat text={ `${str1}\n\n${str2}` }/>
      )
    ).to.equal(`<div><p>${str1}</p><p>${str2}</p></div>`)
  })

  it('renders text with multiple linebreaks correctly', () => {
    expect(
      renderToStaticMarkup(
        <SimpleFormat text={ `${str1}\n\n${str2First}\n\n${str2Second}` } />
      )
    ).to.equal(`<div><p>${str1}</p><p>${str2First}</p><p>${str2Second}</p></div>`)
  })

  it('renders an empty string correctly', () => {
    expect(
      renderToStaticMarkup(
        <SimpleFormat text={''} />
      )
    ).to.equal('<div><p></p></div>')
  })

  it('renders the optional wrapperTag correctly', () => {
    expect(
      renderToStaticMarkup(
        <SimpleFormat
          text={ str }
          wrapperTag={'h1'} />
      )
    ).to.equal(`<h1><p>${str}</p></h1>`)
  })

  it('does not change the text passed in', () => {
    var component = renderIntoDocument(
        <SimpleFormat text={ str } />
    )
    expect(
      findDOMNode(component).textContent
    ).to.equal(str)
  })
})
