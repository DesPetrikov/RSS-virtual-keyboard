var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
export default function createHtml(tag, className, parent, src) {
    var attributes = [];
    for (var _i = 4; _i < arguments.length; _i++) {
        attributes[_i - 4] = arguments[_i];
    }
    var elem = document.createElement(tag);
    className.split(' ').forEach(function (el) { return elem.classList.add(el); });
    if (elem instanceof HTMLImageElement)
        elem.src = src;
    if (elem instanceof HTMLAnchorElement || elem instanceof HTMLLinkElement)
        elem.href = src;
    if (attributes.length !== 0)
        attributes.forEach(function (el) {
            var _a = __spreadArray([], el.split(', '), true), attr = _a[0], value = _a[1];
            elem.setAttribute(attr, value);
        });
    parent.append(elem);
    return elem;
}
