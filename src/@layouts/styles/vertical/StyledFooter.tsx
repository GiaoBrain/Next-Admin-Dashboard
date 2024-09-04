// MUI Imports
import type { Theme } from '@mui/material/styles'

// Third-party Imports
import styled from '@emotion/styled'
import type { CSSObject } from '@emotion/styled'

// Config Imports
import themeConfig from '@configs/themeConfig'

// Util Imports
import { verticalLayoutClasses } from '@layouts/utils/layoutClasses'

type StyledFooterProps = {
  theme: Theme
  overrideStyles?: CSSObject
}

const StyledFooter = styled.footer<StyledFooterProps>`
  &.${verticalLayoutClasses.footerContentCompact} {
    &.${verticalLayoutClasses.footerDetached} {
      margin-inline: auto;
      max-inline-size: ${themeConfig.compactContentWidth}px;
    }

    &.${verticalLayoutClasses.footerAttached} .${verticalLayoutClasses.footerContentWrapper} {
      margin-inline: auto;
      max-inline-size: ${themeConfig.compactContentWidth}px;
    }
  }

  &.${verticalLayoutClasses.footerFixed} {
    position: sticky;
    inset-block-end: 0;
    z-index: var(--footer-z-index);

    &.${verticalLayoutClasses.footerAttached},
      &.${verticalLayoutClasses.footerDetached}
      .${verticalLayoutClasses.footerContentWrapper} {
      background-color: var(--mui-palette-background-paper);
    }

    &.${verticalLayoutClasses.footerDetached} {
      pointer-events: none;
      padding-inline: ${themeConfig.layoutPadding}px;

      & .${verticalLayoutClasses.footerContentWrapper} {
        pointer-events: auto;
        ${({ theme }) => `
          box-shadow: 0 3px 12px 0px rgb(var(--mui-mainColorChannels-${theme.palette.mode}Shadow) / 0.14);
        `}
        border-start-start-radius:  var(--border-radius);
        border-start-end-radius: var(--border-radius);

        [data-skin='bordered'] & {
          box-shadow: none;
          border-inline: 1px solid var(--border-color);
          border-block-start: 1px solid var(--border-color);
        }
      }
    }

    &.${verticalLayoutClasses.footerAttached} {
      ${({ theme }) => `
        box-shadow: 0 3px 12px 0px rgb(var(--mui-mainColorChannels-${theme.palette.mode}Shadow) / 0.14);
      `}

      [data-skin='bordered'] & {
        box-shadow: none;
        border-block-start: 1px solid var(--border-color);
      }
    }
  }

  & .${verticalLayoutClasses.footerContentWrapper} {
    padding-block: 16px;
    padding-inline: ${themeConfig.layoutPadding}px;
  }

  ${({ overrideStyles }) => overrideStyles}
`

export default StyledFooter
