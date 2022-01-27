import { useQuery, useMutation } from '@apollo/client'
import { useState, useEffect } from 'react'
import { QUERY_ITEMS } from '../../utils/queries'
import { ADD_ITEM } from '../../utils/mutations'

const Home = () => {
  const [itemState, setItemState] = useState({
    text: '',
    items: []
  })

  const { loading, data } = useQuery(QUERY_ITEMS)
  const [addItem] = useMutation(ADD_ITEM)

  const handleInputChange = ({ target: { name, value } }) => setItemState({ ...itemState, [name]: value })

  const handleAddItem = async event => {
    event.preventDefault()
    try {
      const { data: { addItem: item } } = await addItem({
        variables: {
          text: itemState.text,
          isDone: false
        }
      })
      
      const items = JSON.parse(JSON.stringify(itemState.items))
      items.push(item)

      setItemState({ ...itemState, text: '', items })
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    if (data) {
      console.log(data)
      setItemState({ ...itemState, items: data.items })
    }
  }, [data])

  return (
    <>
    <h1>To-Do App</h1>
    <form>
      <p>
        <label htmlFor="item">item</label>
        <input 
        type="text" 
        name="text" 
        id="item"
        value={itemState.text}
        onChange={handleInputChange} />
      </p>
      <p>
        <button onClick={handleAddItem}>Add Item</button>
      </p>
    </form>
    <ul>
      {
        itemState.items.map(item => <li key={item._id}>{item.text} isDone: {`${item.isDone}`}</li>)
      }
    </ul>
    </>
  )

}

export default Home
