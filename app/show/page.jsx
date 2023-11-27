
import React from 'react'
import connectMongoDB from '../lib/mongodb'
import todoList from '../model/Todo';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { AiOutlineDelete } from "react-icons/ai";
import { CiEdit } from "react-icons/ci";



async function show() {
  
    
 await connectMongoDB();
const todos = await todoList.find();

async function deleteTodo(data){
    "use server"
    let id = JSON.parse(data.get("id")?.valueOf());
    await todoList.deleteOne({_id:id});
    alert("Exam Deleted");
    redirect('/show');
}
   
  return (
   <main className="m-10 space-y-5">
    <h1 className="text-xl font-bold">Todos</h1>
    {/* <div>
        <ul className="flex font-bold">
                <li className="flex-1">Title</li>
                <li className="flex-1">Todos</li>
                <li className="flex-1">Option</li>
        </ul>
        <hr/>
        {todos.map((element)=>{
            return(
                <>
                <ul className="flex"key={element._id}>
                    <li className="flex-1">{element.title}</li>
                    <li className="flex-1">{element.todo}</li>
                    <li className="flex">
                        <form action={deleteTodo}>
                            <input type='hidden' id='id' name='id' value={JSON.stringify(element._id)}/>
                        <div className="flex"><button type='submit' className="p-2 m-2 bg-red-600 text-white hover:cursor-pointer rounded-md">Delete</button></div>
                        </form>
                       <Link href={'/edit/'+element._id}>
                        <div className="flex"><button className="p-2 m-2 bg-blue-600 text-white hover:cursor-pointer rounded-md">Update</button></div>
                        </Link>
                    </li>
                </ul>
                </>
            )
        })}
    </div> */}

<div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Exam id</th>
        <th>Title</th>
        <th>Todos</th>
        <th>Option</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {todos.map((element)=>{
        return(
            <tr className="bg-base-200">
            <th className='text-red-500'>{element._id}</th>
            <td>{element.title}</td>
            <td>{element.todo}</td>
            <td className='flex'>

            <form action={deleteTodo}>
                            <input type='hidden' id='id' name='id' value={JSON.stringify(element._id)}/>
                        <div className="flex"><button type='submit' className="p-2 m-2 bg-red-600 text-white hover:cursor-pointer rounded-md">
                            <AiOutlineDelete size={24}/>
                            </button></div>
                        </form>
                       <Link href={'/edit/'+element._id}>
                        <div className="flex"><button className="p-2 m-2 bg-blue-600 text-white hover:cursor-pointer rounded-md">
                            <CiEdit size={24}></CiEdit>
                            </button></div>
                        </Link>


            </td>
          </tr>
        )
      })}
      
      
    </tbody>
  </table>
</div>
   </main>
  )
}

export default show