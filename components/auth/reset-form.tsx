"use client";
import CardWrapper from "./card-wrapper";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { LoginSchema, ResetSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { startTransition, useState, useTransition } from "react";
import { reset } from "@/actions/reset";
import FormError from "../form-error";
import FormSuccess from "../form-success";

const ResetForm = () => {
  const [error, SetError] = useState<string | undefined>("");
  const [success, SetSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();
  const form = useForm<z.infer<typeof ResetSchema>>({
    resolver: zodResolver(ResetSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (values: z.infer<typeof ResetSchema>) => {
    SetError("");
    SetSuccess("");

    startTransition(() => {
      reset(values).then((data) => {
        SetError(data?.error);
        SetSuccess(data?.success);
      });
    });
  };

  return (
    <CardWrapper
      backButtonLabel="Back to login"
      backButtonHref="/auth/login"
      headerLabel="Forgot your password?"
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="enter your email"
                      type="email"
                      disabled={isPending}
                    />
                  </FormControl>
                  <FormError message={error} />
                  <FormSuccess message={success} />
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button type="submit" className="w-full" disabled={isPending}>
            Send reset email
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};

export default ResetForm;
