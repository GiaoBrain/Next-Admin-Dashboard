// MUI Imports
import type { Theme } from '@mui/material/styles'

// Third-party Imports
import styled from '@emotion/styled'
import type { CSSObject } from '@emotion/styled'

// Config Imports
import themeConfig from '@configs/themeConfig'

// Util Imports
import { horizontalLayoutClasses } from '@layouts/utils/layoutClasses'

type StyledHeaderProps = {
  theme: Theme
  overrideStyles?: CSSObject
}

const StyledHeader = styled.header<StyledHeaderProps>`
  box-shadow: var(--mui-customShadows-sm);

  [data-skin='bordered'] & {
    box-shadow: none;
    border-block-end: 1px solid var(--border-color);
  }

  &:not(.${horizontalLayoutClasses.headerBlur}) {
    background-color: var(--mui-palette-background-paper);
  }

  &.${horizontalLayoutClasses.headerBlur} {
    backdrop-filter: blur(6px);
    background-color: rgb(var(--background-color-rgb) / 0.88);
  }

  &.${horizontalLayoutClasses.headerFixed} {
    position: sticky;
    inset-block-start: 0;
    z-index: var(--header-z-index);
  }

  &.${horizontalLayoutClasses.headerContentCompact} .${horizontalLayoutClasses.navbar} {
    margin-inline: auto;
    max-inline-size: ${themeConfig.compactContentWidth}px;
  }

  .${horizontalLayoutClasses.navbar} {
    position: relative;
    min-block-size: var(--header-height);
    padding-block: 8px;
    padding-inline: ${themeConfig.layoutPadding}px;
  }

  ${({ overrideStyles }) => overrideStyles}
`

export default StyledHeader
