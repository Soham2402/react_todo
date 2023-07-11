import './styles.css'

export default function App(){
  return (

    <>
      <form className='new-item-form'>
        <div className='form-row'>
          <label htmlFor='item'>New item</label>
          <input type="text" name="item" id="item" />
        </div>
        <div className='btn'>Add</div>
      </form>

      <h1 className='header'>Todo List</h1>
      <ul className='list'>
         
        <li>
          <label>
            <input type='checkbox'/>
            item 2
          </label>
          <btn className = 'btn btn-danger'>Delete</btn>
        </li>

        <li>
          <label>
            <input type='checkbox'/>
            Item 1
          </label>
          <btn className = 'btn btn-danger'>Delete</btn>
        </li>
      </ul>
    </>

  )
}