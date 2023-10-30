"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "../ui/input";
import { usePathname, useRouter } from "next/navigation";
import { CommentValidation } from "@/lib/validation/thread";
import Image from "next/image";
import { addCommentToThread } from "@/lib/actions/thread.action";
// import { createThread } from "@/lib/actions/thread.action";


interface Props{
    threadId: string;
    currentUserImg: string;
    currentUserId: string;
}

const Comment = ({ threadId, currentUserImg, currentUserId }: Props) => {
   
    const router = useRouter();
    const pathname = usePathname();
  
    const form = useForm<z.infer<typeof CommentValidation>>({
      resolver: zodResolver(CommentValidation),
      // dafual value is going to be object
      defaultValues: {
        thread: "",
      },
    });
    
    const onSubmit = async(values: z.infer<typeof CommentValidation>) => {
        await addCommentToThread(threadId, values.thread, JSON.parse(currentUserId), pathname);
        
      form.reset();
    }
    
    return (
        <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="comment-form">
        <FormField
          control={form.control}
          name="thread"
          render={({ field }) => (
            <FormItem className="flex w-full items-center gap-4">
              <FormLabel >
                      <Image
                        src={currentUserImg}
                        alt="Profile Image"
                        width={48}
                        height={48}
                        className="rounded-full object-cover"
                      />
              </FormLabel>
              <FormControl className="border-none bg-transparent">
                <Input
                  type="text"
                  placeholder="Comment..."
                  className="no-focus text-light-1 outline-none"
                  {...field} //... is used for spreading the property
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="comment-form_btn" type="submit">
          Reply
        </Button>
      </form>
    </Form>
    )
}

export default Comment