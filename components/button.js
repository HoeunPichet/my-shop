"use client";

import { Button } from "@heroui/react";

export default function MyButton() {
  return (
    <>
      <div className="flex flex-col shrink-0 gap-4 mx-auto w-3/4 my-12">
        <Button color="default" radius="sm">
          Default
        </Button>
        <Button color="primary" radius="sm">
          primary
        </Button>
        <Button color="secondary" radius="sm">
          secondary
        </Button>
        <Button color="foreground" radius="sm">
          foreground
        </Button>
        <Button color="success" radius="sm">
          success
        </Button>
        <Button color="warning" radius="sm">
          warning
        </Button>
        <Button color="danger" radius="sm">
          danger
        </Button>
      </div>
    </>
  );
}
