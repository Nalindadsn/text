import Image from 'next/image'
import Todo from '@/app/model/Todo.js'
import mongoose from 'mongoose';
import connectMongoDB from '@/app/lib/mongodb.js'

import { redirect } from 'next/navigation';

export default function Home() {

  //Function to save
  async function newTodo(data:any){
    "use server"
    let title =data.get("title")?.valueOf();
    let todo =data.get("todo")?.valueOf();
    
    try {
      await connectMongoDB();
      let newTodo = new Todo({title,todo});
      await newTodo.save();



      console.log(newTodo);
    } catch (error) {
      console.error(error);
    }
    redirect('/show');
  }
  return (
    <main className='m-10 apsce-y-5'>
      <h1 className="textxl font-bold">
        Create ToDo
      </h1>
      <form action={newTodo}>
        <div>
          <label htmlFor="title">Enter Title</label>
        <br />
        <input type="text" className="w-[100%]
         bg-slate-200 h-10  text-black
         p-3" name='title'id='title' />
         </div>

         <div>
          <label htmlFor="todo">Enter Todo</label>
        <br />
        <input type="text" className="w-[100%]
         bg-slate-200 h-10 text-black
         p-3" name='todo' id='todo'/>
         </div>

         <button type='submit'className='p-3 bg-yellow-400 font-bold hover:bg-red-500 '>SUBMIT</button>
      </form>
    </main>
  )
}
