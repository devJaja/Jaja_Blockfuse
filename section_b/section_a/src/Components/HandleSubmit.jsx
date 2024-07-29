import React from 'react'

export const HandleSubmit = (e) => {
  return (
    <div>
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
    </div>
  )
}
