import React from 'react';
import Nav from './Nav';
import PrepTable from './PrepTable';


function ViewPage() {
  return (
    <div className="ViewPage">

      <Nav />

      <div className='toDo'>

        <h1 className='title'>Prep</h1>

        <form className='prepInput'>

          <label hmtlFor='task'>Task:</label>
          <input type='text' name='task'></input>

          <label hmtlFor='recipe'>Recipe:</label>
          <input type='text' name='recipe'></input>

          <button type='submit'>add prep task</button>

        </form>

        <PrepTable/>

      </div>

      <div className='recipe'>

        <h1 className='title'>Pinned Recipes</h1>


      </div>

    </div>
  );
}

export default ViewPage;