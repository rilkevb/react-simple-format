// var assert = require('assert')
// var React = require('react/addons')
// var assert = require('assert')
// var SimpleFormat = require('../src/index')
// var ReactTestUtils = require('react-addons-test-utils');
import React from 'react'
import SimpleFormat from '../src/index'
import TestUtils from 'react-addons-test-utils'
import { expect } from 'chai'

describe('SimpleFormat', () => {
  it('renders a pair of buttons', () => {
  })
  it('should work!', function() {
    let state = 42
    expect(state).to.equal(42)
  })
})

describe('simple-format component rendering string with no newlines', function() {

  before('render and locate element', function() {
    var renderedComponent = TestUtils.renderIntoDocument(
      <SimpleFormat text={ "You cannot connect the dots looking forward; You can only connect them looking backward." } />
    )

    var inputComponent = TestUtils.findRenderedDOMComponentWithTag(renderedComponent, 'div')
    this.inputElement = inputComponent //.getDOMNode()
  })

  it('should work!', function() {
  })
  console.log(this.inputElement)
  it(this.inputElement, function() {
    expect(this.inputElement).to.equal('yo, a wicked cup of coco')
    // '<div><p>You cannot connect the dots looking forward; You can only connect them looking backward</p></div>'
  })
})


  //     assert_equal "<p></p>", simple_format(nil)

  // assert_equal "<p>crazy\n<br /> cross\n<br /> platform linebreaks</p>", simple_format("crazy\r\n cross\r platform linebreaks")
  // assert_equal "<p>A paragraph</p>\n\n<p>and another one!</p>", simple_format("A paragraph\n\nand another one!")
  // assert_equal "<p>A paragraph\n<br /> With a newline</p>", simple_format("A paragraph\n With a newline")

  // text = "A\nB\nC\nD".freeze
  // assert_equal "<p>A\n<br />B\n<br />C\n<br />D</p>", simple_format(text)

  // text = "A\r\n  \nB\n\n\r\n\t\nC\nD".freeze
  // assert_equal "<p>A\n<br />  \n<br />B</p>\n\n<p>\t\n<br />C\n<br />D</p>", simple_format(text)

  // assert_equal %q(<p class="test">This is a classy test</p>), simple_format("This is a classy test", :class => 'test')
  // assert_equal %Q(<p class="test">para 1</p>\n\n<p class="test">para 2</p>), simple_format("para 1\n\npara 2", :class => 'test')

// def test_simple_format
//   assert_equal "<p></p>", simple_format(nil)

//   assert_equal "<p>crazy\n<br /> cross\n<br /> platform linebreaks</p>", simple_format("crazy\r\n cross\r platform linebreaks")
//   assert_equal "<p>A paragraph</p>\n\n<p>and another one!</p>", simple_format("A paragraph\n\nand another one!")
//   assert_equal "<p>A paragraph\n<br /> With a newline</p>", simple_format("A paragraph\n With a newline")

//   text = "A\nB\nC\nD".freeze
//   assert_equal "<p>A\n<br />B\n<br />C\n<br />D</p>", simple_format(text)

//   text = "A\r\n  \nB\n\n\r\n\t\nC\nD".freeze
//   assert_equal "<p>A\n<br />  \n<br />B</p>\n\n<p>\t\n<br />C\n<br />D</p>", simple_format(text)

//   assert_equal %q(<p class="test">This is a classy test</p>), simple_format("This is a classy test", :class => 'test')
//   assert_equal %Q(<p class="test">para 1</p>\n\n<p class="test">para 2</p>), simple_format("para 1\n\npara 2", :class => 'test')
// end

// def test_simple_format_should_sanitize_input_when_sanitize_option_is_not_false
//   assert_equal "<p><b> test with unsafe string </b></p>", simple_format("<b> test with unsafe string </b><script>code!</script>")
// end

// def test_simple_format_should_sanitize_input_when_sanitize_option_is_true
//   assert_equal '<p><b> test with unsafe string </b></p>',
//     simple_format('<b> test with unsafe string </b><script>code!</script>', {}, sanitize: true)
// end

// def test_simple_format_should_not_sanitize_input_when_sanitize_option_is_false
//   assert_equal "<p><b> test with unsafe string </b><script>code!</script></p>", simple_format("<b> test with unsafe string </b><script>code!</script>", {}, :sanitize => false)
// end

// def test_simple_format_with_custom_wrapper
//   assert_equal "<div></div>", simple_format(nil, {}, :wrapper_tag => "div")
// end

// def test_simple_format_with_custom_wrapper_and_multi_line_breaks
//   assert_equal "<div>We want to put a wrapper...</div>\n\n<div>...right there.</div>", simple_format("We want to put a wrapper...\n\n...right there.", {}, :wrapper_tag => "div")
// end

// def test_simple_format_should_not_change_the_text_passed
//   text = "<b>Ok</b><script>code!</script>"
//   text_clone = text.dup
//   simple_format(text)
//   assert_equal text_clone, text
// end

// def test_simple_format_does_not_modify_the_html_options_hash
//   options = { :class => "foobar"}
//   passed_options = options.dup
//   simple_format("some text", passed_options)
//   assert_equal options, passed_options
// end

// def test_simple_format_does_not_modify_the_options_hash
//   options = { :wrapper_tag => :div, :sanitize => false }
//   passed_options = options.dup
//   simple_format("some text", {}, passed_options)
//   assert_equal options, passed_options
// end