import { useMode } from '../../../context/AppContext'

const SubmitButton = () => {
  const { isSwapping, setIsSwapping, handleSubmitSwap } = useMode()

  return isSwapping ? (
    <button className="flex justify-center items-center gap-2 w-full h-12 bg-light-500 rounded-2xl text-dark-400 dark:text-white">
      <span className="">Loading</span>
      <div className="flex justify-center items-center bg-gradient-to-t from-light-500  to-dark-400 dark:to-white w-7 h-7 rounded-full animate-spin">
        <div className="bg-light-500 w-6 h-6 rounded-full" />
      </div>
    </button>
  ) : (
    <button
      className="w-full h-12 bg-light-500 rounded-2xl text-white dark:text-dark-400 hover:"
      onClick={() => {
        setIsSwapping(true)
        handleSubmitSwap()
      }}
    >
      CONFIRM SWAP
    </button>
  )
}

export default SubmitButton
