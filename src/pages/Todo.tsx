import TodoContainer from "@/components/todo/TodoContainer";
import Container from "@/components/ui/Container";

const Todo = () => {
  return (
    <Container>
      <h2 className="max-auto items-center justify-center font-bold text-xl">
        Welcome page{" "}
      </h2>
      {/* <h1 className="text-center text-3xl font-semibold my-10">
        Hello, First Page Todo! <Button>CLick Here</Button>
      </h1> */}
      <TodoContainer></TodoContainer>
    </Container>
  );
};

export default Todo;
