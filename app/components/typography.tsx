interface content {
    text:string
}

export function Large({text}:content) {
  return (
    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-balance">
      {text}
    </h1>
  )
}

export function Small({text}:content) {
  return (
    <p className="leading-7 not-first:mt-6">
      {text}
    </p>
  )
}


