import TodoCard from "./TodoCard";

const TodoContainer = () => {
  return (
    <div>
      <h1>Hello, TodoContainer!</h1>
      <div>
        <button>Add Todo</button>
        <button>Filter</button>
        <div className="bg-red-500 w-full h-full rounded-xl p-5 space-y-3 ">
          <div className="bg-white p-5 flex text-2xl justify-center items-center rounded-md">
            <p>there is no pending product</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
