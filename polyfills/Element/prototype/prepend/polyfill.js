// IE8 doesn't support DocumentFragment.prototype
var DocumentFragmentPrototype = (window.DocumentFragment && window.DocumentFragment.prototype) || document.createDocumentFragment().constructor.prototype;

Document.prototype.prepend = DocumentFragmentPrototype.prepend = Element.prototype.prepend = function prepend() {
	this.insertBefore(_mutation(arguments), this.firstChild);
};
