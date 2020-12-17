
export const resizeImage = (imagePath, size) => {
    if (imagePath !== null) {
        const image = imagePath.match(/media\/games/) ? imagePath.replace("/media/games/", `/media/resize/${size}/-/games/`) : imagePath.replace("/media/screenshots/", `/media/resize/${size}/-/screenshots/`);
        return image;
    }
}