import React from 'react';

type PropsType = {
    truck: string
    truck2?: number
    truck3?: boolean
    // tasks: Array<TaskType>
    tasks: TaskType[]
}

type TaskType = {
    id: number,
    title: string
    isDone: boolean
}

const Todolist = (props: PropsType) => {
    return (
        <div>
            <div className = 'todolist'>
                <h3>{props.truck}</h3>
                <h3>{props.truck2}</h3>
                {/*<h3>{props.truck3}</h3>*/}

                <div>
                    <input />
                    <button>+</button>
                </div>
                <ul>
                    {props.tasks.map((el) => {

                        return (
                            <li>
                                <input type = "checkbox" checked = {el.isDone} />
                                <span>{el.title}</span>
                            </li>
                        )
                    })}
                </ul>
                <div>
                    <button>All</button>
                    <button>Active</button>
                    <button>Completed</button>
                </div>
            </div>
        </div>
    );
};

export default Todolist;
