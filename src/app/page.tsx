import TodoItem from "@/components/todo/TodoItem";

export default function Home() {
  return (
    <main className="wrapper">
      <div className="container-layout">
        {/* input-list */}
        <TodoItem mode="list" value="비타민 챙겨먹기" checked={false} />
        <TodoItem mode="list" value="비타민 챙겨먹기" checked={true} />

        {/* input-detail */}
        <TodoItem mode="detail" value="비타민 챙겨먹기" checked={false} />
        <TodoItem mode="detail" value="비타민 챙겨먹기" checked={true} />

        {/* input-add */}
        <TodoItem mode="add" value="" />
        <TodoItem mode="add" value="비타민 챙겨먹기" />
        <TodoItem
          mode="add"
          value="길이가 길어질 경우 다음과 같이 계속 오른쪽으로 갑니다... 길이가 길어질 경우 다음과 같이 계속 오른쪽으로 갑니다... 길이가 길어질 경우 다음과 같 길이가 길어질 경우 다음과 같이 계속 오른쪽으로 갑니다... 길이가 길어질 경우 다음과 같이 계속 오른쪽으로 갑니다... 길이가 길어질 경우 다음과 같"
        />
      </div>
    </main>
  );
}
