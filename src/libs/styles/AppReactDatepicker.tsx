'use client'

// React Imports
import type { ComponentProps } from 'react'

// MUI imports
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import type { BoxProps } from '@mui/material/Box'

// Third-party Imports
import ReactDatePickerComponent from 'react-datepicker'

// Styles
import 'react-datepicker/dist/react-datepicker.css'

type Props = ComponentProps<typeof ReactDatePickerComponent> & {
  boxProps?: BoxProps
}

// Styled Components
const StyledReactDatePicker = styled(Box)<BoxProps>(({ theme }) => {
  return {
    '& .react-datepicker-popper': {
      zIndex: 20,
      paddingTop: `${theme.spacing(0.5)} !important`
    },
    '& .react-datepicker-wrapper': {
      width: '100%'
    },
    '& .react-datepicker__triangle': {
      display: 'none'
    },
    '& .react-datepicker': {
      color: theme.palette.text.primary,
      borderRadius: theme.shape.borderRadius,
      fontFamily: theme.typography.fontFamily,
      backgroundColor: theme.palette.background.paper,
      boxShadow: 'var(--mui-customShadows-md)',
      border: 'none',
      '& .react-datepicker__header': {
        padding: 0,
        border: 'none',
        fontWeight: 'normal',
        backgroundColor: theme.palette.background.paper,
        '& .react-datepicker__current-month, &.react-datepicker-year-header': {
          textAlign: 'left'
        },
        '&:not(.react-datepicker-year-header)': {
          '& + .react-datepicker__month, & + .react-datepicker__year': {
            margin: theme.spacing(2),
            marginTop: theme.spacing(4.5)
          }
        },
        '&.react-datepicker-year-header': {
          '& + .react-datepicker__month, & + .react-datepicker__year': {
            margin: theme.spacing(2),
            marginTop: theme.spacing(0)
          }
        }
      },
      '& > .react-datepicker__navigation': {
        top: 13,
        borderRadius: '50%',
        backgroundColor: 'var(--mui-palette-action-selected)',
        '&.react-datepicker__navigation--previous': {
          width: 30,
          height: 30,
          border: 'none',
          top: 12,
          ...(theme.direction === 'ltr' ? { left: 'auto', right: '57px' } : { right: 15 }),
          backgroundImage: `${"url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' style='width:24px;height:24px' viewBox='0 0 24 24'%3E%3Cpath fill='currentColor' d='M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z' /%3E%3C/svg%3E\")".replace(
            'currentColor',
            theme.palette.mode === 'dark' ? 'rgb(231 227 252 / 0.7)' : 'rgb(46 38 61 / 0.7)'
          )}`,
          '& .react-datepicker__navigation-icon': {
            display: 'none'
          },
          '&:has(+ .react-datepicker__navigation--next--with-time)':
            theme.direction === 'ltr' ? { right: 177 } : { left: 177 }
        },
        '&.react-datepicker__navigation--next': {
          width: 30,
          height: 30,
          border: 'none',
          top: 12,
          ...(theme.direction === 'ltr' ? { right: 15 } : { left: 15 }),
          backgroundImage: `${"url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' style='width:24px;height:24px' viewBox='0 0 24 24'%3E%3Cpath fill='currentColor' d='M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z' /%3E%3C/svg%3E\")".replace(
            'currentColor',
            theme.palette.mode === 'dark' ? 'rgb(231 227 252 / 0.7)' : 'rgb(46 38 61 / 0.7)'
          )}`,
          '& .react-datepicker__navigation-icon': {
            display: 'none'
          }
        },
        '&.react-datepicker__navigation--next--with-time': theme.direction === 'ltr' ? { right: 135 } : { left: 135 },
        '&:focus, &:active': {
          outline: 0
        }
      },
      '& .react-datepicker__current-month, & .react-datepicker-year-header': {
        ...theme.typography.subtitle1,
        lineHeight: 2,
        paddingBlockStart: theme.spacing(3),
        paddingBlockEnd: theme.spacing(4.5),
        paddingInline: theme.spacing(4),
        color: 'var(--mui-palette-text-primary)'
      },
      '& .react-datepicker__day-name': {
        margin: 0,
        width: '2.25rem',
        ...theme.typography.subtitle2,
        color: theme.palette.text.primary
      },
      '& .react-datepicker__day-names': {
        marginBottom: 0
      },
      '& .react-datepicker__day': {
        margin: 0,
        width: '2.25rem',
        borderRadius: '50%',
        lineHeight: '2.25rem',
        color: theme.palette.text.primary,
        fontSize: theme.typography.body1.fontSize,
        '&.react-datepicker__day--selected.react-datepicker__day--in-selecting-range.react-datepicker__day--selecting-range-start, &.react-datepicker__day--selected.react-datepicker__day--range-start.react-datepicker__day--in-range, &.react-datepicker__day--range-start':
          {
            borderRadius: '18px 0px 0px 18px;',
            color: `${theme.palette.common.white} !important`,
            backgroundColor: `${theme.palette.primary.main} !important`
          },
        '&.react-datepicker__day--range-end.react-datepicker__day--in-range': {
          borderRadius: '0px 18px 18px 0px',
          color: `${theme.palette.common.white} !important`,
          backgroundColor: `${theme.palette.primary.main} !important`
        },
        '&:focus, &:active': {
          outline: 0
        },
        '&.react-datepicker__day--outside-month, &.react-datepicker__day--disabled:not(.react-datepicker__day--selected)':
          {
            color: theme.palette.text.disabled,
            '&:hover': {
              backgroundColor: 'transparent'
            }
          },
        '&.react-datepicker__day--highlighted, &.react-datepicker__day--highlighted:hover': {
          color: theme.palette.success.main,
          backgroundColor: 'var(--mui-palette-success-lightOpacity)',
          '&.react-datepicker__day--selected': {
            backgroundColor: `${theme.palette.primary.main} !important`
          }
        }
      },
      '&:has(.react-datepicker__day--in-range)': {
        '& > .react-datepicker__navigation': {
          '&.react-datepicker__navigation--previous': {
            ...(theme.direction === 'ltr' ? { left: 15 } : { right: 15 })
          }
        },
        '& .react-datepicker__header': {
          '& .react-datepicker__current-month': {
            textAlign: 'center'
          }
        }
      },
      '& .react-datepicker__day--in-range, & .react-datepicker__day--in-selecting-range': {
        borderRadius: 0,
        color: `${theme.palette.primary.main} !important`,
        backgroundColor: 'var(--mui-palette-primary-lightOpacity) !important'
      },
      '& .react-datepicker__day--today': {
        fontWeight: 'normal',
        '&:not(.react-datepicker__day--selected):not(:empty)': {
          color: theme.palette.primary.main,
          backgroundColor: `rgb(${theme.vars.palette.primary.mainChannel} / 0.16)`,
          '&:hover': {
            backgroundColor: `rgb(${theme.vars.palette.primary.mainChannel} / 0.24)`
          },
          '&.react-datepicker__day--keyboard-selected': {
            backgroundColor: `rgb(${theme.vars.palette.primary.mainChannel} / 0.16)`,
            '&:hover': {
              backgroundColor: `rgb(${theme.vars.palette.primary.mainChannel} / 0.16)`
            }
          }
        }
      },
      '& .react-datepicker__month-text--today': {
        fontWeight: 'normal',
        '&:not(.react-datepicker__month-text--selected)': {
          lineHeight: '2.125rem',
          color: theme.palette.primary.main,
          border: `1px solid ${theme.palette.primary.main}`,
          '&:hover': {
            backgroundColor: `rgb(${theme.vars.palette.primary.mainChannel} / 0.04)`
          }
        }
      },
      '& .react-datepicker__year-text--today': {
        fontWeight: 'normal',
        '&:not(.react-datepicker__year-text--selected)': {
          lineHeight: '2.125rem',
          color: theme.palette.primary.main,
          border: `1px solid ${theme.palette.primary.main}`,
          '&:hover': {
            backgroundColor: `rgb(${theme.vars.palette.primary.mainChannel} / 0.04)`
          },
          '&.react-datepicker__year-text--keyboard-selected': {
            color: theme.palette.primary.main,
            backgroundColor: `rgb(${theme.vars.palette.primary.mainChannel} / 0.06)`,
            '&:hover': {
              color: theme.palette.primary.main,
              backgroundColor: `rgb(${theme.vars.palette.primary.mainChannel} / 0.06)`
            }
          }
        }
      },
      '& .react-datepicker__day--keyboard-selected': {
        '&:not(.react-datepicker__day--in-range)': {
          color: theme.palette.primary.main,
          backgroundColor: 'rgb(var(--mui-palette-primary-mainChannel) / 0.16)',
          '&:hover': {
            backgroundColor: 'rgb(var(--mui-palette-primary-mainChannel) / 0.16)'
          }
        }
      },
      '& .react-datepicker__month-text--keyboard-selected': {
        '&:not(.react-datepicker__month--in-range)': {
          color: theme.palette.primary.main,
          backgroundColor: 'rgb(var(--mui-palette-primary-mainChannel) / 0.16)',
          '&:hover': {
            backgroundColor: 'rgb(var(--mui-palette-primary-mainChannel) / 0.16)'
          }
        }
      },
      '& .react-datepicker__year-text--keyboard-selected, & .react-datepicker__quarter-text--keyboard-selected': {
        color: theme.palette.primary.main,
        backgroundColor: 'rgb(var(--mui-palette-primary-mainChannel) / 0.16)'
      },
      '& .react-datepicker__day--selected, & .react-datepicker__month-text--selected, & .react-datepicker__year-text--selected, & .react-datepicker__quarter-text--selected':
        {
          color: `${theme.palette.common.white} !important`,
          backgroundColor: `${theme.palette.primary.main} !important`,
          boxShadow: 'var(--mui-customShadows-primary-sm)',
          '&:hover': {
            backgroundColor: `${theme.palette.primary.dark} !important`
          }
        },
      '& .react-datepicker__header__dropdown': {
        '& .react-datepicker__month-dropdown-container:not(:last-child)': {
          marginRight: theme.spacing(8)
        },
        '& .react-datepicker__month-dropdown-container, & .react-datepicker__year-dropdown-container': {
          marginBottom: theme.spacing(4)
        },
        '& .react-datepicker__month-read-view--selected-month, & .react-datepicker__year-read-view--selected-year': {
          fontSize: '0.875rem',
          marginRight: theme.spacing(1),
          color: theme.palette.text.primary
        },
        '& .react-datepicker__month-read-view:hover .react-datepicker__month-read-view--down-arrow, & .react-datepicker__year-read-view:hover .react-datepicker__year-read-view--down-arrow':
          {
            borderColor: theme.palette.text.primary
          },
        '& .react-datepicker__month-read-view--down-arrow, & .react-datepicker__year-read-view--down-arrow': {
          top: 4,
          borderColor: theme.palette.text.secondary
        },
        '& .react-datepicker__month-dropdown, & .react-datepicker__year-dropdown': {
          padding: theme.spacing(2),
          borderColor: theme.palette.divider,
          borderRadius: theme.shape.borderRadius,
          backgroundColor: theme.palette.background.paper,
          boxShadow: 'var(--mui-customShadows-lg)'
        },
        '& .react-datepicker__month-option, & .react-datepicker__year-option': {
          ...theme.typography.body1,
          padding: theme.spacing(1.5, 4),
          borderRadius: theme.shape.borderRadius,
          marginBlockEnd: theme.spacing(0.5),
          '&:hover': {
            backgroundColor: theme.palette.action.hover
          }
        },
        '& .react-datepicker__month-option.react-datepicker__month-option--selected_month': {
          color: 'var(--mui-palette-primary-main)',
          backgroundColor: 'var(--mui-palette-primary-lightOpacity)',
          '&:hover': {
            backgroundColor: 'var(--mui-palette-primary-lightOpacity)'
          },
          '& .react-datepicker__month-option--selected': {
            display: 'none'
          }
        },
        '& .react-datepicker__year-option.react-datepicker__year-option--selected_year': {
          color: 'var(--mui-palette-primary-main)',
          backgroundColor: 'var(--mui-palette-primary-lightOpacity)',
          '&:hover': {
            backgroundColor: 'var(--mui-palette-primary-lightOpacity)'
          },
          '& .react-datepicker__year-option--selected': {
            display: 'none'
          }
        },
        '& .react-datepicker__year-option': {
          // TODO: Remove some of the following styles for arrow in Year dropdown when react-datepicker give arrows in Year dropdown
          '& .react-datepicker__navigation--years-upcoming': {
            width: 9,
            height: 9,
            borderStyle: 'solid',
            borderWidth: '3px 3px 0 0',
            transform: 'rotate(-45deg)',
            borderTopColor: theme.palette.text.secondary,
            borderRightColor: theme.palette.text.secondary,
            margin: `${theme.spacing(2.75)} auto ${theme.spacing(0)}`
          },
          '&:hover .react-datepicker__navigation--years-upcoming': {
            borderTopColor: theme.palette.text.primary,
            borderRightColor: theme.palette.text.primary
          },
          '& .react-datepicker__navigation--years-previous': {
            width: 9,
            height: 9,
            borderStyle: 'solid',
            borderWidth: '0 0 3px 3px',
            transform: 'rotate(-45deg)',
            borderLeftColor: theme.palette.text.secondary,
            borderBottomColor: theme.palette.text.secondary,
            margin: `${theme.spacing(0)} auto ${theme.spacing(2.75)}`
          },
          '&:hover .react-datepicker__navigation--years-previous': {
            borderLeftColor: theme.palette.text.primary,
            borderBottomColor: theme.palette.text.primary
          }
        }
      },
      '& .react-datepicker__week-number': {
        margin: 0,
        fontWeight: 500,
        width: '2.25rem',
        lineHeight: '2.25rem',
        fontSize: theme.typography.body2.fontSize,
        color: theme.palette.text.primary
      },
      '& .react-datepicker__month-text, & .react-datepicker__year-text, & .react-datepicker__quarter-text': {
        margin: 0,
        alignItems: 'center',
        fontSize: theme.typography.body1.fontSize,
        lineHeight: '2rem',
        display: 'inline-flex',
        justifyContent: 'center',
        borderRadius: theme.shape.borderRadius,
        '&:focus, &:active': {
          outline: 0
        }
      },
      '& .react-datepicker__year-wrapper': {
        maxWidth: 205,
        justifyContent: 'center'
      },
      '& .react-datepicker__input-time-container': {
        display: 'flex',
        alignItems: 'center',
        ...(theme.direction === 'rtl' ? { flexDirection: 'row-reverse' } : {})
      },
      '& .react-datepicker__today-button': {
        borderTop: 0,
        borderRadius: '1rem',
        margin: theme.spacing(0, 4, 4),
        color: theme.palette.common.white,
        backgroundColor: theme.palette.primary.main
      },

      // Time Picker
      '&:not(.react-datepicker--time-only)': {
        '& .react-datepicker__time-container': {
          borderLeftColor: theme.palette.divider,
          [theme.breakpoints.down('sm')]: {
            width: '5.5rem'
          },
          [theme.breakpoints.up('sm')]: {
            width: '7.4375rem'
          }
        }
      },
      '&.react-datepicker--time-only': {
        width: '7.4375rem',
        '& .react-datepicker__time-container': {
          width: '7.4375rem'
        }
      },
      '& .react-datepicker__time-container': {
        padding: theme.spacing(0.75, 0),
        '& .react-datepicker-time__header': {
          ...theme.typography.subtitle2,
          marginBottom: theme.spacing(3.5),
          marginTop: theme.spacing(3.5),
          color: theme.palette.text.primary
        },

        '& .react-datepicker__time': {
          background: theme.palette.background.paper,
          '& .react-datepicker__time-box .react-datepicker__time-list-item--disabled': {
            pointerEvents: 'none',
            color: theme.palette.text.disabled,
            '&.react-datepicker__time-list-item--selected': {
              fontWeight: 'normal',
              backgroundColor: theme.palette.action.disabledBackground
            }
          }
        },

        '& .react-datepicker__time-list-item': {
          height: 'auto !important',
          padding: `${theme.spacing(1.75, 0)} !important`,
          marginLeft: theme.spacing(4.25),
          marginRight: theme.spacing(2.2),
          ...theme.typography.body1,
          color: theme.palette.text.primary,
          borderRadius: theme.shape.borderRadius,
          '&:focus, &:active': {
            outline: 0
          },
          '&:hover': {
            backgroundColor: `${theme.palette.action.hover} !important`
          },
          '&.react-datepicker__time-list-item--selected:not(.react-datepicker__time-list-item--disabled)': {
            fontWeight: 'normal',
            color: `${theme.palette.common.white} !important`,
            backgroundColor: `${theme.palette.primary.main} !important`,
            boxShadow: 'var(--mui-customShadows-xs)'
          }
        },

        '& .react-datepicker__time-box': {
          width: '100%'
        },
        '& .react-datepicker__time-list': {
          '&::-webkit-scrollbar': {
            width: 8
          },

          /* Track */
          '&::-webkit-scrollbar-track': {
            background: theme.palette.background.paper
          },

          /* Handle */
          '&::-webkit-scrollbar-thumb': {
            borderRadius: 10,
            background: '#aaa'
          },

          /* Handle on hover */
          '&::-webkit-scrollbar-thumb:hover': {
            background: '#999'
          }
        }
      },
      '& .react-datepicker__day:hover, & .react-datepicker__month-text:hover, & .react-datepicker__quarter-text:hover, & .react-datepicker__year-text:hover':
        {
          backgroundColor: theme.palette.action.hover
        },
      '[data-skin="bordered"] &': {
        boxShadow: 'none',
        border: `1px solid var(--mui-palette-divider)`
      }
    },
    '& .react-datepicker__close-icon': {
      top: 10,
      paddingRight: theme.spacing(4),
      ...(theme.direction === 'rtl' ? { right: 0, left: 'auto' } : {}),
      '&:after': {
        width: 'unset',
        height: 'unset',
        fontSize: '1.5rem',
        color: theme.palette.text.primary,
        backgroundColor: 'transparent !important'
      }
    }
  }
})

const AppReactDatepicker = (props: Props) => {
  // Props
  const { boxProps, ...rest } = props

  return (
    <StyledReactDatePicker {...boxProps}>
      <ReactDatePickerComponent {...rest} />
    </StyledReactDatePicker>
  )
}

export default AppReactDatepicker
