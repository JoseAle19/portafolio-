
export const Badge = ({children}) => {
  return (
    <span className="flex  justify-center items-center bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
        {children}
    </span>

  )
}