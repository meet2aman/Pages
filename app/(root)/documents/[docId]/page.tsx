import { Editor } from "@/components/editor/Editor";
import React from "react";

const docPage = ({ params }: { params: { docId: string } }) => {
  return (
    <div>
      <Editor />
    </div>
  );
};

export default docPage;
