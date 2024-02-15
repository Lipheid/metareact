import './ExList.css'
import Exitem from './Exitem'

const ExList = ({ expenses, handleDelete,handleEdit }) => {
    return (
        <>
            <ul className='list'>
                {expenses.map(expense => {
                    return (
                        <Exitem
                            expense={expense}
                            key={expense.id}
                            handleDelete={handleDelete}
                            handleEdit={handleEdit}
                        />
                    )
                })}
            </ul>

        </>
    )
}


export default ExList