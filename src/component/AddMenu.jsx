import React, {useRef} from 'react'

const AddMenu=({onAdd})=> {
    const inputRef = useRef(null)

    const handleSubmit = (e) =>{
        e.preventDefault()

        const name = inputRef.current.value.trim()

        if(!name){
            inputRef.current.focus()
            return;
        }

        onAdd(name)
    }

    return (
    <form className='add' onSubmit={handleSubmit}>
        <input type="text"
        ref={inputRef}
        placeholder='좋아하는 색상을 추가해요(예, 검정)'
        />
        <button type='submit'>추가</button>
    </form>
  )
}

export default AddMenu