export function show(element, display = "inline-block") {
  if (!(element instanceof HTMLElement)) {
    console.warn("show(): invalid element");
    return;
  }

  element.style.display = display;
}
export function hide(element) {
  if (!(element instanceof HTMLElement)) {
    console.warn("hide(): invalid element");
    return;
  }

  element.style.display = "none";
}