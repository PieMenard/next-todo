'use client';

import { BiEdit } from 'react-icons/bi';

import { deleteTodo } from '@/app/actions/todoActions';
import { todoType } from '@/types/todoType';
import { useState } from 'react';
import Form from '../ui/Form';
import Input from '../ui/Input';
import Button from '../ui/Button';
import { BsTrashFill } from 'react-icons/bs';

const DeleteTodo = ({ todo }: { todo: todoType }) => {
  return (
    <Form action={deleteTodo}>
      <Input type="hidden" name="inputId" value={todo.id} />
      <Button actionButton text={<BsTrashFill />} type="submit" />
    </Form>
  );
};

export default DeleteTodo;
