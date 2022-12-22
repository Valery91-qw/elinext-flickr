export default function setImageUrl(server: string, id: string, secret: string, size = 'm') {
    return `https://live.staticflickr.com/${server}/${id}_${secret}_${size}.jpg`
}