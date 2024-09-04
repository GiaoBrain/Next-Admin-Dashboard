'use client'

// React Imports
import { useState } from 'react'

// MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Chip from '@mui/material/Chip'
import type { ButtonProps } from '@mui/material/Button'

// Type Imports
import type { ThemeColor } from '@core/types'

// Component Imports
import BillingCard from '@components/dialogs/billing-card'
import OpenDialogOnElementClick from '@components/dialogs/OpenDialogOnElementClick'

type DataType = {
  name: string
  imgSrc: string
  imgAlt: string
  cardCvv: string
  expiryDate: string
  cardNumber: string
  cardStatus?: string
  badgeColor?: ThemeColor
}

// Vars
const data: DataType[] = [
  {
    cardCvv: '587',
    name: 'Tom McBride',
    expiryDate: '12/24',
    imgAlt: 'Mastercard',
    badgeColor: 'primary',
    cardStatus: 'Primary',
    cardNumber: '5577 0000 5577 9865',
    imgSrc: '/images/logos/mastercard.png'
  },
  {
    cardCvv: '681',
    imgAlt: 'Visa card',
    expiryDate: '02/24',
    name: 'Mildred Wagner',
    cardNumber: '4532 3616 2070 5678',
    imgSrc: '/images/logos/visa.png'
  },
  {
    cardCvv: '3845',
    expiryDate: '08/20',
    badgeColor: 'error',
    cardStatus: 'Expired',
    name: 'Lester Jennings',
    imgAlt: 'American Express card',
    cardNumber: '3700 000000 00002',
    imgSrc: '/images/logos/american-express.png'
  }
]

const PaymentMethod = () => {
  // States
  const [creditCard, setCreditCard] = useState(0)

  const handleAddCard = () => {
    setCreditCard(-1)
  }

  const handleClickOpen = (index: number) => {
    setCreditCard(index)
  }

  // Vars
  const addButtonProps: ButtonProps = {
    variant: 'contained',
    children: 'Add Card',
    size: 'small',
    color: 'primary',
    startIcon: <i className='tabler-plus' />,
    onClick: handleAddCard
  }

  const editButtonProps = (index: number): ButtonProps => ({
    variant: 'tonal',
    children: 'Edit',
    size: 'small',
    onClick: () => handleClickOpen(index)
  })

  return (
    <>
      <Card>
        <CardHeader
          title='Payment Methods'
          action={<OpenDialogOnElementClick element={Button} elementProps={addButtonProps} dialog={BillingCard} />}
        />
        <CardContent className='flex flex-col gap-4'>
          {data.map((item, index) => (
            <div
              key={index}
              className='flex justify-between border rounded sm:items-center p-6 flex-col !items-start sm:flex-row gap-2'
            >
              <div className='flex flex-col items-start gap-2'>
                <img src={item.imgSrc} alt={item.imgAlt} height={25} />
                <div className='flex items-center gap-2'>
                  <Typography className='font-medium' color='text.primary'>
                    {item.name}
                  </Typography>
                  {item.cardStatus ? (
                    <Chip color={item.badgeColor} label={item.cardStatus} size='small' variant='tonal' />
                  ) : null}
                </div>
                <Typography>
                  {item.cardNumber && item.cardNumber.slice(0, -4).replace(/[0-9]/g, '*') + item.cardNumber.slice(-4)}
                </Typography>
              </div>
              <div className='flex flex-col gap-4'>
                <div className='flex items-center justify-end gap-4'>
                  <OpenDialogOnElementClick
                    element={Button}
                    elementProps={editButtonProps(index)}
                    dialog={BillingCard}
                    dialogProps={{ data: data[creditCard] }}
                  />
                  <Button variant='tonal' color='error' size='small'>
                    Delete
                  </Button>
                </div>
                <Typography variant='body2'>Card expires at {item.expiryDate}</Typography>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </>
  )
}

export default PaymentMethod
