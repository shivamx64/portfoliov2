"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  contactFormSchema,
  type ContactFormInput,
  type ContactFormValues,
} from "@/lib/validations";

type FormStatus =
  | {
      type: "success" | "error";
      message: string;
    }
  | null;

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormInput, unknown, ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
      website: "",
    },
  });

  const onSubmit = handleSubmit(async (values) => {
    setStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const payload = (await response.json().catch(() => ({}))) as {
        message?: string;
      };

      if (!response.ok) {
        setStatus({
          type: "error",
          message:
            payload.message ?? "Something went wrong. Please try again.",
        });
        return;
      }

      reset();
      setStatus({
        type: "success",
        message: payload.message ?? "Thanks. Your message was sent.",
      });
    } catch {
      setStatus({
        type: "error",
        message: "Network error. Please try again or email me directly.",
      });
    }
  });

  return (
    <form
      onSubmit={onSubmit}
      className="relative space-y-6 border-t border-border/60 pt-6"
    >
      <div
        aria-hidden="true"
        className="absolute left-[-9999px] top-auto size-px overflow-hidden"
      >
        <Label htmlFor="website">Website</Label>
        <Input
          id="website"
          tabIndex={-1}
          autoComplete="off"
          {...register("website")}
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            placeholder="Your name"
            disabled={isSubmitting}
            aria-invalid={Boolean(errors.name)}
            {...register("name")}
          />
          {errors.name ? (
            <p className="text-sm text-destructive">{errors.name.message}</p>
          ) : null}
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="you@example.com"
            disabled={isSubmitting}
            aria-invalid={Boolean(errors.email)}
            {...register("email")}
          />
          {errors.email ? (
            <p className="text-sm text-destructive">{errors.email.message}</p>
          ) : null}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="subject">Subject</Label>
        <Input
          id="subject"
          placeholder="What should we talk about?"
          disabled={isSubmitting}
          aria-invalid={Boolean(errors.subject)}
          {...register("subject")}
        />
        {errors.subject ? (
          <p className="text-sm text-destructive">{errors.subject.message}</p>
        ) : null}
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          placeholder="Tell me a little about the work, the team, or the problem space."
          disabled={isSubmitting}
          aria-invalid={Boolean(errors.message)}
          {...register("message")}
        />
        {errors.message ? (
          <p className="text-sm text-destructive">{errors.message.message}</p>
        ) : null}
      </div>
      <div className="flex flex-wrap items-center gap-4">
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send message"}
        </Button>
        {status ? (
          <p
            className={
              status.type === "success"
                ? "text-sm text-muted-foreground"
                : "text-sm text-destructive"
            }
          >
            {status.message}
          </p>
        ) : null}
      </div>
    </form>
  );
}
