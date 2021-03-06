type CenteredFormProps = {
  title: string
  subtitle: string
  children: any
}

const CenteredForm = (props: CenteredFormProps) => {
  const { title, subtitle, children } = props

  return (
    <div className="flex flex-col bg-white border border-gray-200 p-8 w-full max-w-xl">
      <div className="flex flex-col w-full mb-4">
        <div className="text-xs uppercase">{title}</div>
        <div className="text-lg font-bold">{subtitle}</div>
      </div>
      {children}
    </div>
  )
}

export default CenteredForm
