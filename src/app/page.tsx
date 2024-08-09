import AddTodo from '@/components/shared/AddTodo';

export default function Home() {
  return (
    <div className="w-screen py-20 flex justify-center flex-col items-center">
      <span className="text-3xl font-bold uppercase">To-Do App</span>
      <h1 className="text-3xl font-extrabold uppercase mb-5 ">
        Next.js 14
        <span className="text-cyan-800 ml-2">Server Actions</span>
      </h1>
      <div className="flex justify-center flex-col items-center w-[1000px]">
        <AddTodo />
      </div>
    </div>
  );
}
