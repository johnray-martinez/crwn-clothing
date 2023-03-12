import { SpinnerOverlay, SpinnerContainer } from './index.styles'

const Spinner = ({ 
  width = 50, 
  height = 50, 
  hasOverlay = true 
}) => {
  return(
    hasOverlay 
      ? <SpinnerOverlay>
          <SpinnerContainer 
            width={width} 
            height={height}
          />
        </SpinnerOverlay>
      : <SpinnerContainer 
          width={width} 
          height={height} 
        />
  )
}

export default Spinner;