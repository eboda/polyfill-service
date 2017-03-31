/* eslint-env mocha, browser*/
/* global proclaim, it */

var element, fragment, child;

function nameOf(fn) {
	return Function.prototype.toString.call(fn).match(/function\s*([^\s]*)\(/)[1];
}

beforeEach(function () {
	element = document.createElement('div');
	fragment = document.createDocumentFragment();
	child = document.createElement('div');

	element.appendChild(child);
});

it('has correct instance', function () {
	proclaim.isInstanceOf(element.prepend, Function);
	proclaim.isInstanceOf(fragment.prepend, Function);
});

it('has correct name', function () {
	proclaim.equal(nameOf(element.prepend), 'prepend');
	proclaim.equal(nameOf(fragment.prepend), 'prepend');
});

it('has correct argument length', function () {
	proclaim.equal(element.prepend.length, 0);
	proclaim.equal(fragment.prepend.length, 0);
});

it('can prepend elements to itself', function () {
	proclaim.equal(child.prepend(document.createElement('div')), undefined);
	proclaim.equal(child.prepend(document.createElement('div'), document.createElement('div')), undefined);
	proclaim.equal(child.prepend('text', document.createElement('div')), undefined);

	proclaim.equal(child.childNodes.length, 5);
	proclaim.equal(child.firstChild.nodeName, '#text');
});

it('can prepend elements to fragment', function () {
	proclaim.equal(fragment.prepend(document.createElement('div')), undefined);
	proclaim.equal(fragment.prepend(document.createElement('div'), document.createElement('div')), undefined);
	proclaim.equal(fragment.prepend('text', document.createElement('div')), undefined);

	proclaim.equal(fragment.childNodes.length, 5);
	proclaim.equal(fragment.firstChild.nodeName, '#text');
});
