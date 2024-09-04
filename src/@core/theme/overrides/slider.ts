// MUI Imports
import type { Theme } from '@mui/material/styles'

const slider: Theme['components'] = {
  MuiSlider: {
    variants: [
      {
        props: { color: 'primary' },
        style: {
          '& .MuiSlider-rail': {
            color: 'var(--mui-palette-primary-lightOpacity)'
          },
          '&.Mui-disabled': {
            opacity: 0.45,
            color: 'var(--mui-palette-primary-main)'
          },
          '& .MuiSlider-thumb:hover, & .MuiSlider-thumb.Mui-focusVisible': {
            boxShadow: '0 0 0 8px var(--mui-palette-primary-lightOpacity)'
          },
          '& .MuiSlider-thumb.Mui-active.Mui-focusVisible': {
            boxShadow: '0 0 0 13px var(--mui-palette-primary-lightOpacity)'
          },
          '& .MuiSlider-thumbSizeSmall:hover, & .MuiSlider-thumbSizeSmall.Mui-focusVisible': {
            boxShadow: '0 0 0 7px var(--mui-palette-primary-lightOpacity)'
          },
          '& .MuiSlider-thumbSizeSmall.Mui-active.Mui-focusVisible': {
            boxShadow: '0 0 0 10px var(--mui-palette-primary-lightOpacity)'
          }
        }
      },
      {
        props: { color: 'secondary' },
        style: {
          '& .MuiSlider-rail': {
            color: 'var(--mui-palette-secondary-lightOpacity)'
          },
          '&.Mui-disabled': {
            opacity: 0.45,
            color: 'var(--mui-palette-secondary-main)'
          },
          '& .MuiSlider-thumb:hover, & .MuiSlider-thumb.Mui-focusVisible': {
            boxShadow: '0 0 0 8px var(--mui-palette-secondary-lightOpacity)'
          },
          '& .MuiSlider-thumb.Mui-active.Mui-focusVisible': {
            boxShadow: '0 0 0 13px var(--mui-palette-secondary-lightOpacity)'
          },
          '& .MuiSlider-thumbSizeSmall:hover, & .MuiSlider-thumbSizeSmall.Mui-focusVisible': {
            boxShadow: '0 0 0 7px var(--mui-palette-secondary-lightOpacity)'
          },
          '& .MuiSlider-thumbSizeSmall.Mui-active.Mui-focusVisible': {
            boxShadow: '0 0 0 10px var(--mui-palette-secondary-lightOpacity)'
          }
        }
      },
      {
        props: { color: 'error' },
        style: {
          '& .MuiSlider-rail': {
            color: 'var(--mui-palette-error-lightOpacity)'
          },
          '&.Mui-disabled': {
            opacity: 0.45,
            color: 'var(--mui-palette-error-main)'
          },
          '& .MuiSlider-thumb:hover, & .MuiSlider-thumb.Mui-focusVisible': {
            boxShadow: '0 0 0 8px var(--mui-palette-error-lightOpacity)'
          },
          '& .MuiSlider-thumb.Mui-active.Mui-focusVisible': {
            boxShadow: '0 0 0 13px var(--mui-palette-error-lightOpacity)'
          },
          '& .MuiSlider-thumbSizeSmall:hover, & .MuiSlider-thumbSizeSmall.Mui-focusVisible': {
            boxShadow: '0 0 0 7px var(--mui-palette-error-lightOpacity)'
          },
          '& .MuiSlider-thumbSizeSmall.Mui-active.Mui-focusVisible': {
            boxShadow: '0 0 0 10px var(--mui-palette-error-lightOpacity)'
          }
        }
      },
      {
        props: { color: 'warning' },
        style: {
          '& .MuiSlider-rail': {
            color: 'var(--mui-palette-warning-lightOpacity)'
          },
          '&.Mui-disabled': {
            opacity: 0.45,
            color: 'var(--mui-palette-warning-main)'
          },
          '& .MuiSlider-thumb:hover, & .MuiSlider-thumb.Mui-focusVisible': {
            boxShadow: '0 0 0 8px var(--mui-palette-warning-lightOpacity)'
          },
          '& .MuiSlider-thumb.Mui-active.Mui-focusVisible': {
            boxShadow: '0 0 0 13px var(--mui-palette-warning-lightOpacity)'
          },
          '& .MuiSlider-thumbSizeSmall:hover, & .MuiSlider-thumbSizeSmall.Mui-focusVisible': {
            boxShadow: '0 0 0 7px var(--mui-palette-warning-lightOpacity)'
          },
          '& .MuiSlider-thumbSizeSmall.Mui-active.Mui-focusVisible': {
            boxShadow: '0 0 0 10px var(--mui-palette-warning-lightOpacity)'
          }
        }
      },
      {
        props: { color: 'info' },
        style: {
          '& .MuiSlider-rail': {
            color: 'var(--mui-palette-info-lightOpacity)'
          },
          '&.Mui-disabled': {
            opacity: 0.45,
            color: 'var(--mui-palette-info-main)'
          },
          '& .MuiSlider-thumb:hover, & .MuiSlider-thumb.Mui-focusVisible': {
            boxShadow: '0 0 0 8px var(--mui-palette-info-lightOpacity)'
          },
          '& .MuiSlider-thumb.Mui-active.Mui-focusVisible': {
            boxShadow: '0 0 0 13px var(--mui-palette-info-lightOpacity)'
          },
          '& .MuiSlider-thumbSizeSmall:hover, & .MuiSlider-thumbSizeSmall.Mui-focusVisible': {
            boxShadow: '0 0 0 7px var(--mui-palette-info-lightOpacity)'
          },
          '& .MuiSlider-thumbSizeSmall.Mui-active.Mui-focusVisible': {
            boxShadow: '0 0 0 10px var(--mui-palette-info-lightOpacity)'
          }
        }
      },
      {
        props: { color: 'success' },
        style: {
          '& .MuiSlider-rail': {
            color: 'var(--mui-palette-success-lightOpacity)'
          },
          '&.Mui-disabled': {
            opacity: 0.45,
            color: 'var(--mui-palette-success-main)'
          },
          '& .MuiSlider-thumb:hover, & .MuiSlider-thumb.Mui-focusVisible': {
            boxShadow: '0 0 0 8px var(--mui-palette-success-lightOpacity)'
          },
          '& .MuiSlider-thumb.Mui-active.Mui-focusVisible': {
            boxShadow: '0 0 0 13px var(--mui-palette-success-lightOpacity)'
          },
          '& .MuiSlider-thumbSizeSmall:hover, & .MuiSlider-thumbSizeSmall.Mui-focusVisible': {
            boxShadow: '0 0 0 7px var(--mui-palette-success-lightOpacity)'
          },
          '& .MuiSlider-thumbSizeSmall.Mui-active.Mui-focusVisible': {
            boxShadow: '0 0 0 10px var(--mui-palette-success-lightOpacity)'
          }
        }
      }
    ],
    styleOverrides: {
      root: ({ ownerState }) => ({
        ...(ownerState.orientation === 'horizontal'
          ? ownerState.size !== 'small'
            ? { blockSize: 4 }
            : { blockSize: 4 }
          : ownerState.size !== 'small'
            ? { inlineSize: 4 }
            : { inlineSize: 4 })
      }),
      thumb: ({ ownerState }) => ({
        ...(ownerState.size === 'small'
          ? {
              blockSize: 14,
              inlineSize: 14,
              border: '2px solid currentColor'
            }
          : {
              blockSize: 22,
              inlineSize: 22,
              border: '4px solid currentColor'
            }),
        backgroundColor: 'var(--mui-palette-common-white)',
        ...(!ownerState.disabled && {
          boxShadow: 'var(--mui-customShadows-sm)'
        }),
        '&:before': {
          boxShadow: 'none'
        },
        '&:after': {
          ...(ownerState.size === 'small'
            ? {
                blockSize: 28,
                inlineSize: 28
              }
            : {
                blockSize: 38,
                inlineSize: 38
              })
        }
      }),
      rail: {
        opacity: 1
      },
      valueLabel: ({ theme }) => ({
        padding: theme.spacing(0.5, 2.5),
        color: 'var(--mui-palette-customColors-tooltipText)',
        borderRadius: 'var(--mui-shape-borderRadius)',
        backgroundColor: 'var(--mui-palette-Tooltip-bg)',
        '&:before': {
          display: 'none'
        }
      }),
      trackInverted: {
        '& .MuiSlider-rail': {
          backgroundColor: 'var(--mui-palette-primary-main)'
        }
      }
    }
  }
}

export default slider
