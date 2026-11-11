import "styled-components";
import type { AppTheme } from "./styles/themes/theme";

declare module "styled-components" {
  export interface DefaultTheme extends AppTheme {}
}
