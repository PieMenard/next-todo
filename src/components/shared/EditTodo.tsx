'use client';

import { BiEdit } from 'react-icons/bi';
import Button from '../ui/Button';
import Form from '../ui/Form';
import Input from '../ui/Input';
import { edit } from '@/app/actions/todoActions';
import { todoType } from '@/types/todoType';
import { useState } from 'react';

const EditTodo = ({ todo }: { todo: todoType }) => {
  const [editTodo, setEditTodo] = useState(false);

  const handleEdit = () => {
    setEditTodo(!editTodo);
  };

  const handleSubmit = () => {
    setEditTodo(false);
  };

  return (
    <div className="flex gap-5 items-center">
      <Button onClick={handleEdit} text={<BiEdit />} actionButton />
      {editTodo ? (
        <Form action={edit} onSubmit={handleSubmit}>
          <Input name="inputId" value={todo.id} type="hidden" />
          <div className="flex justify-center">
            <Input type="text" name="newTitle" placeholder="Edit To-do..." />
            <Button type="submit" text="Save" />
          </div>
        </Form>
      ) : null}
    </div>
  );
};

export default EditTodo;
