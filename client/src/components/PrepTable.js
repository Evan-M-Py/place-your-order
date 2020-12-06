import React, { useState } from 'react';


function PrepTable() {

    const [ array, setArray ] = useState(['x', 'x', 'x', 'x', 'x'])

    const tableCall = (x) => {



    };

    const displayCol = ( x,y ) => {

        switch(x,y) {
            case 'task':
                return (
                    <div className='tableCol'>

                        <div className='tableHeader'>

                            <h2>Task</h2>

                        </div>

                        {}

                    </div>)
                break;
            case 'amount':
                return (
                    <div className='tableCol'>

                        <div className='tableHeader'>

                            <h2>Recipe</h2>

                        </div>

                        <div className='cell'>{y.recipe}</div>

                    </div>)
                break;
            case 'date':
                return (
                    <div className='tableCol'>

                        <div className='tableHeader'>

                            <h2>Date</h2>

                        </div>

                        <div className='cell'>{y.date}</div>

                    </div>)
                break;
              default:
                break;
        }

    };

  return (
    <div className='prepTable'>

        {displayCol('task', array)}


        {displayCol('amount')}


        {displayCol('date')}

    </div>
  );
}

export default PrepTable;