import { SpinnerOverlay, SpinnerContainer } from './index.styles'

type SpinnerProps = {
  width?: number, 
  height?: number, 
  hasOverlay?: boolean
}

const Spinner = ({ 
  width = 50, 
  height = 50, 
  hasOverlay = true 
}: SpinnerProps) => {
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