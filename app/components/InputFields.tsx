import React from "react";
import { TextInput, Stack } from "@mantine/core";

interface InputFieldsProps {
  name: string;
  description: string;
  setName: (value: string) => void;
  setDescription: (value: string) => void;
}

export default function InputFields({
  name,
  description,
  setName,
  setDescription,
}: InputFieldsProps) {
  return (
    <Stack>
      <TextInput
        placeholder="Name"
        size="sm"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <TextInput
        placeholder="Description"
        size="sm"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
    </Stack>
  );
}
