export function getImageUrl(imageId, size = 's') {
    return `/images/${imageId}${size}.png`;
}
