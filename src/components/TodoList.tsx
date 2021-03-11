import { ITodo } from './interfaces'

type TodoProps = {
    todos: ITodo[],
    onChange(id: number): void,
    onRemove(id: number): void
}

export const TodoList: React.FC<TodoProps> = ({todos, onChange, onRemove}) => {
    const removeHandler = (event: React.MouseEvent, id: number) => {
        event.preventDefault()
        onRemove(id)
    }

    return (
        <div className="todoList">
            <div className="container">
                <ul>    
                    {todos.map(todo => {
                        const classes = ['todo']
                        if (todo.completed) classes.push('completed')
                        return(
                            <li className={classes.join(' ')} key={todo.id}>
                                <label>
                                    <input type="checkbox" checked={todo.completed} onChange={() => onChange(todo.id)}/>
                                    <span>{todo.title}</span>
                                    <i className="material-icons red-text" onClick={(event) => removeHandler(event, todo.id)}>delete</i>
                                </label>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
        
    )
}