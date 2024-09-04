'use client'

// React Imports
import { useState } from 'react'

// MUI Imports
import Badge from '@mui/material/Badge'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { useTheme } from '@mui/material/styles'

// Third-party Components
import classnames from 'classnames'
import { useKeenSlider } from 'keen-slider/react'
import type { KeenSliderPlugin } from 'keen-slider/react'

// Components Imports
import CustomAvatar from '@core/components/mui/Avatar'

import AppKeenSlider from '@/libs/styles/AppKeenSlider'

type DataType = {
  img: string
  title: string
  details: { [key: string]: string }
}

// Vars
const data: DataType[] = [
  {
    title: 'Traffic',
    img: '/images/cards/graphic-illustration-1.png',
    details: {
      Sessions: '28%',
      'Page Views': '3.1k',
      Leads: '1.2k',
      Conversions: '12%'
    }
  },
  {
    title: 'Spending',
    img: '/images/cards/graphic-illustration-2.png',
    details: {
      Spend: '12h',
      Orders: '18',
      Order: '127',
      Items: '2.3k'
    }
  },
  {
    title: 'Revenue Sources',
    img: '/images/cards/graphic-illustration-3.png',
    details: {
      Direct: '268',
      Organic: '890',
      Referral: '62',
      Campaign: '1.2k'
    }
  }
]

const Slides = () => {
  return (
    <>
      {data.map((slide: DataType, index: number) => {
        return (
          <div key={index} className={classnames('keen-slider__slide p-6 pbe-3 is-full')}>
            <Typography variant='h5' className='mbe-0.5 text-[var(--mui-palette-common-white)]'>
              Website Analytics
            </Typography>
            <Typography variant='subtitle2' className='mbe-3 text-[var(--mui-palette-common-white)]'>
              Total 28.5% Conversion Rate
            </Typography>
            <Grid container spacing={4} className='relative'>
              <Grid item xs={12} sm={8} className='order-2 sm:order-1'>
                <div className='flex flex-col gap-4 pbs-5 sm:plb-6'>
                  <Typography className='font-medium text-[var(--mui-palette-common-white)]'>{slide.title}</Typography>
                  <Grid container spacing={4}>
                    {Object.keys(slide.details).map((key: string, index: number) => {
                      return (
                        <Grid item key={index} xs={6}>
                          <div className='flex items-center gap-0.5'>
                            <CustomAvatar
                              color='primary'
                              variant='rounded'
                              className='font-medium mie-2 text-white bg-[var(--mui-palette-primary-dark)] bs-[30px] is-12'
                            >
                              {slide.details[key]}
                            </CustomAvatar>
                            <Typography noWrap className='text-[var(--mui-palette-common-white)]'>
                              {key}
                            </Typography>
                          </div>
                        </Grid>
                      )
                    })}
                  </Grid>
                </div>
              </Grid>
              <Grid item xs={12} sm={4} className='flex justify-center order-1 sm:order-2'>
                <img
                  src={slide.img}
                  height={150}
                  className='max-bs-[150px] md:bs-[120px] xl:bs-[150px] drop-shadow-[0_4px_60px_rgba(0,0,0,0.5)] sm:absolute bottom-3 end-0'
                />
              </Grid>
            </Grid>
          </div>
        )
      })}
    </>
  )
}

const WebsiteAnalyticsSlider = () => {
  // States
  const [loaded, setLoaded] = useState<boolean>(false)
  const [currentSlide, setCurrentSlide] = useState<number>(0)

  // Hooks
  const theme = useTheme()

  const ResizePlugin: KeenSliderPlugin = slider => {
    const observer = new ResizeObserver(function () {
      slider.update()
    })

    slider.on('created', () => {
      observer.observe(slider.container)
    })
    slider.on('destroyed', () => {
      observer.unobserve(slider.container)
    })
  }

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      rtl: theme.direction === 'rtl',
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel)
      },
      created() {
        setLoaded(true)
      }
    },
    [ResizePlugin]
  )

  return (
    <AppKeenSlider>
      <Card className='bg-primary'>
        <div ref={sliderRef} className='keen-slider relative'>
          {loaded && instanceRef.current && (
            <div className='swiper-dots absolute top-1 inline-end-6'>
              {[...Array(instanceRef.current.track.details.slides.length).keys()].map(idx => {
                return (
                  <Badge
                    key={idx}
                    variant='dot'
                    component='div'
                    className={classnames({
                      active: currentSlide === idx
                    })}
                    onClick={() => {
                      instanceRef.current?.moveToIdx(idx)
                    }}
                    sx={{
                      '& .MuiBadge-dot': {
                        width: '8px !important',
                        height: '8px !important',
                        backgroundColor: `${theme.palette.common.white} !important`,
                        opacity: 0.4
                      },
                      '&.active .MuiBadge-dot': {
                        opacity: 1
                      }
                    }}
                  ></Badge>
                )
              })}
            </div>
          )}
          <Slides />
        </div>
      </Card>
    </AppKeenSlider>
  )
}

export default WebsiteAnalyticsSlider
