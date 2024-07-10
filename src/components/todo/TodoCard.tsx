const TodoCard = () => {
  return (
    <div className="bg-white rounded-md flex justify-between items-center p-5">
      <input type="checkbox" name="" id="" />
      <p>Todo Filter </p>
      <p>Time </p>
      <p>Discription</p>
      <div className="space-x-5">
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </div>
  );
};

export default TodoCard;
