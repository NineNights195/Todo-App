import React from "react";
import { task } from "../page";
import { Button, Checkbox } from "@mantine/core";
export default function Task({
  task,
  toggle,
  removeTask,
}: {
  task: task;
  toggle: Function;
  removeTask: Function;
}) {
  return (
    <div>
      <Checkbox
        label={task.name}
        description={task.description}
        size="md"
        onChange={() => toggle(task.id)}
        bg={task.completed == true ? "green" : "white"}
      />
      <Button
        color="#f03e3e"
        variant="outline"
        onClick={() => removeTask(task.id)}
      >
        Remove
      </Button>
    </div>
  );
}
