import React, {useState}from 'react'
import { useNavigate } from 'react-router-dom'

const HeaderForm = () => {
    const [categotry, setCategory] = useState("")
    const [id, setId] = useState("")
    const navigate = useNavigate()

    const handleSubmit = (e) =>{
        e.preventDefault()
        navigate(`/${categotry}/${id}`)
        // localhost:3000/people/2
    }
    
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="category"> Search for: </label>
            <select name="category" id="category" onChange={e => setCategory(e.target.value)} value={categotry}>
                <option hidden>Choose</option>
                <option value="people">People</option>
                <option value="planets">Planets</option>
            </select>
            <label htmlFor="id"> ID: </label>
            <input type="number" name='id' onChange={e => setId(e.target.value)} value={id} />

            <button type='submit'> Search </button>
        </form>
    </div>
  )
}

export default HeaderForm;