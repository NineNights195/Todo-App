"use client";
import { Button, Center, Group, Stack, TextInput, Text } from "@mantine/core";
import { useState } from "react";
import Task from "./components/Task";
import InputFields from "./components/InputFields";

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
          <Text size="lg" fw={500}>
            Tasks: {allTasks}, Completed: {completedTasks}, Uncompleted:{" "}
            {uncompletedTasks}
          </Text>
          <Group>
            <Button
              size="input-sm"
              onClick={() => addTasks()}
              disabled={name.length === 0}
            >
              Add
            </Button>
            <InputFields
              name={name}
              description={description}
              setName={setname}
              setDescription={setdescription}
            />
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
