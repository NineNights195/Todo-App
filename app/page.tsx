"use client";
import {
  Accordion,
  ActionIcon,
  Box,
  Button,
  Center,
  Checkbox,
  Group,
  Input,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";
import { useState } from "react";

type task = {
  id: Number;
  name: String;
  description: String;
  completed: Boolean;
};

export default function Home() {
  const [tasks, setTasks] = useState([
    { id: 1, name: "task1", description: "Lorem Ipsum", completed: false },
    { id: 2, name: "task2", description: "Lorem Ipsum", completed: false },
    { id: 3, name: "task3", description: "Lorem Ipsum", completed: false },
    { id: 4, name: "task4", description: "Lorem Ipsum", completed: false },
    { id: 5, name: "task5", description: "Lorem Ipsum", completed: false },
  ]);
  const [name, setname] = useState("");
  const [description, setdescription] = useState("");

  function addTasks() {
    let task = { id: tasks.length + 1, name, description, completed: false };
    let newTasks = [...tasks, task];
    setTasks(newTasks);
  }
  function toggle(id: number) {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }

  return (
    <>
      <Center h="100vh" bg="#7048e8">
        <Stack bg="#FFFFFF" p={50} style={{ borderRadius: "10px" }}>
          <Group>
            <ActionIcon size="input-sm" onClick={() => addTasks()}>
              Add
            </ActionIcon>
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
            <Checkbox
              label={task.name}
              description={task.description}
              size="md"
              onChange={() => toggle(task.id)}
              bg={task.completed == true ? "green" : "white"}
            />
          ))}
        </Stack>
      </Center>
    </>
  );
}
