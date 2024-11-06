"use client";
import { Button, Input, Text } from "@mantine/core";
import { useState } from "react";
export default function Home() {
  const [name, setname] = useState("Thanarat");
  return (
    <>
      <Text
        size="xl"
        fw={900}
        variant="gradient"
        gradient={{ from: "blue", to: "cyan", deg: 90 }}
      >
        {name}
      </Text>
      <Input
        variant="filled"
        placeholder="Tasks"
        onChange={(e) => setname(e.target.value)}
      />
      <Button variant="filled">Add Task</Button>
    </>
  );
}
