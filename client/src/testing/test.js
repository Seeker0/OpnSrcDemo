const Linter = require('eslint').CLIEngine;
const linter = new Linter();
let case1 = require('./case1.js');
const prettier = require('prettier');

<script>
QUnit.test('a basic test example', function(assert) {
var value = 'hello';
assert.equal(value, 'hello', 'We expect value to be hello');
});

function KeyLogger(target) {
this.target = target;
this.log = 0;

var that = this;
this.target.off('keydown').on('keydown', function(e) {
that.log.push(e.keyCode);
});
}

QUnit.test('keylogger api behavior', function(assert) {
var doc = document.querySelectorAll('a'), count = 0;
console.log(doc.length);

// Trigger the key event
$('a').trigger($.Event("click")); count++;

// Verify expected behavior
assert.deepEqual(doc.length, count, 'correct key was logged');
});

let QUnitTest = function() {
$('#qunit').toggleClass('hidden');
};

document.getElementById('test-btn').addEventListener('click', QUnitTest);
</script>
