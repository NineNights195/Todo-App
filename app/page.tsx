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
  function toggle(id: Number) {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
    updateTask();
  }

  function removeTask(id: Number) {
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
        <Stack key={123} bg="#FFFFFF" p={50} style={{ borderRadius: "10px" }}>
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
          ))}
        </Stack>
      </Center>
    </div>
  );
}
