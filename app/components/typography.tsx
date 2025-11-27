interface content {
    text:string
    className?:string
}

export function Large({text,className}:content) {
  return (
    <h1 className={`scroll-m-20 text-4xl font-extrabold tracking-tight text-balance ${className}`}>
      {text}
    </h1>
  )
}

export function Small({text,className}:content) {
  return (
    <p className={`leading-7 not-first:mt-6 ${className}`}>
      {text}
    </p>
  )
}


