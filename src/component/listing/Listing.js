import React /* { useState } */ from 'react'
import items from '../items/items'

import './Listing.css'

import classNames from 'classnames'
import PropTypes from 'prop-types'

function Listing() {
  function selectCurrency(currency, value) {
    switch (currency) {
      case 'USD':
        return '$' + value
        break
      case 'EUR':
        return '€' + value
        break
      default:
        return value + ' gbp'
    }
  }

  function amount(value) {
    if (value <= 10) {
      return classNames('item-quantity', 'level-low')
    } else if (value > 10 && value <= 20) {
      return classNames('item-quantity', 'level-medium')
    } else if (value > 20) {
      return classNames('item-quantity', 'level-high')
    }
  }

  return (
    <div className='items-wrap'>
      {items
        .filter((item) => item.state === 'active')
        .map((item) => (
          <div className='item-list' key={item.listing_id}>
            <div className='item'>
              <div className='item-image'>
                <a href={item.url}>
                  <img src={item.MainImage.url_570xN} alt='/' />
                </a>
              </div>
              <div className='item-details'>
                <p className='item-title'>{item.title.length < 50 ? item.title : item.title.substr(0, 51) + '...'}</p>
                <p className='item-price'>{selectCurrency(item.currency_code, item.price)}</p>
                <p className={amount(item.quantity)}>{item.quantity}</p>
              </div>
            </div>
          </div>
        ))}
    </div>
  )
}

/* Listing.defaultProps = {
  img: errorPhoto,
} */
Listing.propTypes = {
  img: PropTypes.string,
}

export default Listing
