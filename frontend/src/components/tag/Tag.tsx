import './Tag.sass'

function Tag({ text }: { text: string }) {
  return (
    <div className='tag'>{text}</div>
  )
}

export default Tag
