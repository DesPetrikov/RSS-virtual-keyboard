export default function createHtml(tag, className, parent, src, ...attributes) {
  const elem = document.createElement(tag);
  className.split(' ').forEach((el) => elem.classList.add(el));
  if (elem instanceof HTMLImageElement) elem.src = src;
  if (elem instanceof HTMLAnchorElement || elem instanceof HTMLLinkElement)
    elem.href = src;
  if (attributes.length !== 0)
    attributes.forEach((el) => {
      const [attr, value] = [...el.split(', ')];
      elem.setAttribute(attr, value);
    });
  parent.append(elem);
  return elem;
}
