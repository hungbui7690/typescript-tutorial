

### Local Storage

- Incorporate LocalStorage into the application.

## 10 - Tasks

- create Form, List components

types.ts

```ts
export type Task = {
  id: string;
  description: string;
  isCompleted: boolean;
};
```

index.tsx

```tsx
import { useEffect, useState } from 'react';
import Form from './Form';
import List from './List';
import { type Task } from './types';

function Component() {
  const [tasks, setTasks] = useState<Task[]>([]);

  return (
    <section>
      <Form />
      <List />
    </section>
  );
}
export default Component;
```

Form.tsx

```tsx
import { useState } from 'react';
import { type Task } from './types';

function Form() {
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!text) {
      alert('please enter a task');
      return;
    }
    //  add task
    setText('');
  };
  return (
    <form className='form task-form' onSubmit={handleSubmit}>
      <input
        type='text'
        className='form-input'
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button type='submit' className='btn'>
        add task
      </button>
    </form>
  );
}
export default Form;
```

index.tsx

```tsx
import { useEffect, useState } from 'react';
import Form from './Form';
import List from './List';
import { type Task } from './types';

function Component() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (task: Task) => {
    setTasks([...tasks, task]);
  };

  return (
    <div>
      <Form addTask={addTask} />
      <List />
    </div>
  );
}
export default Component;
```

Form.tsx

```tsx
import { useState } from 'react';
import { type Task } from './types';

type FormProps = {
  addTask: (task: Task) => void;
};

function Form({ addTask }: FormProps) {
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!text) {
      alert('please enter a task');
      return;
    }
    addTask({
      id: new Date().getTime().toString(),
      description: text,
      isCompleted: false,
    });
    setText('');
  };
  return (
    <form className='form task-form' onSubmit={handleSubmit}>
      <input
        type='text'
        className='form-input'
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button type='submit' className='btn'>
        add task
      </button>
    </form>
  );
}
export default Form;
```

index.tsx

```tsx
const toggleTask = ({ id }: { id: string }) => {
  setTasks(
    tasks.map((task) => {
      if (task.id === id) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    })
  );
};
return (
  <div>
    <Form addTask={addTask} />
    <List tasks={tasks} toggleTask={toggleTask} />
  </div>
);
```

List.tsx

```tsx
import { type Task } from './types';

type ListProps = {
  tasks: Task[];
  toggleTask: ({ id }: { id: string }) => void;
};

const List = ({ tasks, toggleTask }: ListProps) => {
  return (
    <ul className='list'>
      {tasks.map((task) => {
        return (
          <li key={task.id}>
            <p className='task-text'>{task.description}</p>
            <input
              type='checkbox'
              checked={task.isCompleted}
              onChange={() => {
                toggleTask({ id: task.id });
              }}
            />
          </li>
        );
      })}
    </ul>
  );
};
export default List;
```

index.tsx

```tsx
import { useEffect, useState } from 'react';
import Form from './Form';
import List from './List';
import { type Task } from './types';

// Load tasks from localStorage
function loadTasks(): Task[] {
  const storedTasks = localStorage.getItem('tasks');
  return storedTasks ? JSON.parse(storedTasks) : [];
}

function updateStorage(tasks: Task[]): void {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function Component() {
  const [tasks, setTasks] = useState<Task[]>(() => loadTasks());

  const addTask = (task: Task) => {
    setTasks([...tasks, task]);
  };

  const toggleTask = ({ id }: { id: string }) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, isCompleted: !task.isCompleted };
        }
        return task;
      })
    );
  };
  useEffect(() => {
    updateStorage(tasks);
  }, [tasks]);
  return (
    <div>
      <Form addTask={addTask} />
      <List tasks={tasks} toggleTask={toggleTask} />
    </div>
  );
}
export default Component;
```
