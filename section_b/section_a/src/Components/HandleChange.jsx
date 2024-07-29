import React from 'react'

export const HandleChange = (e) => {
  const { tasks, addTask, updateTask } = useTasks();
  const history = useHistory();
  const { id } = useParams();
  const [task, setTask] = useState({ title: '', description: '' });
  const [errors, setErrors] = useState({});
  return (
    <div>
      const { name, value } = e.target;
      setTask({ ...task, [name]: value });
    </div>
  )
}
