import React from "react"
import { size, DeviceNameEnum } from "style/media"
import useWindowSize from "./useWindowSize"

const useViewport = () => {
  const windowSize = useWindowSize()

  return windowSize.width >= Number(size.desktop)
    ? DeviceNameEnum.desktop
    : windowSize.width >= Number(size.laptop)
    ? DeviceNameEnum.laptop
    : windowSize.width >= Number(size.tablet)
    ? DeviceNameEnum.tablet
    : DeviceNameEnum.mobile
}

export default useViewport
