import React from 'react'

export const Validate = () => {
  const { tasks, addTask, updateTask } = useTasks();
  const history = useHistory();
  const { id } = useParams();
  const [task, setTask] = useState({ title: '', description: '' });
  const [errors, setErrors] = useState({});
  return (
    <div>
      const newErrors = {};
      if (!task.title) newErrors.title = 'Title is required';
      if (!task.description) newErrors.description = 'Description is required';
      return newErrors;
    </div>
  )
}
