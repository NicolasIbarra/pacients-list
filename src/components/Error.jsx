function Error({message}) {
  return (
    <div className="bg-red-200 text-red-500 font-bold uppercase text-sm text-center py-4 
                    mb-5 mx-10 rounded-md"
    >
        <p>{message}</p>
    </div>
  )
}

export default Error