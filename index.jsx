import React from 'react'

const classes = {
  circleShadow: {
    position: 'fixed',
    borderRadius: '69vh',
    boxShadow: 'inset 0 0 3rem rgba(0, 0, 0, 0.87)',
    width: '101vh',
    height: '101vh',
    pointerEvents: 'none',
    marginTop: '7px',
    zIndex: 1,
    marginLeft: '1px'
  },
  svgContainer: {
    height: '100vh',
    width: '100vw',
    overflow: 'hidden',
    position: 'fixed',
    pointerEvents: 'none',
    zIndex: 100
  },
  svgStyle: {
    height: '800vh',
    minWidth: '800vh',
    position: 'relative',
    left: '0vw',
    top: '0',
    overflow: 'hidden',
    pointerEvents: 'none'
  }
}

export default ({ cutoutColor = 'whitesmoke', circlePercent = 100, offsetY = '50%', offsetX = '50%' }) =>
  <React.Fragment>
    <div style={classes.svgContainer} >
      <svg
        style={classes.svgStyle}
        viewBox='0 0 100 100'>
        <defs>
          <mask id='mask'>
            <rect fill='#FFF' height='100' width='100' />
            <circle cx={offsetX} cy={offsetY} r={`${circlePercent * 0.06}%`} />
          </mask>
        </defs>
        <rect height='100' mask='url(#mask)' fill={cutoutColor} fillOpacity='1' width='100' />
      </svg>
    </div>
    <div classes={classes.circleShadow} />
  </React.Fragment>
