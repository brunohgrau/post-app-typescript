import React from "react";

type Props = {
  id: number;
  title: string;
};

const PostScreen: React.FC<Props> = ({ id, title }) => {
  return <div>PostScreen</div>;
};

export default PostScreen;
