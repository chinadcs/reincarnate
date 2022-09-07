import { IIconMaps, ISvgIcon } from "@/components/shared/Icon/index.type";
import { SvgIconLogo } from "./components/IconLogo";

export const IconMaps: Array<IIconMaps> = [
  {
    name: 'Logo',
    icon: (props: ISvgIcon) => <SvgIconLogo {...props} />
  }
]
