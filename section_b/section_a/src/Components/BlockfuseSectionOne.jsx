import React, { useState, useEffect } from 'react';
import { useTasks } from './UseTasks';
import { useHistory, useParams } from 'react-router-dom';

const BlockfuseSectionB = () => {
  const { tasks, addTask, updateTask } = useTasks();
  const history = useHistory();
  const { id } = useParams();
  const [task, setTask] = useState({ title: '', description: '' });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (id) {
      const taskToEdit = tasks.find(task => task.id === id);
      if (taskToEdit) {
        setTask(taskToEdit);
      }
    }
  }, [id, tasks]);

  const validate = () => {
    const newErrors = {};
    if (!task.title) newErrors.title = 'Title is required';
    if (!task.description) newErrors.description = 'Description is required';
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      if (id) {
        updateTask(task);
      } else {
        addTask({ ...task, id: Date.now().toString() });
      }
      history.push('/');
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title</label>
        <input
          type="text"
          name="title"
          value={task.title}
          onChange={handleChange}
        />
        {errors.title && <p>{errors.title}</p>}
      </div>
      <div>
        <label>Description</label>
        <input
          type="text"
          name="description"
          value={task.description}
          onChange={handleChange}
        />
        {errors.description && <p>{errors.description}</p>}
      </div>
      <button type="submit">Save</button>
    </form>
  );
};

export default BlockfuseSectionB;
