'use client'

import { ThreadValidation } from '@/lib/validations/thread'
import { Form } from '@/components/ui'

import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

function PostThread({ userId }: { userId: string }) {

  const form = useForm({
    resolver: zodResolver(ThreadValidation),
    defaultValues: {
      thread: '',
      accountId: userId
    }
  })

  return (
    <Form {...form}>

    </Form>
  )
}

export default PostThread
