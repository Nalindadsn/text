import React from 'react'
import Todo from '../../model/Todo.js'
import connectDB from '../../lib/mongodb.js'
import { redirect } from 'next/navigation';

async function page({params}) {
    connectDB();

    const todos = await Todo.findOne({_id:params.id});


    //function to save the updated todo
    async function updateTodo(data){
        'use server'
        try {
            let title =data.get("title")?.valueOf();
        let todo =data.get("todo")?.valueOf();
        
        let updatedTodo = await Todo.findByIdAndUpdate({_id:params.id},
            {title,todo});
            console.log(updatedTodo);
        } catch (error) {
            console.log(error)
        }
        redirect("/show");            
    }
  return (
    <main className='m-10 apsce-y-5'>
      <h1 className="textxl font-bold">
        Create ToDo
      </h1>
      <form action={updateTodo}>
        <div>
          <label htmlFor="title">Enter Title</label>
        <br />
        <input type="text" className="w-[100%]
         bg-slate-200 h-10  text-black
         p-3" name='title'id='title' defaultValue={todos.title} />
         </div>

         <div>
          <label htmlFor="todo">Enter Todo</label>
        <br />
        <input type="text" className="w-[100%]
         bg-slate-200 h-10 text-black
         p-3" name='todo' id='todo' value={todos.todo}/>
         </div>

         <button type='submit'className='p-3 bg-yellow-400 font-bold hover:bg-red-500 '>
            Update</button>
      </form>
    </main> 
  )
}

export default page