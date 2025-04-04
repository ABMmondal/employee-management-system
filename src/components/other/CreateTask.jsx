import React, { useState } from "react";

const CreateTask = () => {
  const [title, setTaskTitle] = useState("");
  const [date, setTaskDate] = useState("");
  const [taskAssign, setTaskAssign] = useState("");
  const [category, setTaskCategory] = useState("");
  const [description, setTaskDescription] = useState("");
  const [newTask, setNewTask] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
    setNewTask({
      title,
      date,
      category,
      description,
      active: false,
      newTask: true,
      complete: false,
      failed: false,
    });
    const data = JSON.parse(localStorage.getItem("employees"));

    data.forEach(function (elm) {
      if (taskAssign === elm.ID) {
        elm.tasks.push(newTask);
        console.log(elm);
      }
    })

    setTaskTitle("");
    setTaskDate("");
    setTaskAssign("");
    setTaskCategory("");
    setTaskDescription("");

  };
  return (
    <div className=" flex  justify-center bg-gray-900 p-3">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full  text-white">
        <form
          onSubmit={(e) => {
            handleSubmit(e);
            console.log("Submitted");
          }}
          className="grid grid-cols-2 gap-6 items-start"
        >
          <div className="space-y-4">
            <div>
              <label className="block text-sm mb-1">Task Title</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTaskTitle(e.target.value)}
                placeholder="Make a UI design"
                className="w-full p-3 rounded bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Date</label>
              <input
                value={date}
                onChange={(e) => setTaskDate(e.target.value)}
                type="date"
                className="w-full p-3 rounded bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Assign To</label>
              <input
                type="text"
                value={taskAssign}
                onChange={(e) => setTaskAssign(e.target.value)}
                placeholder="Employee id"
                className="w-full p-3 rounded bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Category</label>
              <input
                value={category}
                onChange={(e) => setTaskCategory(e.target.value)}
                type="text"
                placeholder="Design, Dev, etc..."
                className="w-full p-3 rounded bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div className="space-y-4 flex flex-col">
            <div>
              <label className="block text-sm mb-1">Description</label>
              <textarea
                value={description}
                onChange={(e) => setTaskDescription(e.target.value)}
                placeholder="Detailed description of task (Max 500 words)"
                className="w-full p-3 h-full min-h-[150px] rounded bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full p-3 bg-green-600 hover:bg-green-700 rounded text-white mt-auto cursor-pointer"
            >
              Create Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTask;
