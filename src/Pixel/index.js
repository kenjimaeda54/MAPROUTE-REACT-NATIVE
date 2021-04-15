import { Platform, PixelRatio } from "react-native"

export function Pixel(pixel) {
    return (

        Platform.select({
            ios: pixel,
            android: PixelRatio.getPixelSizeForLayoutSize(pixel)

        })

    )

}