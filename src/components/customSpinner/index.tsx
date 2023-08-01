import { BounceLoader } from "react-spinners"

const override: React.CSSProperties = {
  display: "block",
  margin: "8rem auto",
}

interface CustomSpinnerProps {
  isLoading: boolean
}

export const CustomSpinner = ({isLoading}: CustomSpinnerProps) => {
  return (
    <div style={{
      margin: "0 auto",
      width: "500px",
      textAlign: "center",
      color: "var(--color-grey-800)"
    }}>
    <BounceLoader 
      cssOverride={override}
      color="#3e96a9"
      loading={isLoading}
      size={150}
      aria-label="Loading-Spinner"
    />
    <p>Estamos preparando tudo para você, aguarde...</p>
    </div>
  )
}