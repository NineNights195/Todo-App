"use client";
import { Button, Center, Group, Stack, TextInput } from "@mantine/core";
import { useState } from "react";
import Task from "./components/Task";

export type task = {
  id: number;
  name: string;
  description: string;
  completed: boolean;
};

export default function Home() {
  const [tasks, setTasks] = useState<task[]>([]);
  const [name, setname] = useState("");
  const [description, setdescription] = useState("");
  const [id, setid] = useState(0);

  let allTasks = tasks.length;
  let completedTasks = tasks.filter((task) => task.completed).length;
  let uncompletedTasks = tasks.length - completedTasks;

  function addTasks() {
    let task = { id: id + 1, name, description, completed: false };
    let newTasks = [...tasks, task];
    setTasks(newTasks);
    setid(id + 1);
    updateTask();
  }
  function toggle(id: number) {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
    updateTask();
  }

  function removeTask(id: number) {
    let newTasks = tasks.filter((task) => task.id != id);
    setTasks(newTasks);
    updateTask();
  }

  function updateTask() {
    allTasks = tasks.length;
    completedTasks = tasks.filter((task) => task.completed).length;
    uncompletedTasks = tasks.length - completedTasks;
  }

  return (
    <div>
      <Center h="100vh" bg="#7048e8">
        <Stack bg="#FFFFFF" p={50} style={{ borderRadius: "10px" }}>
          All Tasks = {allTasks}, Completed Tasks = {completedTasks},
          Uncompleted Tasks = {uncompletedTasks}
          <Group>
            <Button
              size="input-sm"
              onClick={() => addTasks()}
              disabled={name.length === 0}
            >
              Add
            </Button>
            <Stack>
              <TextInput
                placeholder="Name"
                size="sm"
                value={name}
                onChange={(event) => setname(event.target.value)}
              />
              <TextInput
                placeholder="Description"
                size="sm"
                value={description}
                onChange={(event) => setdescription(event.target.value)}
              />
            </Stack>
          </Group>
          {/* Tasks List */}
          {tasks.map((task) => (
            <Task
              key={task.id}
              task={task}
              toggle={toggle}
              removeTask={removeTask}
            ></Task>
          ))}
        </Stack>
      </Center>
    </div>
  );
}
