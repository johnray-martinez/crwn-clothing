import { SpinnerOverlay, SpinnerContainer } from './index.styles'

type Spinner = {
  width?: number, 
  height?: number, 
  hasOverlay?: boolean
}

const Spinner = ({ 
  width = 50, 
  height = 50, 
  hasOverlay = true 
}: Spinner) => {
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