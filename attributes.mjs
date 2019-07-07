export function applyAttributes(element, attributes) {
    attributes.forEach((value, key) => {
        element.setAttribute(`${key}`, value);
    });
}