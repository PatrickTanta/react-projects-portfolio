import { FC } from 'react'
import type { ListOfTodos, TodoId, Todo as TodoType } from '../types'
import { Todo } from './Todo'

interface Props {
    todos: ListOfTodos
    onRemoveTodo: ({ id }: TodoId) => void
    onToggleCompleteTodo: ({
        id,
        completed
    }: Pick<TodoType, 'id' | 'completed'>) => void
}

export const Todos: FC<Props> = ({
    todos,
    onRemoveTodo,
    onToggleCompleteTodo
}) => {
    return (
        <ul>
            {todos.map((todo) => (
                <li
                    key={todo.id}
                    className={`${todo.completed ? 'completed' : ''}`}
                >
                    <Todo
                        key={todo.id}
                        id={todo.id}
                        title={todo.title}
                        completed={todo.completed}
                        onRemoveTodo={onRemoveTodo}
                        onToggleCompleteTodo={onToggleCompleteTodo}
                    ></Todo>
                    {todo.title}
                </li>
            ))}
        </ul>
    )
}
