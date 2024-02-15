import "./Exitem.css"

const Exitem=({expense,handleDelete,handleEdit})=> {
  
        return (
            <div>
                <li className='item'>
                    <div className='info'>
                        <span className='expense'>{expense.charge}</span>
                        <span className='amount'>{expense.amount}원</span>
                    </div>
                
                <div style={{display:'flex'}}>
                <button className='btn edit-btn'
                onClick={()=>handleEdit(expense.id)}
                >수정</button>
                    <button className='btn clear-btn'
                    onClick={()=>handleDelete(expense.id)}>
                        삭제</button>
                </div>
                </li>
            </div>
        )
    
}

export default Exitem