// Third-party Imports
import styled from '@emotion/styled'
import { KBarAnimator } from 'kbar'

// Type Imports
import type { Settings } from '@core/contexts/settingsContext'

type StyledKBarAnimatorProps = {
  skin: Settings['skin']
  isSmallScreen: boolean
}

const StyledKBarAnimator = styled(KBarAnimator)<StyledKBarAnimatorProps>`
  & > div {
    inline-size: 600px;
    max-inline-size: 90dvw;
    block-size: 580px;
    max-block-size: 90dvh;
    background: var(--mui-palette-background-paper);
    border-radius: var(--border-radius);
    display: flex;
    flex-direction: column;
    overflow: hidden;

    ${({ isSmallScreen }) =>
      isSmallScreen &&
      `
      min-block-size: 100dvh;
      max-block-size: 100dvh;
      min-inline-size: 100dvw;
      max-inline-size: 100dvw;
      border-radius: 0;
    `}
    ${({ skin }) => skin !== 'bordered' && `box-shadow: var(--mui-customShadows-lg);`}
  }

  & #kbar-listbox {
    padding-inline: 0.5rem;

    & [id^='kbar-listbox-item'] {
      inset-inline-start: 8px !important;
      inline-size: calc(100% - 16px) !important;
    }
  }
`

export default StyledKBarAnimator
