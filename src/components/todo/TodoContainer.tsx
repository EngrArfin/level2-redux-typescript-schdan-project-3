import { useAppSelector } from "@/redux/hook";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";

const TodoContainer = () => {
  const { todos } = useAppSelector((state) => state.todos);

  return (
    <div>
      <div>
        <div className="flex justify-between mb-5">
          <AddTodoModal></AddTodoModal>
          <TodoFilter></TodoFilter>
        </div>
        <div className="bg-primary-gradient h-full rounded-xl p-[5px]  ">
          <div className="bg-white h-full w-full p-5 rounded-md space-y-3">
            {todos.map((item) => (
              <TodoCard {...item}></TodoCard>
            ))}
          </div>

          {/*  <div className="bg-white p-5 flex text-2xl justify-center items-center rounded-md">
            <p>there is no pending product</p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
