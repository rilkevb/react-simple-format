// ### CORRESPONDING RAILS METHOD TESTS ###

// def test_simple_format_should_be_html_safe
//   assert simple_format("<b> test with html tags </b>").html_safe?
// end

// def test_simple_format_included_in_isolation
//   helper_klass = Class.new { include ActionView::Helpers::TextHelper }
//   assert helper_klass.new.simple_format("<b> test with html tags </b>").html_safe?
// end

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

// "scripts": {
//     "build": "mkdir -p lib && babel ./src/index.js --out-file ./lib/index.js",
//     "lint": "eslint src test",
//     "test": "npm run test:node && npm run test:browser",
//     "test:node": "mocha --compilers js:babel-core/register --recursive ./test/node",
//     "test:browser": "karma start",
//     "test:cov": "npm run test:cov:browser && npm run test:cov:node && npm run test:cov:report",
//     "test:cov:node": "babel-node $(npm bin)/isparta cover $(npm bin)/_mocha report --dir ./coverage/node-coverage -- --recursive ./test/node",
//     "test:cov:browser": "COVERAGE=true karma start",
//     "test:cov:report": "$(npm bin)/istanbul report --dir ./coverage --include **/*coverage.json html text",
//     "prepublish": "npm run build"
//   },
