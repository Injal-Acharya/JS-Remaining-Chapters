const CreateTodo = async(todo) => {
    let options =  {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(todo),
    };

    let p = await fetch('https://jsonplaceholder.typicode.com/todos', options)
    let response = await p.text()
    return response
};

const getTodo = async (id) => {
    let response = await fetch('https://jsonplaceholder.typicode.com/todos/' + id)
    let r = await response.text()
    return r
};

const CallingFunc = async () => {
    let todo = {
        title: 'Injal has to complete the Javascript course',
        id: '201',
        userID: '8',
        completed: 'false'
    };

    let newTodo = await CreateTodo(todo)
    console.log(newTodo)
    console.log(await getTodo('1'))
}

CallingFunc();
