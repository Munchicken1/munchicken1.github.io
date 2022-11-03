export const size = {
  mobile: "300",
  tablet: "768",
  laptop: "1080",
  desktop: "1440",
  bigScreen: "2000",
}

export const device = {
  mobile: `(min-width: ${size.mobile}px)`,
  tablet: `(min-width: ${size.tablet}px)`,
  laptop: `(min-width: ${size.laptop}px)`,
  desktop: `(min-width: ${size.desktop}px)`,
  bigScreen: `(min-width: ${size.bigScreen}px)`,
}

export enum DeviceNameEnum {
  mobile = "mobile",
  tablet = "tablet",
  laptop = "laptop",
  desktop = "desktop",
  bigScreen = "bigScreen",
}
